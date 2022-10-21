###
# Copied and adjusted from https://gist.github.com/SangsooNam/06de16f154d0e9a08b436a7252e80f34
###

#!/bin/bash
directory=dist
branch=gh-pages
build_command() {
  npm run build
}

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory

echo -e "\033[0;32mChecking out $branch...\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mBuilding site...\033[0m"
build_command

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git add --all &&
  git commit -m "Deploy new updates" &&
  git push origin $branch

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory