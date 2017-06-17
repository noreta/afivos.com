---
layout: post
title:  "Tak Cukup Hanya “Incognito”"
date:   2017-06-17 18:00:50 +0700
category: blog
tags:
- Computer
- Internet
- Info
- Tutorial
---

> Because there’s no place like 127.0.0.1

Beberapa hari yang lalu saya membaca sebuah tulisan bagus dari [Quincy Larson](https://medium.freecodecamp.com/@quincylarson) yang berjudul “[How to encrypt your entire life in less than an hour](https://medium.freecodecamp.com/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3)”. Artikel tersebut menjabarkan beberapa tips tentang bagaimana untuk tetap aman dalam dunia digital, termasuk di dalamnya penggunaan browser yang memiliki fitur dalam hal keamanan yang jauh lebih baik dari pada browser yang umum kita gunakan seperi Chrome, Firefox, Safari, dan lain sebagainya, bahkan sekalipun kita sudah menggunakan fitur *Incognito* ataupun *Private Window*. Silahkan gunakan [TOR](https://www.torproject.org/).

Dan satu hal lagi yang belum masuk dalam list tips dari penulis adalah penambahan daftar alamat pada file Host untuk meningkatkan privasi dari komputer kita ketika terhubung ke internet. Gunakan host untuk mencegah komputer kalian terhubung ke alamat-alamat tertentu. Ini merupakan cara mudah dan efektif untuk melindungi kalian dari berbagai jenis spyware, mengurangi penggunaan bandwidth, memblokir perangkap pop-up tertentu, dan mencegah pelacakan pengguna dengan menggunakan celah atau *bug* pada sebuah website. Mekanismenya hanyalah membatasi/memblok perangkat kita `127.0.0.1` untuk dapat mengakses alamat/*IP Address* yang tertera pada list.

Beberapa bulan ini saya menggunakan host file milik [Dan Pollock](http://someonewhocares.org/hosts/hosts) di perangkat pribadi saya baik laptop dan juga HP. Silahkan download dan *install* di perangkat kalian. Tutorial pemasangan untuk berbagai jenis sistem operasi sudah tertera dalam file, silahkan buka menggunakan notepad.

Untuk pemasangan pada perangkat ponsel Android, syarat utamanya adalah HP sudah memiliki akses *Root*. Gunakan file manjer yang support *root* akses dan letakkan file pada `/system/etc/`.

## Update

Kalian juga dapat menggunakan *repository* [Steven Black](https://github.com/StevenBlack/hosts) sebagai alternatif. Tutorial pemasangan serta update daftar host juga disertakan.
