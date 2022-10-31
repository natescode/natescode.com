---
title: "GIT Aliases for the WIN"
date: 2015-01-01T00:03:46-05:00
draft: false
---

## Git Aliases for the win

productivity
Git, while a powerful tool, has in my humble opinion a terrible API. I'm going to cover some aliases and configuration changes I've made.

```yaml
git cm "message"
# Equates to git commit -m "message"

git save "message"
# Equates to git add -A && git commit -m && git push
# \*push automatically does git --set-upstream-branch thanks to the [push] configuration I show late.r

git wipe
# Equates to git reset --hard

git feat
# Creates a new feature branch and checks it out.

git feat new-feature
# Will do git checkout -b feature/new-feature

git syncod
# Fetch latest
# Merged the latest from origin/develop into the current branch.
push
# I use this before pushing my branch and making a pull request.

# git sync origin/develop is the manual way to choose which origin and branch to sync

git squash
# While squashing is a concept, it isn't an actual command in GIT.
# If you want to make the last N commits into a single commit then you squash. I prefer this to keep a clean GIT history before pushing and pull requesting.

#Auto Setup Remote
#Ever get this error ?

#Image description

#Then you have to run:

git push --set-upstream origin master

#You can avoid this with

[push]
default = current
autoSetupRemote = true
[pull]
default = current

Branch shortcuts
git dev = git checkout develop
git main = git checkout main
git master = git checkout master
```

## Conclusion

Hope this was helpful. All my Git config changes can be found [here](https://gist.github.com/natescode/aed203bb2826628993a67dfadb22302a).
