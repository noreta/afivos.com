---
layout: post
category: blog
title: Instal Driver KexTech USB Wireless Adapter di Ubuntu
date: '2016-03-15 14:50:00'
tags:
- tutorial
---

![!showup//Kextech USB Wireless Adapter//!source: bukalapak](https://s2.bukalapak.com/img/1/7/5/1/1/1/2/7/2/w-300/MT7061_Wifi_Dongle_1.jpg)
<p class="small">source: bukalapak</p>

Bagi pengguna USB wireless adapter dari Kextech seperti saya, mungkin Anda akan mengalami sedikit kesulitan dalam penggunaan produk ini pada sistem operasi Linux, terutama Ubuntu.

Tidak seperti Broadcomm ataupun Atheros yang hampir semua produk bisa *plug and play*, produk ini menggunakan Mediatek yang notabene jarang sekali bisa langsung digunakan pada sistem operasi Linux.

Berikut adalah cara termudah memasang driver KexTech USB Wireless Adapter 150Mbps (Ralink RT7601) di Ubuntu. Buka *terminal* lalu ketikkan perintah di bawah satu-persatu.

``` bash
1. sudo apt-get install linux-headers-generic build-essential git
2. git clone https://github.com/porjo/mt7601.git
3. cd mt7601/src
4. make
5. sudo make install
6. sudo mkdir -p /etc/Wireless/RT2870STA/
7. sudo cp RT2870STA.dat /etc/Wireless/RT2870STA/
8. sudo modprobe mt7601Usta
```

#### Update
Saya benar-benar lupa jika kita berada pada kasus dimana kita sama sekali tidak bisa menggunakan koneksi internet jika tidak tidak menggunakan produk ini, lalu bagaimana caranya saya bisa mendownload file driver diatas?

Salah satu caranya adalah menggunakan CD Driver yang telah disertakan dalam produk.

1. Masukkan CD
2. Buka folder 'Linux'
3. Buka dan ekstrak file bernama 'MT7601U_LinuxAP_3.0.0.1_20130802.tar.bz2'
4. Copy folder hasil ekstrak ke direktori 'home'
5. Rubah nama folder menjadi MT7601.

Langkah selanjutnya sama dengan cara di atas. Buka terminal lalu ketikkan perintah di bawah satu persatu.

``` bash
1. cd mt7601
2. make
3. sudo make install
4. sudo mkdir -p /etc/Wireless/RT2870STA/
5. sudo cp RT2870STA.dat /etc/Wireless/RT2870STA/
6. sudo modprobe mt7601Usta
```

#### Update 2
Jika Anda menggunakan Ubuntu versi 15.10 atau dengan Linux kernel versi 4.2, Anda hanya perlu menambahkan firmware yang dibutuhkan, karena driver MT7601 sudah ada pada kernel 4.2.

Caranya sederhana, cukup copy file dalam direktori **/mcu/bin/MT7601.bin** ke **/lib/firmware/** dengan cara

``` bash
1. cd mt7601
2. sudo cp /mcu/bin/MT7601.bin /lib/firmware/mt7601u.bin
```

Selamat menjelajah .. :surfer:

*** 

**Catatan:** Jika Anda melakukan *update linux-image* terbaru (biasanya *device* tidak akan bisa duganakan), Anda harus kembali me*re-compile* dengan cara seperti di bawah. 

``` bash
cd mt7601/src
make clean
make
sudo make install
sudo modprobe mt7601Usta
```

Jika Anda menginstal melalui CD Driver, gunakan perintah berikut

``` bash
cd mt7601
make clean
make
sudo make install
sudo modprobe mt7601Usta
```
