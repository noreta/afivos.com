---
layout: post
title: Update Ghost 0.11.3 [Openshift]
date: '2016-12-18 18:29:08'
category: blog
tags:
- tutorial
- blog
- en
---

First. Let me tell you that it is just another update and I wouldn't explain the new features as they have been explained [here](https://dev.ghost.org/) in every developer blog post. Just go and read it.

Second. I also try to explain it briefly as I assume that you have read the others posts I wrote before [here](https://blog.sasono.web.id/2016/08/02/update-ghost-0-9-0-using-openshift-quickstart/) and [here](https://blog.sasono.web.id/2016/06/04/update-ghost-0-8-0-using-openshift-quickstart/).

## Backup
Remember to always do a backup first before doing an upgrade.

1. Go to your `blog dashboard` > `Labs` > then hit the `Export` button. This will export your settings and your content to a json file that you can import whenever you need it.
2. Make a snapshot of your cartridge by using this command in your terminal `rhc snapshot save <app_name>`. You can read about this in [here](https://developers.openshift.com/managing-your-applications/backing-up-applications.html).

## Pre Update
Please make sure you have installed the right version of **node.js** in your machine, just take a look at [this post](http://support.ghost.org/supported-node-versions/) for the compabilities. I use **4.2** as this is the recommended one and the version of Node that they use with Ghost in production on Ghost(Pro). 

Type `node -v` to show the version.

Then tidy up your application to prevent a *Not Enough Space* error. Just run this command on your terminal.

`rhc app tidy <your-application-name>`

## Update
In order to the new **Node.js** support and **a few dependency updates**, you should modify your `package.json` file in your root app folder. I have changed the node version and added the newest dependencies update. You may choose whatever you want. Here is **mine**:

```
{
    "name": "openshift-ghost-quickstart",
    "description" : "Openshift Ghost Quickstart (SQLite)",
    "repository": {
        "type": "git",
        "url": "git://github.com/openshift/openshift-ghost-quickstart.git"
    },
    "bugs": "https://github.com/openshift/openshift-ghost-quickstart/issues",
    "main": "index.js",
    "scripts": {
        "start": "node index"
    },
    "engines": {
        "node": "~4.2.0",
        "iojs": "~1.2.0"
    },
    "dependencies": {
        "express": "^4.14.0",
        "ghost": "^0.11.3",
	    "amperize": "0.3.1",
	    "archiver": "1.1.0",
	    "bcryptjs": "2.3.0",
	    "bluebird": "3.4.6",
	    "body-parser": "1.15.2",
	    "bookshelf": "0.10.2",
	    "chalk": "1.1.3",
	    "cheerio": "0.22.0",
	    "compression": "1.6.2",
	    "connect-slashes": "1.3.1",
	    "cookie-session": "1.2.0",
	    "cors": "2.8.1",
	    "csv-parser": "1.11.0",
	    "downsize": "0.0.8",
	    "express-hbs": "1.0.3",
	    "extract-zip-fork": "1.5.1",
	    "fs-extra": "0.30.0",
	    "ghost-gql": "0.0.5",
	    "glob": "5.0.15",
	    "gscan": "0.0.15",
	    "html-to-text": "2.1.3",
	    "image-size": "0.5.0",
	    "intl": "1.2.5",
	    "intl-messageformat": "1.3.0",
	    "jsonpath": "0.2.7",
	    "knex": "0.12.5",
	    "lodash": "4.16.4",
	    "moment": "2.15.2",
	    "moment-timezone": "0.5.7",
	    "morgan": "1.7.0",
	    "multer": "1.2.0",
	    "netjet": "1.1.3",
	    "node-uuid": "1.4.7",
	    "nodemailer": "0.7.1",
	    "oauth2orize": "1.5.1",
	    "passport": "0.3.2",
	    "passport-http-bearer": "1.0.1",
	    "passport-oauth2-client-password": "0.1.2",
	    "path-match": "1.2.4",
	    "rss": "1.2.1",
	    "sanitize-html": "1.13.0",
	    "semver": "5.3.0",
	    "showdown-ghost": "0.3.6",
	    "sqlite3": "3.1.8",
	    "superagent": "2.3.0",
	    "unidecode": "0.1.8",
	    "validator": "5.7.0",
	    "xml": "1.0.1"
    }
}
```

Save it. 

Then remove `node_modules` folder, clean the node packages cache:

```
rm -rf node\_modules && npm cache clear
```

Then reinstall the packages: 

```
npm install --production
```

## Push your changes 

```
git add .
git commit -m "Update to Ghost 0.11.3"
git push
```

Voila !
