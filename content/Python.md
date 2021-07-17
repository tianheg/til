---
title: Python
---
# Python

## Python 的几个模块

- **input**
- **output**
- **顺序执行**（sequential execution）
- **条件执行**（conditional execution）

```sh
>>> from datetime import datetime
>>> datetime.today().strftime('%Y-%m-%d')
'2021-01-26'
```

[source](https://stackoverflow.com/a/32490661/12539782)

## Python 例子

### 场景：查找文本文件中出现次数最多的单词

```py
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
```