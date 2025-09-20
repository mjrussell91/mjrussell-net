#!/usr/bin/env bash

# This script will interactively run pre-commit steps such as formatting and linting,
# then add, commit, and push changes with user direction. This is to ensure that the
# commit uniform, to standard, and reviews changes for accuracy.

# Pre-commit steps: prettier, tsc, eslint

# Detect alternative NodeJS environment
js_env="npm"
if which bun > /dev/null; then
    printf "BunJS detected. Switching to bun from npm.\n"
    js_env="bun"
fi

# prettier
if $js_env run prettier; then
    printf "No prettier issues detected.\n"
else
    if [ "$?" -eq 1 ]; then
        printf "Prettier issues detected.\nExiting."
        exit 1
    else
        printf "prettier returned unexpected exit code %d\nExiting." "$?"
        exit 1
    fi
fi

# tsc
if $js_env run tsc; then
    printf "No TypeScript issues detected.\n"
else
    # when the script invokes run tsc with an error, exit code 1 is returned but does not equal 1 for the if condition
    # exit code 2 is returned when running command directly with an error
    # regardless both are errors and script should exit but reporting is inconsistent
    # run tsx . --noEmit to force an error for debugging
    if [ "$?" -eq 1 ]; then
        printf "TypeScript issues detected.\nExiting."
        exit 1
    else
        printf "tsc returned unexpected exit code %d\nExiting." "$?"
        exit 1
    fi
fi


# lint
if $js_env run lint; then
    printf "No linting errors or warnings exceeded.\n"
else
    if [ "$?" -eq 1 ]; then
        printf "There are linting errors or warnings exceeded.\nExiting."
        exit 1
    else
        printf "lint returned unexpected exit code %d\nExiting." "$?"
        exit 1
    fi
fi
# check output for fixes possible and prompt to run eslint --fix


## Commit functionality

# Check if there are changes (exit code 1 means differences exist)
if git diff --quiet --exit-code; then
    # exit-code 0: no changes
    printf "No changes detected.\n"
else
    # git diff --cached --exit-code returned non-zero (usually 1) meaning there are staged changes
    if [ "$?" -eq 1 ]; then
        git diff
        printf "\nThere are unstaged changes to add. Do you want to add the above changes to staging?\n> "
        while true; do
            read -r response
            case $response in
                [yY] ) printf "Adding changes...\n"; git add .; break;;
                [nN] ) printf "No changes added to staging.\n"; break;;
                * ) printf "Invalid response. Please enter 'y' or 'n'.\n> ";;
            esac
        done
    else
        printf "git diff returned unexpected exit code %d\n" "$?"
        exit
    fi
fi


# Check if there are staged changes
if git diff --cached --quiet --exit-code; then
    # exit-code 0: no staged changes
    printf "No staged changes detected.\n"
else
    # git diff --cached --exit-code returned non-zero (usually 1) meaning there are staged changes
    if [ "$?" -eq 1 ]; then
        printf "There are staged changes. Proceeding to commit.\n"
    else
        printf "git diff returned unexpected exit code %d\n" "$?"
    fi
fi

# Commit items and check for commit message
git status
while true; do
    ## If no commit message provided as an argument, prompt for one.
    if [ -z "$1" ]; then
        printf "No commit message provided. Enter commit message:\n> "
        IFS= read -r user_msg
        if [ -z "$user_msg" ]; then
            printf "No commit message entered.\n"; break;
        fi
        commit_msg="$user_msg"
    else
        commit_msg="$1"
    fi

    printf 'Are you sure you want to commit the above as: "%s"\n> ' "$commit_msg"
    read -r response
    case $response in
        [yY] ) echo "Committing changes..."; git commit -m "$commit_msg"; break;;
        [nN] ) printf "Commit cancelled."; break;;
        * ) printf "Invalid response. Please enter 'y' or 'n'.\n> ";;
    esac
done

## Check for any commits to push (exit code 1 means commits exist)
if git log @{push}.. --quiet --exit-code; then
    # exit-code 0: no staged changes
    printf "No commits detected to push.\n"
else
    # git diff --cached --exit-code returned non-zero (usually 1) meaning there are staged changes
    if [ "$?" -eq 1 ]; then
        printf "There are commits that have not been pushed.\n"
        git log @{push}..
        printf "Do you want to push the above commits:\n> "
        while true; do
            read -r response
            case $response in
                [yY] ) printf "Pushing commits...\n"; git push; break;;
                [nN] ) printf "Push cancelled.\n"; break;;
                * ) printf "Invalid response. Please enter 'y' or 'n'.\n> ";;
            esac
        done
    else
        printf "git push returned unexpected exit code %d\n" "$?"
        exit 1
    fi
fi

printf "Exiting."
exit