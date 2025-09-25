#!/usr/bin/env bash

# This script will interactively run pre-commit steps such as formatting and linting,
# then add, commit, and push changes with user direction. This is to ensure that the
# commit uniform, to standard, and reviews changes for accuracy.

# Variables

# Color codes
reset=$(tput sgr0)  # reset
error=$(tput setaf 1) # red
success=$(tput setaf 2) # green
warning=$(tput setaf 3) # yellow
highlight=$(tput setaf 4) # blue

# Prefix for messages
prefix="${highlight}[${reset}commit.sh${highlight}]${reset} "

# Helper functions
print_error() {
    printf "%s[${error}-${reset}] ${error}%s${reset}\n" "$prefix" "$1"
}

print_success() {
    printf "%s[${success}+${reset}] ${success}%s${reset}\n" "$prefix" "$1"
}

print_warning() {
    printf "%s[${warning}!${reset}] ${warning}%s${reset}\n" "$prefix" "$1"
}

print_input() {
    printf "%s[${highlight}?${reset}] \e[1m%s\e[0m\n" "$prefix" "$1"
}

print_info() {
    printf "%s[${highlight}*${reset}] ${highlight}%s${reset}\n" "$prefix" "$1"
}

exit_with_error() {
    print_error "$1"
    printf "%s%s" "$prefix" "Exiting."
    exit 1
}


# Pre-commit steps: prettier, tsc, eslint

# Detect alternative NodeJS environment
js_env="npm"
if which bun >/dev/null; then
	print_success "BunJS detected. Switching to bun from npm."
	js_env="bun"
fi

# prettier
$js_env run prettier
prettier_exit_code=$?
if [ "$prettier_exit_code" -eq 0 ]; then
    print_success "No prettier issues detected."
else
    if [ "$prettier_exit_code" -eq 1 ]; then
        exit_with_error "Prettier issues detected."
    else
        exit_with_error "prettier returned unexpected exit code $prettier_exit_code"
    fi
fi

# tsc
$js_env run tsc
tsc_exit_code=$?
if [ "$tsc_exit_code" -eq 0 ]; then
    print_success "No TypeScript issues detected."
else
    if [ "$tsc_exit_code" -eq 1 ]; then
        exit_with_error "TypeScript issues detected."
    else
        exit_with_error "tsc returned unexpected exit code $tsc_exit_code"
    fi
fi


# lint
$js_env run lint
lint_exit_code=$?
if [ "$lint_exit_code" -eq 0 ]; then
    print_success "No linting errors or warnings exceeded."
else
    if [ "$lint_exit_code" -eq 1 ]; then
        exit_with_error "There are linting errors or warnings exceeded."
    else
        exit_with_error "lint returned unexpected exit code $lint_exit_code"
    fi
fi
# check output for fixes possible and prompt to run eslint --fix

# format shell scripts with shfmt
which shfmt >/dev/null
shfmt_installed=$?
if [ "$shfmt_installed" -eq 0 ]; then
	shfmt -w ./*.sh
	shfmt_exit_code=$?
	if [ "$shfmt_exit_code" -eq 0 ]; then
		print_success "No shfmt issues detected."
	else
		if [ "$shfmt_exit_code" -eq 1 ]; then
			exit_with_error "shfmt issues detected."
		else
			exit_with_error "shfmt returned unexpected exit code $shfmt_exit_code"
		fi
	fi
else
	print_warning "shfmt not installed. Skipping shfmt."
fi

# lint shell scripts with shellcheck
which shellcheck >/dev/null
shellcheck_installed=$?
if [ "$shellcheck_installed" -eq 0 ]; then
	shellcheck ./*.sh
	shellcheck_exit_code=$?
	if [ "$shellcheck_exit_code" -eq 0 ]; then
		print_success "No shellcheck issues detected."
	else
		if [ "$shellcheck_exit_code" -eq 1 ]; then
			exit_with_error "Shellcheck issues detected."
		else
			exit_with_error "shellcheck returned unexpected exit code $shellcheck_exit_code"
		fi
	fi
else
    print_warning "shellcheck not installed. Skipping shellcheck."
fi


# Commit functionality

# Check if there are changes (exit code 1 means differences exist)
git diff --quiet --exit-code
diff_exit_code=$?
if [ "$diff_exit_code" -eq 0 ]; then
    # exit-code 0: no changes
    print_info "No changes detected."
else
	# git diff --exit-code returned non-zero (usually 1) meaning there are staged changes
	if [ "$diff_exit_code" -eq 1 ]; then
		git diff
		while true; do
			print_input "There are unstaged changes to add. Do you want to add the above changes to staging (Y/n)? [default: Yes]"
			read -r response
			response=${response:-y} # default to 'y' if empty
			case $response in
			[yY])
				print_info "Adding changes..."
				git add .
				break
				;;
			[nN])
				print_info "No changes added to staging."
				break
				;;
			*) print_warning "Invalid response." ;;
			esac
		done
	else
		exit_with_error "git diff returned unexpected exit code %d" "$diff_exit_code"
	fi
fi

# Check if there are staged changes
git diff --cached --quiet --exit-code
diff_staged_exit_code=$?
if [ "$diff_staged_exit_code" -eq 0 ]; then
    # exit-code 0: no staged changes
    print_info "No staged changes detected."
else
    # git diff --cached --exit-code returned non-zero (usually 1) meaning there are staged changes
    if [ "$diff_staged_exit_code" -eq 1 ]; then
        print_info "There are staged changes. Proceeding to commit."
    else
        exit_with_error "git diff returned unexpected exit code %d" "$diff_staged_exit_code"
    fi
fi

# Commit items and check for commit message
git status
while true; do
    ## If no commit message provided as an argument, prompt for one.
    if [ -z "$1" ]; then
        print_input "No commit message provided. Enter commit message:"
        IFS= read -r user_msg
        if [ -z "$user_msg" ]; then
            print_warning "No commit message entered."; break;
        fi
        commit_msg="$user_msg"
    else
        commit_msg="$1"
    fi

	print_info "$commit_msg"
	print_input "Are you sure you want to commit the above with the above message (Y/n)? [default: Yes]" "$commit_msg"
	read -r response
	response=${response:-y} # default to 'y' if empty
	case $response in
	[yY])
		print_info "Committing changes..."
		git commit -m "$commit_msg"
		break
		;;
	[nN])
		print_info "Commit cancelled."
		break
		;;
	*) print_warning "Invalid response." ;;
	esac
done

# Check for any commits to push (exit code 1 means commits exist)
git log "@{push}.." --quiet --exit-code
push_exit_code=$?
if [ "$push_exit_code" -eq 0 ]; then
    # exit-code 0: no staged changes
    print_info "No commits detected to push."
else
	# git diff --cached --exit-code returned non-zero (usually 1) meaning there are staged changes
	if [ "$push_exit_code" -eq 1 ]; then
		print_info "There are commits that have not been pushed."
		git log "@{push}.."
		while true; do
			print_input "Do you want to push the above commits (Y/n)? [default: Yes]"
			read -r response
			response=${response:-y} # default to 'y' if empty
			case $response in
			[yY])
				print_info "Pushing commits..."
				git push
				break
				;;
			[nN])
				print_info "Push cancelled."
				break
				;;
			*) print_warning "Invalid response." ;;
			esac
		done
	else
		exit_with_error "git push returned unexpected exit code %d" "$push_exit_code"
	fi
fi

print_info "Exiting."
exit
