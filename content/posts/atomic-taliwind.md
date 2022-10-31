---
title: "Atomic Taliwind"
date: 2022-07-10T00:03:46-05:00
draft: true
---

I recently started a project for a new client. It is a greenfield project so I get to choice everything. How Atomic Design and Utility First CSS (Tailwind) are a match made in heaven.

I'm not hear to push Tailwind but to show how it is solving some real problems. My project, we'll call project H, is completely from scratch. I'm the lead developer and there is one other junior developer with me on the project. We don't have a designer.

So, knowing that things can and will change is a huge factor that affects which architecture I choose.

## Atomic Design

Atomic Design, like most systems, sounds great in theory. Unfortunately, the web has little information on actual examples of implementing atomic design. Project H uses React.

### Theory to Practice

Atomic Design talks about five things: `atom`, `molecule`, `organism`, `template`, `page`. The theory and some examples basically says that HTML tags are roughly equivalent to atoms, or I should say components that wrap HTML tags. So you get something like

{% embed https://gist.github.com/natescode/dcc4eee2b31fef3df96ac91b83c3390b.js %}

Now questions arose around where is the line between a molecule and an organism? Which one handles state?