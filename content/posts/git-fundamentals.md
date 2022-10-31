---
title: "GIT Fundamentals"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Git concept fundamentals

#

beginners

#

tutorial
I'm going to cover some fundamental concepts of HOW Git and version control works at a low level. Hopefully, this gives you a better foundation to understand Git. VERY few understand how Git works. Most just take the lazy path of learning a few commands and nothing more, until they somehow loose code.

Why Versus Control ? 🤔
The first question you should always ask of a particular technology is "what problem does X solve?".

I've seen and even named files similarly to the following:

index.8oct13.html
index.old.html
index.final.html

So why? Because you currently have your code working, great! But adding code risks breaking it. How do we get back go a solid backup point? Well, not by having duplicate files, that's for sure.

So version control isn't just for teams. It works great for individuals as well. You may not branch much or at all when working alone since you're probably not switching between tasks. On a team, branches etc. become a lot more important.

Version Control ✍️
Version Control or Source Control is a tool that saves previous versions of your code. Technically, GIT saves commits which are the changed not the WHOLE repository (project).

Terminology 📖
Let's cover some fundamental terms so we're speaking the same language.

Repository - "a central location in which data is stored and managed".

In Git, this is just your project folder 📂 that has a hidden .git 📁 inside.

Version Control - "the task of keeping a software system consisting of many versions and configurations well organized.".

Simply just a tool that tracks code changes for a particular repository. Examples include: Git, Mercurial, Source Safe, TFVC etc.

Diff - differences between two branches, files etc.

Commit - specific version of a repository. In Git, commits are only the changes, not whole copies of the project.

Merge - taking two versions of code and comparing them. We resolve conflicts (where both branches change the same like of code) and create a new merge commit.

Remote vs Locally
Image description

My Bootcamp students often confuse these two. I can't blame them since Git and GitHub sound like the same thing. Git is to GitHub as Car is to Carwash.

There are two main types of version control tools: distributed and centralized. Git is distributed.

Distributed
This is what Git is. Git stores ALL your changes locally in .git 📁. As far as a GIT is concerned the internet doesn't exist. All git commands are done locally: rebase, commit, branch, reset, merge etc.

Only until you add a remote repository can you push and pull (fetch and merge), Git is ONLY on your computer. This really confuses new developers as well as senior developers who have used centralized source control before.

Centralized
Before Microsoft bought GitHub. They had their own, horrible, version control tool called Team Foundation Version Control or TFVC for short. This was a part of their TFS software which manages projects, builds, deployments etc. It is called Azure DevOps now.

TFVC simulated everyone working on the exact same computer at the same time. ALL code history only exists on the server.

Files would be copied to your local computer, BUT if you doubled clicked on them in Visual Studio then you'd lock them so no one else could edit them at the same time. There is no concept of savings merges. Once you merge, that's it. If you accidentally take their changes which overwrite yours, yours are gone forever. (I've seen a 2 character change overwrite my co-worker's 1,000 LOC changes he wrote in a very productive day.)

TFVC also doesn't branch based on differences in changes. Branches are simply the project folder copy, pasted and renamed.

Centralized isn't all bad. Google has their own tool which works for their petabytes worth of source code.

Git areas
Git has 4 main areas: Working, Staging, Stash, Local

I find this image quite helpful.

Image description

Operations between Areas
Index
Head
