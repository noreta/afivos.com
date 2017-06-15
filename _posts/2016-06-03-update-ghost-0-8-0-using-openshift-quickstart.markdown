---
layout: post
category: blog
title: Update Ghost 0.8.0 Using Openshift Quickstart
date: 2016-06-03 20:26:24
tags:
- tutorial
- blog
- en
---

I don't know why the repository of Openshift Ghost Quickstart seems to be abandoned since January 2016. I mean, like there isn't any activity from the developer behind the Openshift team. That's why I initiated to start to write this post, because I believe that there are many of people like me trying to solve this problem. Yes, the problem to update the Ghost core to the recent version.

I found a very good repository of [MunGell](https://github.com/MunGell). He forked it from the main repository of [Openshift Ghost Quickstart](https://github.com/openshift-quickstart/openshift-ghost-quickstart) and tried to make a self-update for the Ghost installation, of course it is 0.8.0.

![Ghost Admin Panel](/content/images/2016/06/ghost-0-8-0.png)

Here are the steps or tutorial on how to update your Ghost to the version 0.8.0. 

**I assume that you already clone your own ghost application in to your local machine.** 


1. Go and download [this repository](https://github.com/MunGell/openshift-ghost-quickstart) then extract it. 
2. Copy`content` and `node_module` folder and also the file named `package.json`
3. Go to your ghost-application folder. Paste and merge it.
4. Open your own ghost-application folder in terminal by hitting `cd your-ghost-application-folder`.

Then
```
git add .
git commit -m "Update to Ghost 0.8.0"
git push
```

**Note:** It will also delete your default Casper theme configuration, so be wise enough to make a back up first.

***

[^1]: **Credit:** [MunGell](https://github.com/MunGell)
