vim
======

学习 Vim
^^^^^^^^

::

   vimtutor

   移动光标 h(left) j(down) k(up) l(right)

   启动 Vim vim FILENAME <ENTER>

   退出 Vim 法一：<ESC> :q! <ENTER> 取消所有更改
           法二：<ESC> :wq <ENTER> 保存更改后退出
   
   删除光标覆盖的单个字符 x

   光标前插入 i

   行后附加 A

   删除光标以后的下一个字符/未分隔的中文字组 dw

   删除光标以后的该行内容 d$

   删除当前行，下行退到该行 dd

   使用数字重复执行 2w

   改变命令的格式 operator [number] motion

   移动到一行开始 0

   撤回前一次操作 u

   撤回当前行的所有改变 U

   撤回「撤回」 CTRL-R

参考资料
--------

1. https://www.vim.org/web.php
2. https://vimhelp.org/
3. https://linux.die.net/man/1/vimtutor
4. https://vim-adventures.com/
5. https://github.com/chrisbra/vim_faq/
6. https://vim.fandom.com/wiki/Vim_Tips_Wiki

Neovim
^^^^^^

安装后我做了什么
----------------

.. code-block:: sh

   :help nvim-from-vim

rst
^^^

`Riv.vim <https://github.com/gu-fan/riv.vim>`_ 用于在 Vim 中高亮 reStructuredText 语法。

安装过程::


