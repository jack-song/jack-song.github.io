#!/bin/bash
trap 'exit' ERR

# Generate site
hugo

# stash public files
cd public

git checkout master
git add -A

msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"
git push origin master
git checkout dev