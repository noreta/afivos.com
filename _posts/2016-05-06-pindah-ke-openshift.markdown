---
layout: post
category: blog
title: Pindah ke OpenShift
date: '2016-05-06 02:20:40'
tags:
- tutorial
- blog
---

Perlu diketahui bahwa ini bukan kali pertama saya memutuskan untuk memindahkan blog saya ke tempat lain. Terakhir kali tercatat lebih dari satu tahun yang lalu saya menggunakan platform **Jekyll** [^1] untuk menjalankan blog ini. Dan jika diingat, ini adalah kali ketiga saya bermigrasi dari **Blogger**, berlanjut ke **Github Page** dengan **Jekyll**, dan sekarang beralih ke **Openshift**.

## Apa Itu Openshift?

> [OpenShift](http://openshift.redhat.com) is Red Hat's Platform-as-a-Service (PaaS) that allows developers to quickly develop, host, and scale applications in a cloud environment.

Atau dalam kata lain, OpenShift adalah layanan Cloud Computing dengan model Platform As a Service (PAaS) yang dikelola oleh RedHat. Disana kita dapat mengupload beberapa jenis aplikasi yang salah satunya saya gunakan sekarang untuk membangun sebuah blog dan menulis tulisan ini, sebuah blog dengan platform Ghost. Lihat [**disini**](https://hub.openshift.com/quickstarts/all) untuk mengetahui bebrapa aplikasi lain yang tersedia.

Sebenarya ada beberapa layanan lain yang mirip dan memiliki fungsi yang sama dengan Openshift seperti [Heroku](https://www.heroku.com/), [Pivotal](https://pivotal.io) (dulu Cloud Foundry), dan lain-lain.

## Mengapa Openshift?
Pertanyaan yang bagus. 

- **Pertama**, saya memilih Openshift karena Openshift mendukung penggunaan Node.js sebagai *core* yang digunakan dalam **Ghost** serta *database* yang akan digunakan dalam menyimpan data blog ini. 
- **Kedua**, layanan ini bersifat gratis untuk developer biasa yang menggunakan *Free plan* sebagai pilihan, tentu Anda dapat mengupgrade ke *Bronze* maupun *Silver* jika diperlukan.
- **Ketiga**, Openshift menyediakaan *custom domain* yang dapat digunakan untuk setiap aplikasi yang kita buat tanpa harus melakukan *upgrade*. *FYI*: saya sebenarnya sudah mencoba deploy aplikasi Ghost di Heroku, namun ternyata diperlukan *upgrade* sehingga apabila kita ingin menggunakan *custom domain* seperti yang saya gunakan sekarang tentu akan dikenakan biaya, dan yang pasti lumayan.
- **Keempat**, Openshift memberikan 3 gear yang dapat digunakan secara cuma-cuma, setiap gear memiliki *space* 1GB. Sudah lebih dari cukup untuk menjalankan sebuah blog sederhana. Disini saya hanya menggunakan satu gear saja.
- **Kelima**, untuk men*deploy* aplikasi Ghost di Openshift hanya dibutuhkan waktu kurang dari satu menit karena Openshift telah memberikan kemudahan dengan adanya [One click deploy](https://hub.openshift.com/quickstarts/240-ghost-0-7-5). Hal tersebut tidak tersedia di Heroku, atau dengan kata lain Anda harus melakukannya secara manual.

Terlepas dari bebearapa kelebihan di atas, tentu ada beberapa kekurangan yang patut Anda ketahui.

- **Pertama**. Bagi Anda baik pengguna Mac, Linux maupun Windows yang belum terbiasa dengan penggunaan perintah via *Terminal* atau *Command Line* dan juga *Git* tentu akan sedikit kesulitan dalam penggunaan layanan sejenis ini. Tidak ada *User Interface* seperti program-program pada umumnya.
- **Kedua**. Bagi pengguna *Free Plan* tidak diperkenankan menggunakan SSL untuk *custom domain* yang digunakan. Jika ingin menggunakan sertifikat SSL untuk domain Anda, mau tidak mau Anda harus melakukan *upgrade*. Upgrade *Bronze plan* masih gratis, hanya perlu memasukkan data kartu kredit. :D
- **Ketiga**. Bagi pengguna *Free Plan* akan dikenakan juga *idle time* jika aplikasi yang dibuat tidak mendapatkan request http selama 24 jam, berarti juga apabila blog yang kita buat tidak ada yang mengakses dalam waktu 24 jam akan dikenakan *idle time*. Pengaruhnya memang tidak terlalu signifikan, blog akan beberapa dekit sedikit lebih lama untuk dibuka. Hal ini tentu dapat dihindari dengan sedikit upaya. Silahkan daftar ke situs [UptimeRobot](https://uptimerobot.com/), UptimeRobot dapat melakukan ping setiap lima menit ke blog Anda. 

## Mengapa Ghost?
Pertanyaan yang bagus pula. Saya sudah lama tertarik dengan *platform* ini. Sederhana, ringan, serata *user-friendly*.

> Ghost is an open source publishing platform which is beautifully designed, easy to use, and free for everyone.

- Saya juga sudah cukup bosan dengan Jekyll yang notabene "tanpa *user-interface*". Tidak ada salahnya mencoba kembali bermain dengan Content Management System. Uhuuyyy ..

- Ghost juga menggunakan MarkDown [^2] dalam penulisan postingannya, dan saya sudah lumayan terbiasa karena Jekyll juga menggunakan Markdown dalam penulisan postingannya. *It's pretty easy*.

- Saya benar-benar jatuh cinta dengan Casper; tema *default* milik Ghost. Tema ini sudah sangat mewakili kebutuhan saya dalam menulis sebuah postingan.

## Tertarik?
1. Silahkan buka halaman [**Openshift**](https://openshift.redhat.com) dan lakukan pendaftaran.
2. Buka halaman [**One-click-deploy**](https://hub.openshift.com/quickstarts/240-ghost-0-7-5) **Ghost**, atur dan sesuaikan dengan keinginan.

##### Langkah 1: Instal Ruby dan RubyGems
Download [**Ruby Installer**](http://rubyinstaller.org/downloads/) untuk pengguna **Windows**, atau cukup ketikkan perintah di bawah ini bagi pengguna **Debian** atau **Ubuntu** ataupun turunannya.
```bash
sudo apt-get install ruby-full
```
Selanjutnya
```bash
sudo apt-get install rubygems
```
##### Langkah 2: Instal Git
Download [**Git**](https://git-scm.com/download/win) untuk pengguna **Windows**, atau cukup ketikkan perintah di bawah ini bagi pengguna **Debian** atau **Ubuntu** ataupun turunannya.
```bash
sudo apt-get install git-core
```
##### Langkah 3: Instal Redhat Client Tools
Untuk pengguna Windows
```bash
gem install rhc
```
Untuk Debian atau Ubuntu
```bash
sudo gem install rhc
```
##### Setup Client Tools
``` bash
rhc setup
```
Ketikkan alamat email dan Password yang Anda gunakan untuk mendaftar. Ketikkan **'yes'** untuk setiap pertanyaan yang muncul.

##### Langkah 4: Clone aplikasi yang telah dibuat
Buka halaman dashboard: https://openshift.redhat.com/app/console/application/ lalu klik aplikasi yang telah dibuat. Lihat keterangan di sisi kanan yang bertuliskan **Source Code**.
```bash
git clone ssh://*****************@nama-aplikasi.rhcloud.com/~/git/namaaplikasi.git/
```
***The rest is beyond your imagination***

Untuk dokumentasi penuh, silahkan buka halaman [**Ini**](https://developers.openshift.com/getting-started/index.html).



***

[^1]: Baca postingan **[ini](http://blog.sasono.web.id/2015/02/25/hello-world/)** untuk mengetahui lebih lanjut.
[^2]: Silahkan baca tulisan **John Grubber** tentang markup [Markdown](https://daringfireball.net/projects/markdown/). Atau **Wikipedia** tentang Markdown [disini](https://en.wikipedia.org/wiki/Markdown)
