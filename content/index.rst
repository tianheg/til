INDEX
=====

2021年第35周总结 :ghissue:`155`

.. image:: images/life-structure.png

认识自己和了解世界是同等重要的，认识自己可以通过阅读做到，了解世界需要学习技术知识并应用。

认识自己
^^^^^^^^^

- 日常生活向-观察并记录日常行为
- 学科向-社会学、心理学、生物类学科（脑科学、认知科学）

技术应用
^^^^^^^^^

- 计算机基础
  - 算法和数据结构
  - 计算机网络
  - 操作系统

一些想法

#. 编程语言没有优劣，只有更合适的应用场景
#. 写代码以前，可以试着画流程图

算法和数据结构
--------------

.. image:: images/ads-way.jpeg

CSS
===

CSS 是层叠样式表。

I Want

* 把 blog 的任务列表样式去掉

Responsive Web Design

There are many devices that can access the web, and they come in all shapes and sizes. Responsive web design is the practice of designing flexible websites that can respond to different screen sizes, orientations, and resolutions.


* `CSS Code Snippets <css-code-snippets.md>`_

**引入外部样式表 css 文件**\ 的方式。这种引入方式又分为两种：

1、采用\ ``<link>``\ 标签。例如：\ ``<link rel = "stylesheet" type = "text/css" href = "a.css"></link>``

2、采用 import，必须写在\ ``<style>``\ 标签中，并且必须是第一句。例如：\ ``@import url(a.css) ;``

大多数情况下，不要使用通配符\ ``*``\ 对页面所有标签定义，缺点：1,当页面标签过多时，会增加客户端运行负担

`交集选择器：定义的时候紧密相连 <https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/03-CSS%E6%A0%B7%E5%BC%8F%E8%A1%A8%E5%92%8C%E9%80%89%E6%8B%A9%E5%99%A8.md#2%E4%BA%A4%E9%9B%86%E9%80%89%E6%8B%A9%E5%99%A8%E5%AE%9A%E4%B9%89%E7%9A%84%E6%97%B6%E5%80%99%E7%B4%A7%E5%AF%86%E7%9B%B8%E8%BF%9E>`_

子代选择器，用符号\ ``>``\ 表示 和 后代不同

.. code:: css

   div > p {
       color: red;
   }

.. code:: html

   <div>
       <p>Hello World</p>
   </div>
   <!--
   <div>
       <div>
           <p>Hello World</p>
       </div>
   </div>
   -->

div 后紧跟着 p 才会应用 ``div > p``

伪类

a标签有4种伪类（即对应四种状态），要求背诵。如下：


* ``:link`` “链接”：超链接点击之前
* ``:visited`` “访问过的”：链接被访问过之后
* ``:hover`` “悬停”：鼠标放到标签上的时候
* ``:active`` “激活”： 鼠标点击标签，但是不松手时。

在css中，这四种状态\ **必须按照固定的顺序写**\ ：

..

   a:link 、a:visited 、a:hover 、a:active


一定要将a标签写在前面，将\ ``:link、:visited、:hover、:active``\ 这些伪类写在后面

前端开发工程师在大量的实践中，发现不写link、visited也挺兼容。写法是：

..

   a:link、a:visited都是可以省略的，简写在a标签里面。也就是说，a标签涵盖了link、visited的状态（前提是都具有了相同的属性）。


在写\ ``a:link``\ 、\ ``a:visited``\ 这两个伪类的时候，要么同时写，要么同时不写。如果只写\ ``a``\ 属性和\ ``a:link``\ 属性，不规范。

`层叠性：权重计算的问题 <https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/05-CSS%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E7%BB%A7%E6%89%BF%E6%80%A7%E5%92%8C%E5%B1%82%E5%8F%A0%E6%80%A7.md#%E5%B1%82%E5%8F%A0%E6%80%A7%E6%9D%83%E9%87%8D%E8%AE%A1%E7%AE%97%E7%9A%84%E9%97%AE%E9%A2%98%E5%A4%A7%E6%80%BB%E7%BB%93%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81>`_

``!important``\ :


#. 它的作用：提升一个属性的权重
#. 无法提升继承的权重？不懂
#. 它不能影响就近原则

``padding: 1em 2em 3em;``\ : top | horizontal | bottom

一些元素，默认带有padding: ``ul``\ ， 做站的时候，为了便于控制，总是喜欢清除这个默认的padding，使用专业的清除默认样式的样式表。

有浮动就有清除。如果一个元素要浮动，那么它的祖先元素一定要有高度。有高度的盒子，才能关住浮动。（记住这句过来人的经验之语）


.. image:: https://camo.githubusercontent.com/1d5ad7f5e78f58b27e0ad20c54591ee41779e8222d83cff86c41129686ddadd2/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303830325f313132332e706e67
   :target: https://camo.githubusercontent.com/1d5ad7f5e78f58b27e0ad20c54591ee41779e8222d83cff86c41129686ddadd2/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303830325f313132332e706e67
   :alt: 


与外墙法相比，内墙法的优势（本质区别）在于：内墙法可以给它所在的家撑出宽度（让box1有高）。即：box1的高度可以自适应内容。

`双倍margin的问题 <https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/07-%E6%B5%AE%E5%8A%A8.md#ie6%E7%9A%84%E5%8F%8C%E5%80%8Dmargin%E7%9A%84bug>`_\ ，面试经常问哦

绝对定位的参考点:


* 如果用top描述，那么参考点就是页面的左上角，而不是浏览器的左上角
* 如果用bottom描述，那么参考点就是浏览器首屏窗口尺寸（好好理解“首屏”二字），对应的页面的左下角

由于搜索引擎是搜不到图片的，所以一定要把“博雅互动”这几个文字加上去，然后通过text-indent缩进的属性把文字赶走到视线以外的地方。这是做搜索引擎优化的一个重要的技巧。

硬件
^^^^^

充电器要和设备所需的电源参数匹配。否则，轻则设备损坏，重则严重危害生命健康

HTML
====

HTML 是超文本标记语言。

面试题

DTD: Doctype Declaration

.. code:: html

   <meta http-equiv="refresh" content="3;https://www.baidu.com"> <!-- redirect to https://www.baidu.com after 3 seconds-->

UTF-8 在浏览器中是如何加载的？

转义字符

HTML 标签分类：排版标签，字体标签，图片标签

当表格非常大内容非常多的时候，如果用thead、tbody、tfoot标签的话，那么数据可以边获取边显示。如果不写，则必须等表格的内容全部从服务器获取完成才能显示出来

网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用 ``<br />``。不到万不得已，不要用br标签

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


JavaScript
==========

HTML，CSS 控制网页的内容和样式，JavaScript 控制交互。学习 JavaScript 过程中会涉及它的基础知识，如变量、数组、对象、循环和函数。

我的学习路径


#. freeCodeCamp's JavaScript Algorithms and Data Structures(not complete)
#. https://github.com/bradtraversy/50projects50days
#. https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

----


#. https://javascript.info/ or `MDN JavaScript Guide <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>`_
#. 复习 HTML，CSS：\ `HTML-W3Schools <https://www.w3schools.com/html/>`_\ ，\ `CSS-Tricks <https://css-tricks.com/>`_
#. 学习 DOM 和 DOM 操作：\ `MDN <https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model>`_
#. 学习写应用：\ `JavaScript 30 <https://javascript30.com/>`_

注：\ **在学习框架之前，打好基础**\ 。

ref:


* https://github.com/leonardomso/33-js-concepts - 33 JavaScript concepts every developer should know
* https://github.com/trekhleb/javascript-algorithms - Algorithms and data structures implemented in JavaScript with explanations and links to further readings
* `JavaScript DOM 编程艺术 <https://rbew.github.io/Javascript_Dom/>`_

Great Posts about JS

* `12 JavaScript quirks <https://2ality.com/2013/04/12quirks.html>`_


Version Control - Git
=====================

Git 是一个记录文件变化的软件。由 Linux 之父 Linus Torvalds 于 2005 年创造。

----

ref:


#. https://github.com/git-tips/tips
#. `Git Reference Manual <https://git-scm.com/docs>`_
#. `GitHub Cheat Sheet <https://training.github.com/downloads/github-git-cheat-sheet/>`_
#. `Visual Git Cheat Sheet <https://ndpsoftware.com/git-cheatsheet.html>`_
#. `git - the simple guide <https://rogerdudler.github.io/git-guide/index.html>`_
#. `Think Like (a) Git <http://think-like-a-git.net/>`_
#. `Pro Git book 2nd Edition <https://git-scm.com/book/en/v2>`_
#. `A Visual Git Reference <http://marklodato.github.io/visual-git-guide/index-en.html>`_
#. https://learngitbranching.js.org/
#. https://github.com/sds/overcommit


.. toctree::
   :maxdepth: 2

   cs-and-web-concepts/计算机网络
   cs-and-web-concepts/dns
   cs-and-web-concepts/科技英语
   cs-and-web-concepts/front-end-and-its-history
   cs-and-web-concepts/cors
   cs-and-web-concepts/how-the-web-works
   algorithms-and-data-structure/books
   operating-system/linux-details
   operating-system/linux-common-orders
   operating-system/arch-system-maintenance
   operating-system/arch-package
   operating-system/arch-software-installation-and-usage
   operating-system/arch-installation-guide
   operating-system/openbsd-installation
   operating-system/ubuntu-backup
   operating-system/ubuntu-common-usage
   operating-system/ubuntu-install-software
   operating-system/ubuntu-problems
   operating-system/mxlinux-installation
   html/before-html
   html/html-basics
   html/images
   html/html-code-snippets
   css/css-basics
   css/css-box
   css/css-position
   css/css-code-snippets
   javascript/javascript-basics
   javascript/es6
   javascript/what-i-learnt-from-js
   javascript/install-node-npm-yarn
   javascript/yarn-v2-usage
   javascript/used-packages-from-npm-or-yarn
   javascript/the-difference-between-js-in-head-and-body
   javascript/js-code-snippets
   vue/vue
   front-end
   programming-languages/shell
   programming-languages/python
   programming-languages/go
   projects/wordpress
   tools/docker
   tools/vagrant
   tools/gpg
   tools/jekyll
   tools/hugo
   tools/vim
   tools/cloudflare
   tools/gatsby
   tools/sphinx
   version-control-git/git-fundamentals
   version-control-git/git-commit
   version-control-git/commit-messages-guide
   version-control-git/git-and-gitHub
   version-control-git/git-command-line-reference
   version-control-git/git-glossary
   version-control-git/useful-tips-about-git
   version-control-git/branch-name-contain-the-space-char
   version-control-git/create-empty-branch-locally-and-remotely
   version-control-git/delete-a-git-branch-both-locally-and-remotely
   version-control-git/delete-all-local-and-remote-tags
   version-control-git/delete-commit
   version-control-git/merge-two-git-repo
   version-control-git/remove-tracking-branches-no-longer-on-remote
   version-control-git/update-with-original-repo-after-forking-on-github
   version-control-git/git-clone-specify-branch
   version-control-git/github-action-only-generate-nojekyll
   useful-info
   hardware/bluetooth
   hardware/power-supply-unit
   hardware/raspberry-pi
   learning-how-to-learn


`glossary 索引 <genindex.html>`_
