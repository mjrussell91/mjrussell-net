#!/bin/bash

cd .git/hooks || exit
if [ ! -f pre-commit ]; then
	cat <<"EOF" >pre-commit
#!/bin/bash
scripts/pre-commit.sh

EOF
	chmod +x pre-commit
fi
