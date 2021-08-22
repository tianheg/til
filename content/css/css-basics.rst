
CSS Basics
==========

什么是 CSS？
------------

它既不是编程语言，也不是标记语言。CSS 是一种样式表语言。CSS 是你用来有选择地对 HTML 元素进行样式化的东西。

剖析 CSS 规则集
---------------


.. image:: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png
   :target: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png
   :alt: 剖析 CSS 规则集


这一整个结构被称为\ **规则集**\ 。


* 选择器：可以是元素名，类名，id 名，属性，伪类
* 声明：定义目标样式
* 属性：样式种类
* 属性值：目标样式的值
* 每一个规则集必须由 ``{}`` 包裹
* 必须用 ``:`` 分隔属性和属性值
* 在每一个规则后用 ``;`` 与下一个规则分隔

选择多个元素
------------

.. code:: css

   p, li, h1 {
     color: red;
   }

字体和文本
----------

.. code:: html

   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
       <title>Title</title>
       <style>
         html {
           font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high  */
           font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google fonts */
         }
         h1 {
           font-size: 60px;
           text-align: center;
         }
         p, li {
           font-size: 16px;
           line-height: 2;
           letter-spacing: 1px;
         }
       </style>
     </head>
     <body>
       <element>content</element>
       <empty-element>
     </body>
   </html>

CSS：关于盒子的全部
-------------------

CSS 布局主要是基于盒子模型。页面上每个占据空间的盒子都有像下面这些属性：


* ``padding``\ （填充），内容周围的空间
* ``border``\ （边框/界），\ ``padding`` 之外的地方
* ``margin``\ （边缘/距），\ ``border`` 之外的空间


.. image:: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png
   :target: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png
   :alt: 盒子的3个主要属性


ref: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics
