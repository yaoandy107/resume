#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/yaoandy107/resume.git master:gh-pages

cd -