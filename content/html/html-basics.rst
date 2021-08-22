
HTML Basics
===========

HTML(\ **H**\ yper\ **t**\ ext **M**\ arkup **L**\ anguage，超文本标记语言)，它是一种定义你内容结构的一种标记语言。

剖析一个 HTML 元素
------------------


.. image:: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png
   :target: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png
   :alt: 剖析一个 HTML 元素


一个元素主要由以上 3 部分组成：


#. 开标签
#. 闭标签
#. 内容
#. 元素：The opening tag, the closing tag, and the content together comprise the element.


.. image:: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png
   :target: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png
   :alt: 元素属性


元素还有属性。属性由属性名（\ ``class``\ ）和属性值（\ ``editor-note``\ ）构成。\ ``class`` 属性允许给元素加一个不唯一的标识符，用以指向这个元素，然后可以为这个元素添加样式/其他行为。

一个属性应该包含以下几个部分：


#. 属性与属性之间、属性和元素名之间，应该有 1 个空格
#. 属性名后有一个 ``=``
#. 属性值由引号包裹 ``""``\ /\ ``''``

嵌套元素
--------

能够放进其他元素的，就是嵌套元素。

空元素
------

一些元素没有内容供它们包裹，它们的作用不是来改变内容，而是把元素表示的东西嵌入 HTML 页面里。

.. code:: html

   <img src="images/firefox-icon.png" alt="My test image">

一个 HTML 文档结构
------------------

.. code:: html

   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title>Title</title>
     </head>
     <body>
       <element>content</element>
       <empty-element>
     </body>
   </html>

介绍：


#. ``<!DOCTYPE html>``\ ：早些时候，它具备很多功能（自动错误检查等）；现在只有一个：确保 HTML 表现正常
#. ``<html></html>``\ ：它包裹当前页面的所有内容，也被称为「根元素」
#. ``<head></head>``\ ：包含在页面中却不被访问者看见的内容的聚集地，它可以包含：字符声明、SEO关键字、样式元素等
#. ``<meta charset="utf-8">``\ ：它是最全的字符集，包括了几乎所有世界上使用的语言，最重要的是它可以识别你输入的任何内容，HTML 中它是必备的
#. ``<title></title>``\ ：用于浏览器标签显示标题，也用于添加标签/喜爱时的描述
#. ``<body></body>``\ ：这里包含了你想向访客展示的一切内容

图像
----

.. code:: html

   <img src="images/firefox-icon.png" alt="My test image">

介绍：


#. ``src``\ (source)：图像路径
#. ``alt``\ (alternative)：\ ``alt`` 应该写得足够详细以概括图像的内容

   #. 当图像无法显示时，\ ``alt`` 文本就会显示
   #. 这样设置，是为了帮助有视觉障碍的人，理解图片的含义。

在进行图片的显示大小设置时，可以只设置一个（width 或 height），之后 HTML 会自动把没有设置的那一个按图片比例调整到合适大小。adjust the aspect ratio for you（为你调整长宽比）。

``alt`` 描述图片内容，并提供可选文本。它可以应对图片加载失败或者无法被用户看见的情况。它也能让搜索引擎知道一张图片里包含了什么。

HTML5 引入了新的 ``figure`` 和与它相关的 ``figcaption``\ ，它们可以一起展示可视化的事物（像图像、图表），包裹这些元素能够能够提供双层可访问性加速，通过语义地对相关内容进行分组并提供一个可选文本解释 ``figure``\ 。对于数据可视化，像图表，说明可以被用来为有视觉障碍的用户简短地提示趋势或结论。使用它面临的另一个挑战：如何为读屏读者移动脱离屏幕的表格数据。

在进行图片的显示大小设置时，可以只设置一个（width 或 height），之后 HTML 会自动把没有设置的那一个按图片比例调整到合适大小。adjust the aspect ratio for you（为你调整长宽比）。

标记文本
--------

标题
^^^^

.. code:: html

   <h1>Hello World!</h1>
   <h2>Hello World!</h2>
   <h3>Hello World!</h3>

段落
^^^^

.. code:: html

   <p>Hello World!</p>

列表
^^^^

``<ul>``\ (unordered lists)/\ ``<ol>``\ (ordered listed)：无序/有序列表。它们中都有 ``<li>``\ (list item) 元素。

.. code:: html

   <ul>
     <li><a href="#">Apples</a></li>
     <li>Oranges
       <ol>
         <li>tetx</li>
       </ol>
     </li>
     <li>Bananas</li>
   </ul>

   <ol type="a/A/I/i">
     <li>Apples</li>
     <li>Oranges</li>
     <li>Bananas</li>
   </ol>

   <ol start="11">
     <li>HTML</li>
     <li>HTML</li>
     <li>HTML</li>
   </ol>

   <dl>
     <dt>Apples</dt>
     <dd>- They are red.</dd>
     <dt>Oranges</dt>
     <dd>- They are orange.</dd>
   </dl>

链接
----

``<a>``\ (anchor)，\ ``href``\ (hypertext reference)

.. code:: html

   <a href="https://www.google.com" target="_blank">Google's Homepage</a>

   <a href="pages2.html">Pages2Tss</a>

   <a href='path/to/file' download>
   Download
   </a>

   <a href="mailto:{email}?subject={subject}&body={content}">
   Send us an email
   </a>

   <a href="tel:{phone}">
   Call us
   </a>

   <a href="sms:{phone}?body={content}">
   Send us a message
   </a>

``a`` 所包含的文本要能表示即将跳转页面的含义。

Basic Tags
----------

``html``\ , ``head``\ , ``body``\ , ``meta``\ , ``title``\ , ``hx``\ (x=1~6), ``p``\ , ``b``\ (bold), ``i``\ (italic), ``br/``\ , ``hr/``\ , ``big``\ , ``small``\ , ``sub``\ , ``sup``\ , ``aside``\ , ``a``\ , ``img``\ , ``video``\ , ``iframe``\ , ``ul``\ , ``ol``\ , ``li``\ , ``dl``\ , ``dt``\ , ``dd``

Comments
--------

.. code:: html

   <!-- -->

Style and Colors
----------------

.. code:: html

   <p style="color: green;">Hello World!</p>

Formatting a Page
-----------------

.. code:: html

   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8">
       <meta name="description" content="This is an example.">
       <title>Title</title>
     </head>
     <body>
       <header>
         <nav></nav>
       </header>
       <main>
         <article>
           <section>
             <h2>Hello World!</h2>
             <p>Hello World!</p>
           </section>
         </article> 
       </main>
       <footer></footer>
     </body>
   </html>

Images
------

.. code:: html

   <a href="">
     <img src="" alt="" width="" height="100"/> <!-- 100px pixels-->
   <figure>
     <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
     <br>
     <figcaption>
       Master Camper Cat demonstrates proper form of a roundhouse kick.
     </figcaption>
   </figure>

   <img src='image.jpg' loading='lazy' alt='Alternative Text'>

Videos and YouTube iFrames
--------------------------

.. code:: html

   <video src="" width="" height="" poster="" loop autoplay controls></video> <!-- 添加封面 -->

   <iframe width="560" height="315" src="https://www.youtube.com/embed/pQN-pnXPaVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


* ``controls`` 显示基本的操作：播放、暂停等；

Tables
------

.. code:: html

   <table>
     <thead>
       <caption><h2>List of Numbers</h2></caption>
       <tr>
         <th>Num1</th>
         <th>Num2</th>
         <th>Num3</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td colspan="2">Four</td>
         <td>Five</td>
         <td>Six</td>
       </tr>
     </tbody>
   </table>

Divs and Spans
--------------

.. code:: html

   <!-- Inline element -->
   <a href="#">link1</a>
   <a href="#">linkk2</a>
   <span>text</span>

   <!-- block element -->
   <hr>
     <p>Text</p>
     <p>Tsts</p>
     <div>div1</div>
     <div>div2</div>

Input and Forms
---------------

.. code:: html

   <form>
     <label for="username">Username:</label>
     <input type="text" value="Enter your username" id="username" name=""/>
     <input type="password" />
     <textarea rows="10" cols="30">
     Enter a paragraph
     </textarea>
     <input type="date" />
     <input type="email" />
     <input type="range" />
     <input type="file" />
     <input type="checkbox" />
     <input name="btn" type="radio" />
     <input name="btn" type="radio" />
     <input type="submit" />
   </form>

使用 ``label`` 增加 ``form`` 的可访问性。

iFrames
-------

.. code:: html

   <iframe src="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" frameborder="0" width="" height="">
   fCC JavaScript
   </iframe>

有些网站不允许通过 ``iframe`` 嵌入到其他网站中，因为这会使得浏览网站的人误以为“其他网站”才是真网站，而把那个真正的官方网站视为假网站。

Meta Tags
---------

.. code:: html

   <meta charset="UTF-8">
   <meta name="description" content="This is an example.">
   <meta name="author" content="Jim Gao">
   <meta name="keywords" content="Tags, HTML">

   <meta name="viewport" content="width=device-width, initial-scale=1.0">

HTML5 引入的新标签们
--------------------

``main``
^^^^^^^^^^^^

``header``
^^^^^^^^^^^^^^

它被用来包装介绍信息或导航链接作为它的父标签，与在多页都是重复的目录协作得很好。它共享你从 ``main`` 那儿看到的嵌入式地标特征，允许辅助技术快速导航到那儿。\ ``header`` 是用于 ``body`` 内部的标签，和 ``head`` 元素不同，后者包含页面的标题、元信息等等内容。

``footer``
^^^^^^^^^^^^^^

它内置了一个强大功能：允许辅助设备快速地导航到那里。主要用于包含版权信息或者与文档相关的链接，通常被放置在页面的底部。

``nav``
^^^^^^^^^^^

它包裹着主要导航链接。

``article``
^^^^^^^^^^^^^^^

它表示文档、页面、应用或站点中的一个自包围部分，这些应用的地方是可配置且可复用的。

``section``
^^^^^^^^^^^^^^^

``time``
^^^^^^^^^^^^

.. code:: html

   <time datetime="2013-02-13">last Wednesday</time>

它的一个属性 ``datetime`` 可以设置时间格式。它能标准化显示时间。

提高网站可访问性
----------------


* 小心选择传递信息的颜色；使用足够的对比度，为了避免色盲人群可能遇到的问题。
* 使用高对比度的文本增加可读性（在前置颜色与背景颜色）。网页无障碍性指导原则（Web Content Accessibility Guidelines，WCAG）推荐对于正常文本至少需要 4.5 到 1 的对比度。
* ``alt`` 中并非总是有内容，对于图片来说，如果它已经有描述标签，就可以留空 ``alt``\ ；或者当图片仅为了装饰时。
* 
  使元素仅对屏幕阅读器可见

  .. code:: css

     .sr-only {
       position: absolute;
       left: -10000px;
       width: 1px;
       height: 1px;
       top: auto;
       overflow: hidden;
     }

* 
  使用 HTML 访问键使链接可导航

  .. code:: html

     <button accesskey="b">Important Button</button>

* 
  对于标题标签 ``hx``\ ，数字越小越往前，顺序不能颠倒；而且不能间隔使用：\ ``h2`` 后不能直接接 ``h4``\ ，要按顺序接 ``h3``\ 。如果担心大小，可通过 CSS 设置相对大小；\ ``h1`` 是必须存在的一个元素，它在一个页面只能有一个，它是你内容的主题。标题标签还被用于帮助搜索引擎理解页面的内容。

* *Semantic meaning* 意味着你使用的标签能够暗示它包含的信息的种类
* ``tabindex`` 有 3 个独特的作用：当它在标签上时，表明该元素可以被关注。该值（正，负或零的整数）确定行为。它还可被用于 ``div``\ ，\ ``span``\ ，\ ``p``\ ，通过在上面放置 ``tabindex="0"``\ 。注意：当 ``tabindex`` 被设为负值，这表示被设置元素是可关注的，但无法通过键盘访问。这种方法通常用于以编程方式将焦点移到内容上（像当用于弹窗的 ``div`` 被激活时）
* 
  把 ``radio`` 放在 ``fieldset`` 中可以改善无障碍访问

  .. code:: html

     <form>
       <fieldset>
         <legend>Choose one of these three items:</legend>
         <input id="one" type="radio" name="items" value="one">
         <label for="one">Choice One</label><br>
         <input id="two" type="radio" name="items" value="two">
         <label for="two">Choice Two</label><br>
         <input id="three" type="radio" name="items" value="three">
         <label for="three">Choice Three</label>
       </fieldset>
     </form>

名词解释
--------


* Accessibility 无障碍访问（In web development, accessibility refers to web content and a UI (user interface) that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities.）

----

**参考资料**\ ：


#. https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
#. https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5
#. https://youtu.be/pQN-pnXPaVg
#. https://www.w3schools.com/html/default.asp
