---
layout: post
category: blog
title: Kustomisasi Tema Kactus Untuk Jekyll
date: '2016-03-29 14:55:00'
tags:
- internet
- tutorial
---

Karena sebuah blog adalah cerminan dari pemiliknya, maka sudah semestinya tampilan juga harusnya disesuaikan dengan pemilik. Atau sedikit sentuhan setidaknya perlu dilakukan untuk memaksimalkan fitur maupun tampilan dari sebuah blog.

<s>Saya memakai [Jekyll](http://jekyllrb.com) sebagai tool untuk membangun blog ini. Tema yang saya gunakan adalah [Kactus](https://github.com/nickbalestra/kactus/) milik Nick Balestra dengan beberapa perubahan atau kustomisasi.</s> [^1]

#### Markdown dan Highlighter
Secara default tema Kactu menggunakan markdown Redcarpet dan hilighter Pygments, namun sejak perilisan Jekyll 3, Jekyll secara default menggunakan Kramdown sebagai markdown, dan Rouge sebagai highligter default. Oleh karena itu diperlukan perubahan markdown dan highlighter pada file `_config.yml` rubah menjadi seperti di bawah ini.

```
markdown: kramdown
highlighter: rouge
```

#### Format Permalink
Saya menggunakan format permalink Pretty. Jadi format yang akan digunakan adalah sebagai berikut `domain/tahun/bulan/tanggal/judul-post/`. Rubah setingan Permalink pada `_config.yml` dengan format seperti di bawah.

```
permalink: pretty
```

#### Pagination
Pagination adalah fitur penomoran halaman yang biasanya ada di setiap blog untuk membatasi jumlah postingan yang akan ditampilkan pada setiap halaman. Meskipun fitur ini sudah disematkan pada tema Kactus, namun tidak secara default ditampilkan pada tema bawaan. Kita perlu mengaktikannya dengan merubah parameter pada file `_config.yml`, disini saya hanya menampilkan 8 postingan dalam setiap halaman.

```
pagination: 8
```

#### Pagination Style
Secara default, format yang digunakan dalam penomoran halaman Kactus adalah `domain/page(halaman)/` ex `blog.sasono.web.id/page2/`. Saya merubah format penomoran tersebut menjadi `domain/page/(halaman)` ex `blog.sasono.web.id/page/2/` dengan menambahkan satu line tepat di bawah pagination. Jadi formatnya akan menjadi demikian.

```
pagination: 8
paginate_path: /page/:num
```

lalu rubah format link pada `_includes/pagination.html` menjadi seperti

``` html
<nav id="post-nav">
    {% if paginator.previous_page %}
        <span class="prev">
            {% if paginator.previous_page == 1 %}
                <a href="/" title="Previous Page">
                    <span class="arrow">←</span> Newer Posts
                </a>
            {% else %}
                <a href="/page/{{ paginator.previous_page }}/">
                    <span class="arrow">←</span> Newer Posts
                </a>
            {% endif %}
        </span>
    {% endif %}
    {% if paginator.next_page %}
        <span class="next">
            <a href="/page/{{ paginator.next_page }}/">
                Older Posts <span class="arrow">→</span>
            </a>
        </span>
    {% endif %}
</nav>
```

#### Emoji
Tidak perlu penjelasan lebih, bagi saya, menambahkan emoji akan menjadikan blog lebih unik. Contohnya seperti ini :grin: :joy:  :smiley:. Cukup tambahkan perintah berikut di baris terakhir **_config.yml**

``` ruby
gems:
  - jemoji
```

berikan pengecualian pada file css agar gambar emoji tidak ikut tertarik, karena secara default file gambar pada postingan akan dimaksimalkan lebarnya menjadi 100%. Edit file css pada folder `/assets/css/style.css`

``` css
img {
	width: 100%;
	max-width: 100%;
	border-radius: 3px;
}
```

ubah menjadi

``` css
img:not(.emoji) {
	width: 100%;
	max-width: 100%;
	border-radius: 3px;
}
```

Cheatsheet dan emoji lainnya bisa kalian lihat di halaman [ini](http://emoji.muan.co)

#### Responsive Video
Agar tampilan video yang diembed di halaman ini responsive, tambahkan file Javascript bernama [FitVids](https://github.com/davatron5000/FitVids.js) milik Dave Rupert. Download file tersebut lalu tambahkan pada `/assets/js/`

Jangan lupa di load biar bisa digunakan. Caranya tambahkan baris berikut diantara tag `<body>  </body>`

``` javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="/assets/js/jquery.fitvids.js"></script>
    <script>
      $(document).ready(function(){
        // Target .container, .wrapper, .post, etc.
        $(".post").fitVids();
      });
    </script>
```

Selesai .. :dancer:

***

[^1]: Ups, maaf kawan. Saya sudah tidak menggunakan Jekyll untuk menjalankan blog ini.
