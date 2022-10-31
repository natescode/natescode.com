---
title: "Greenfield is a Minefield"
date: 2012-02-20T00:03:46-05:00
draft: true
---

Greenfield is a minefield

#

architecture

#

devops

#

devjournal

#

cloud
This is more a journal than me preaching anything. I've been in software nearly a decade now. There is still a lot left to learn.

I recently started doing work for a client through my NatesCode LLC. We ended up scratching what code existed.

Started a greenfield project is super exciting. I get to set things up the right way...wait I've never done all of this. WHAT is the right way?

Both the client, I work directly with the CTO, and I are a little intimidated. The freedom is nice but we have A LOT of choices to make.

We're sticking to Azure for DevOps, hosting, boards, etc.

I went on a tangent last night figuring out if I should do a monorepo (probably not as I don't have the experience or tooling) or polyrepo with something like Git submodules. Anyone's feedback is welcome.

Greenfield is a Minefield

#

greenfield

#

devjournal

#

cloud
I love how junior developers journal their learning experience on Dev. So, as a senior developer starting a greenfield (project from scratch) project, I thought I'd document my journey.

I'm currently in the process of architecting and deciding the tech stack. What I have so far.

Project planning: Azure Boards
Hosting: Azure
My client is already in the Microsoft stack. I also have the most Azure experience between the three major cloud providers.

Database: Postgres
Postgres is open-source so no licensing costs to worry about. I'm also working with it daily at my main job.

Backend: .NET
Framework

.NET C#. This is a good fit for enterprise medical applications.

Structure

At work we use CQRS. While I understand this is a powerful pattern, I think this is over-kill for what I'll be building. A CRUD model makes more sense, at least for now.

Language(s)

C#, maybe some F#. Go for Azure functions.

Repo: Monorepo

I first thought about using git submodules. I thought since I'm likely going for a micro-services architecture that a polyrepo would make most sense. Maybe have nuget and npm packages for shared. I realized that this would be too much complexity. Ultimately I want to build the code together and release it separately.

I'm going to be playing with NX and NX dotnet

Everything is hosted in Azure