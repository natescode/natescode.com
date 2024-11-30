---
title: "Software Symptoms vs Problems"
date: 2024-04-18T00:22:13-05:00
draft: true
toc: false
images:
tags:
  - concepts
  - soft skills
---

Symptoms vs Problems is something I've run into a lot lately. For example, our production support team has received multiple tickets about a specific screen, let's call it _QuickEdit_, that allows the users to quickly edit some data. On save, the request will often timeout.

According to the business, they ask if we can just _quickly_ fix this page. Maybe not allow multi-editing. The issue isn't on the UI, that's just where we see the _symptom_. The _problem_ existing on the backend where 10's of kloc of complex business logic and models are being loaded for _ANY_ and _ALL_ data changes.

The only correct solution is a full rewrite of that screen.

