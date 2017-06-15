---
layout: post
category: blog
title: Update Ghost 0.9.0 Using Openshift Quickstart
date: '2016-08-02 15:25:18'
tags:
- tutorial
- blog
- en
---

Ghost recently released a new version of the CMS, and again, here are the steps or tutorial on how to update your Ghost to the version 0.9.0 for the users of Openshift Quickstart. This is the easier way to update your Ghost rather than [this one](https://blog.sasono.web.id/2016/06/03/update-ghost-0-8-0-using-openshift-quickstart/) I wrote before.
 
**I assume that you already have a clone of your application (blog) in your local machine.**

At first, I suggest you to take a look at the 'update' section below before doing the upgrade. Please [^1].

## Backup
Remember to always do a backup first before doing an upgrade. I suggest you to make a backup from your blog and your whole openshift gear (your application).

1. Go to your `blog dashboard` > `Labs` > then hit the `Export` button. This will export your settings and your content to a json file that you can import whenever you need it.
2. Make a `snapshot` of your cartridge by using this command in your terminal `rhc snapshot save <app_name>`. You can read about this in [here](https://developers.openshift.com/managing-your-applications/backing-up-applications.html).

## Update
- Find the file named `package.json` right in your App's root directory. **Remember. This is not the same file that you can find in `/node_modules/ghost/`**. Open that file then you'll see a short number of lines like this

```
"dependencies": {
        "ghost": "^x.x.x"
    }
```
- . The x.x.x indicates the version of your ghost. Change it to the last version of the ghost, which is `0.9.0`. save it.

- After that, open your own ghost application folder in terminal by hitting `cd <your-application-folder>`, then run the command `npm update`.

This action will automatically update all the necessary Ghost files for your blog.

## Push the changes
After all of the actions done.
Then
```
git add .
git commit -m "Update to Ghost 0.9.0"
git push
```

***
[^1]: 
**Update**: If your blog failed to start or if you face an error like this one `Failed to execute: 'control restart' for /var/lib/app_root/myID/index.js`. Please do the steps below before updating your ghost.

1. Simply open the file named `package.json` in folder `/node_modules/ghost/`.
2. Find the line `"main": "./core/index"`, change it to be `"main": "./core/index.js"` and save it.
