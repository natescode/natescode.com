---
title: "Think, THEN C0D3;"
date: 2015-01-01T00:03:46-05:00
draft: true
---

## Beyond Code: Think before you code

Hey Devs. I'm a senior full-stack developer, mostly C# and Typescript. I'm also a bootcamp instructor and interview engineer for Karat^ and part-time professional gambler (yeah I do a lot).

I often see newbies to even mid level developers jump into code too soon. I get it, we like to code. But why can't computer code themselves? Because humans think and computers calculate. We have to do the thinking for them. We're ultimately just interpreters that sit between business stakeholders and binary based computational devices.

I have a few interns on a client project I'm working on. One intern noticed the Paragraph component required text to be used. But his parent component didn't always have text to provide. So, make the Paragraph text optional to stop the error? NO.

The "answer" is often frustrating for learners because they're expecting a singular answer like in math.

For that case, we could edit the Paragraph component but then we'd be rendering an empty P tag, not good.

Option 2. We could conditionally render the Paragraph component. This seems like a good option.

Option 3. Provide a default text to the Paragraph component if none provided.

Have you picked an option? ... Sorry you're wrong. The 'solution' is asking to clarify the requirements. In this case this was menu text. Our designs always have a "back" or "main menu" text in that position.

We have to think WHY are we building this code. I've seen companies spend 10's of 1,000's on solutions to problems they don't have. My favorite example is when I updated the password requirements to their CMS. Had someone asked WHY, I wouldn't have wasted the time updating them and would have implemented SSO so everyone could just login with their AD accounts which already has those password requirements.

You're so worried about choosing the most efficient library or algorithm to finish the task, you forgot to ask WHY you're doing it in the first place.

As you progress from junior to mid level to senior. This level of thinking is expected and required. Especially in consulting. My clients don't value my coding ability. They DO value that I can lead a team and keep them efficiently working towards valuable business solutions. They know that in 6 months or 6 years the code will still work.