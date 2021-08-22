.. role:: raw-html-m2r(raw)
   :format: html


HTML
====

HTML 是超文本标记语言。

面试题
------

DTD: Doctype Declaration

.. code:: html

   <meta http-equiv="refresh" content="3;https://www.baidu.com"> <!-- redirect to https://www.baidu.com after 3 seconds-->

UTF-8 在浏览器中是如何加载的？

转义字符

HTML 标签分类：排版标签，字体标签，图片标签

当表格非常大内容非常多的时候，如果用thead、tbody、tfoot标签的话，那么数据可以边获取边显示。如果不写，则必须等表格的内容全部从服务器获取完成才能显示出来

网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用\ :raw-html-m2r:`<br />`\ 。不到万不得已，不要用br标签

H5 的经典网页布局

在 HTML5 中， a 标签中可以包含 div；在 HTML5 中 a > div 是合法的， div > a > div是不合法的

为了严格保证字在行里面居中，我们的工程师有一个约定：\ **行高、字号，一般都是偶数**\ 。这样可以保证，它们的差一定偶数，就能够被2整除

行高 = 盒子高，就可以保证单行文本垂直居中

如果想让多行文本垂直居中，还需要计算盒子的padding

如果我们把中文字体写在前面 ``font-family: "微软雅黑","Times New Roman","宋体";`` 上方代码会导致，中文和英文都会采用微软雅黑字体

background-repeat: no-repeat; 设置背景图片是否重复及如何重复，默认平铺满。（重要）

16进制<-->10进制

常用颜色：

.. code:: text

   #000   黑
   #fff   白
   #f00   红
   #222   深灰
   #333   灰
   #ccc   浅灰
