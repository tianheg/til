
JS Code Snippets
================

每一个 Code Snippet 是一个未被封装的函数。

查找字符串中所有 m 出现的位置
-----------------------------

.. code:: js

   var str2 = 'smyhvaevaesmyh';
   for (var i = 0; i < str2.length; i++) {
       //如果指定位置的符号=== "o"
       //str2[i]
       if (str2.charAt(i) === 'm') {
           console.log(i);
       }
   }

判断一个字符串中出现次数最多的字符，统计这个次数
------------------------------------------------

.. code:: js

   var str2 = 'smyhvaevvaesmyhvae';

   //定义一个 json，然后判断 json 中是够有该属性，如果有该属性，那么值+1; 否则创建一个该属性，并赋值为 1；
   var json = {};
   for (var i = 0; i < str2.length; i++) {
     //判断：如果有该属性，那么值+1; 否则创建一个该属性，并赋值为 1；
     var key = str2.charAt(i);
     if (json[key] === undefined) {
       json[key] = 1;
     } else {
       json[key] += 1;
     }
   }
   console.log(json);

   console.log('----------------');
   //获取 json 中属性值最大的选项
   var maxKey = '';
   var maxValue = 0;
   for (var k in json) {

     if (json[k] > maxValue) {
       maxKey = k;
       maxValue = json[k];
     }
   }
   console.log(maxKey);
   console.log(maxValue);
