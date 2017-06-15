---
layout: post
category: blog
title: Upgrade Ubuntu 16.04 Xenial Xerus (LTS)
date: '2016-04-26 15:17:27'
tags:
- tutorial
---

![](/images/2016/04/Ubuntu-1604-software-settings.png)

Yang perlu kalian lakukan hanyalah membuka **Software & Updates** lalu buka tab **Updates**.

* Jika kalian menggunakan Ubuntu versi **15.10** rubah setingan **Notify me of a new Ubuntu version** menjadi  **For any new version**.
* Jika kalian menggunakan Ubuntu versi **14.04** rubah setingan **Notify me of a new Ubuntu version** menjadi  **For long-term support version**.

Buka terminal lalu ketikkan

``` dash
sudo apt-get update && sudo apt-get upgrade
```
lalu
``` dash
sudo apt-get dist-upgrade 
```
Tunggu sampai proses download dan upgrade selesai, biasanya akan memakan waktu sekitar satu jam, tergantung koneksi yang kalian gunakan.

