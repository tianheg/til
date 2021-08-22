
Python
======

Python 的几个模块
-----------------


* **input**
* **output**
* **顺序执行**\ （sequential execution）
* **条件执行**\ （conditional execution）



   >>> from datetime import datetime
   >>> datetime.today().strftime('%Y-%m-%d')
   '2021-01-26'

`source <https://stackoverflow.com/a/32490661/12539782>`_

Python 例子
-----------

场景：查找文本文件中出现次数最多的单词
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: py

   name = input('Enter file:')
   handle = open(name, 'r')
   counts = dict()

   for line in handle:
       words = line.split()
       for word in words:
           counts[word] = counts.get(word, 0) + 1

   bigcount = None
   bigword = None
   for word, count in list(counts.items()):
       if bigcount is None or count > bigcount:
           bigword = word
           bigcount = count

   print(bigword, bigcount)

   # Code: http://www.py4e.com/code3/words.py

not on PATH
-----------



   WARNING: The script tomato is installed in '/home/vagrant/.local/bin' which is not on PATH.
     Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.

把 ``export PATH=/home/vagrant/.local/bin:$PATH`` 放在 .zshrc 的最后一行。
