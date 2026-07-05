---
enabled: true
layout: post
tags: Top,Security,JavaScript,Research,Supply-Chain-Security,Browser,Vulnerabilities,The-Client-Side
title: The Rest of the Iceberg - Everything We've Missed About the Browser Extensions Attack Surface
url: https://weizmangal.com/
date: 07/05/2026
description: Everyone frames extensions as a threat to websites, but that's just the tip of the iceberg. I'd like to break down three overlooked attack classes - WAX, XAB, and XAOS - that reshape how I think about browser and endpoint security.
image: iceberg1.jpg

---

![](/content/img/iceberg1.jpg)

Reading this title, you might be thinking, “dude’s late to the party”

Well, to an extent, yes

But also, diving deep into browser extensions security in the past 6 months was **eye-opening** to me, and while some of my realizations may seem obvious to most, I believe I will be able to touch on some new notions

My name is [Gal Weizman](https://x.com/weizmangal), and I have touched a wide variety of aspects in the browser security ecosystem in the past decade

Here is how my recent research reshaped the way I think about browser extensions' security

## **Class XAW (the tip of the iceberg)**

*\~ E**X**tensions **A**gainst **W**ebsites*

![](/content/img/iceberg2.jpg)

Extensions being a horror show is common knowledge for a while now, and yet somehow only recently emerging startups were finally able to convince the industry how vulnerable companies are to them

[@GetKoidex](https://x.com/@GetKoidex) is a great example of that

Koi were able to really convince companies that extensions in general and browser extensions specifically are a true risk to organizations

Not theoretically, but practically

And while Koi is just one example, there was one thing in common to all startups that were taking a shot at this problem

Their efforts, research, product, and publications were all directed at one risk perspective of extensions, which is - once already installed, **how malicious extensions were able to compromise victims’ websites**

It was different instances of the same approach, time and again - malicious actors manage to either sneak their extension into the Chrome Web Store or buy/compromise an existing one, through which they deploy evil code that abuses the extension’s privileges over websites to compromise them

What repeated itself was (a) the fact that malicious code could be identified in the CRX itself (or a malicious server address if code is fetched remotely), and (b) the attack was targeted at websites

In the past 6 months, **I identified no less than 10 different vulnerabilities of about 3 different classes of attacks**, with some of them being novel, all involving Chromium-based extensions in one way or another

At least 8 of them will be shared by the end of this year, but in the meantime, I’d like to share what I already can - what was innovative about them and how it affects my perception of browser and endpoint security

I’ll do so by touching each class at a time

## **Class WAX**

*\~ **W**ebsites **A**gainst E**X**tensions*

![](/content/img/iceberg3.jpg)

Investigating the devices of some of our clients, an aggregated list of installed extensions came back, and it was longer than I expected

Browsing through each from the classic perspective, I was unable to identify malicious ones, as neither was known to public registries nor contained malicious code

I decided to go one by one and investigate something different about them \- their posture

Which domains are allowed to communicate with the background process? To which origins are content scripts injected? How can in-page contexts communicate with content scripts?

You know, classic vulnerability research

This journey uncovered findings I’ve never seen before, which shed some new light on the risk extensions introduced

I found super aggressive vulnerabilities

**All allowed very aggressive bypasses of the Same Origin Policy, including UXSS**

There’s nothing special about yet another vulnerability, but not only were they so aggressive, but they were also implemented so poorly that it was hard to believe this was a mistake

And then it hit me \- what if this isn’t a vulnerability, but a backdoor?

My research focused on 1M+ installations only, so if my theory is right, it's quite a backdoor

And this is so interesting because the game here is just different, and so are the rules

Each extension provides real value

Each extension is used by real users

Each extension has no proper indication of maliciousness, such as malicious code or suspicious behavior

But they all seem so weird online, like something’s up with them

Not only is their online presence fishy, but they leave an opening for any website to perform such aggressive moves against other origins in the browser, which is just too hard to believe that this is all a mistake

And the worst part? Lacking clear evil indications, incriminating them officially becomes impossible

Even Google internal teams verified our findings, and yet were unable to remove the extensions from the store for the chance that we’re wrong

Could we be wrong? Absolutely (and that’s the gist of it)

Perhaps these flaws were the result of the Vibe coding era? If so, here’s another big new notion for you - if you can vibe code your way to the Chrome Store, how many more such flaws are we going to see? Or maybe it’s both? Maybe now, for the first time ever, you can finally vibe code a real product that is also malicious at the same time, making you untouchable?

I wonder how this angle will play out

Part of my research into WAX class is now public for you to dig deeper [https://x.com/WeizmanGal/status/2065060237950775350?s=20](https://x.com/WeizmanGal/status/2065060237950775350?s=20)

## **Class XAB**

*\~ E**X**tensions **A**gainst **B**rowsers*

![](/content/img/iceberg4.jpg)

Did you notice how it’s the same horror story with every extension?

Whenever a bad one gets caught, the story is about the impact it was capable of generating against websites the user is logged into

One focus is missing from the landscape almost completely - **how can these extensions compromise the browser itself?**

Attacking the browser via an extension is actually a far more important vector, because it introduces a real escalation of privileges attack (unlike an already installed extension, which trivially attacks websites to which it has access by design)

And this really bugs me - how is it that browsers & plugins security companies never put enough effort into this field of research?

The premise with which they work is “your employees install more extensions than you would imagine,” meaning their starting point was already having an extension installed - why only focus on extension-to-website damage and not explore extension-to-browser damage? Especially when this field is so fruitful?

Accepting this challenge, I was able to identify a novel class of attacks that extensions were able to deploy against browsers, which also gave birth to a novel attack technique I recently covered, coined [DiNneR Serving](https://x.com/WeizmanGal/status/2028897144439226539?s=20), in my recent [GlicJack](https://x.com/WeizmanGal/status/2028472131802001591?s=20) vulnerability discovery in Google Chrome

I was able to perform different instances of this class **against 5 of the most popular browsers in the world, totaling over 20k$ in bounties**

This class focused on accessing powers reserved only for browser-level components and abusing them

The take here is that the territory of extensions attacking browsers is widely uncharted

## **Class XAOS**

*\~ E**X**tensions **A**gainst the **O**perating **S**ystem*

![](/content/img/iceberg5.jpg)

This one is a little less about just browsers and slightly more about AI and how it changes the endpoint - but the point still flows through the risk in extensions

In the new era we’re entering, AI rapidly gets introduced into every layer of the stack, whether it’s the web, the browser, the extension, the OS, or your phone

But it’s not just AI - it’s the same AI

Meaning, the same brain - whether it’s Anthropic, Perplexity, or OpenAI - gets integrated into all layers

From a security perspective, this introduces a new risk where malicious actors confined to one layer can abuse the access of that layer to that brain to jump over to another layer where the same brain appears

That is an unprecedented way to perform escalation of privileges attacks, and my soon-to-be-published research into this will be only the beginning of this emerging class of attacks

Browser extensions play a prominent role in that

## **But why now?**

![](/content/img/iceberg6.jpg)

Come to think about it, everything I referred to was true for years now, mainly class WAX and class XAW

If so, why does it matter now more than before? What makes this important?

It took the web industry a while to nail down security for web apps, but the tools to secure them conveniently are finally here

After locking this vector down, we begin feeling more comfortable with using browsers freely, and a natural side effect of that was adopting the next big thing browsers have to offer - **extensions**

Hence began the next part of the same cycle websites underwent - extensions are everywhere, and only their adoption surfaces security concerns we weren’t able to see before

Making browser extensions the old but next emerging attack vector of the web **now**

