
ES6
===

ECMAScript，或 ES，是一种 JavaScript 标准化版本。目前我接触的 JavaScript 的大部分内容是 ES5，发布于 2009 年。虽然如此，但 JavaScript 始终进化着，每年都会有新功能发布。

ES6 发布于 2015 年，添加了很多新特性。其中有 ``let`` 和 ``const``\ ，箭头函数、类、Promise 和模块。

``var`` 和 ``let`` 有什么不同
-------------------------------------

使用 ``var`` 声明的变量可以被新的值覆盖：

.. code:: js

   var camper = 'A';
   var camper = 'C';
   console.log(camper);
   // output: C

在小程序中使用，你不会遇到这类问题，但如果你的代码变大，你可能意外覆盖了一个你没有想覆盖的变量。覆盖后不会报错，寻找并修补 Bugs 变得更加困难。

``let`` 作为 ES6 中的新关键字，就是为了解决 ``var`` 带来的潜在问题。使用 ``let`` 声明的相同变量只能声明一次。

.. code:: js

   let camper = 'A';
   let camper = 'C';
   console.log(camper);
   // output: SyntaxError: Identifier 'camper' has already been declared

要注意 ``"use strict";``\ ，它开启严格模式，开启之后的文件中，常见的编码错误和不安全的行为都会被提示。

``var`` 和 ``let`` 的作用范围
-------------------------------------

``var`` 可以全局、局部声明；\ ``let`` 类似，但有其他的特性：在块、语句或表达式中使用 ``let`` 关键字声明变量时，其作用域仅限于该块、语句或表达式。

仔细观察以下 4 段代码，比较 ``var`` 和 ``let`` 的作用域：

.. code:: js

   var numArray = [];
   for (var i = 0; i < 3; i++) {
     numArray.push(i);
   }
   console.log(numArray);
   console.log(i);

.. code:: js

   var numArray = [];
   var i;
   for (i = 0; i < 3; i++) {
     numArray.push(i);
   }
   console.log(numArray);
   console.log(i);

.. code:: js

   var printNumTwo;
   for (var i = 0; i < 3; i++) {
     if (i === 2) {
       printNumTwo = function() {
         return i;
       };
     }
   }
   console.log(printNumTwo());

.. code:: js

   let printNumTwo;
   for (let i = 0; i < 3; i++) {
     if (i === 2) {
       printNumTwo = function() {
         return i;
       };
     }
   }
   console.log(printNumTwo());
   console.log(i);

``const`` 声明只读变量
--------------------------

``let`` 有的所有特性，\ ``const`` 全都有。另外，通过 ``const`` 声明的变量是只读的，这些变量恒定不变。这样就意味着：一旦变量由 ``const`` 声明，便不能再声明：

.. code:: js

   const FAV_PET = "Cats";
   FAV_PET = "Dogs";
   // output: TypeError: Assignment to constant variable.

你应该总是命名变量，你不必使用 ``const`` 再指定变量。当你想给始终不变的变量赋值时，它会提示你不可行。一个常用方法：命名变量的常见做法是全部使用大写字母，单词由下划线分隔。使用 const 声明只能防止变量标识符的重新赋值。

**注**\ ：对于开发者来说，使用大写字母定义不可变值，小写或驼峰式写法定义可变值（对象，数组）。

改变 ``const`` 声明的数组
-----------------------------

变量无法改变，但可以改变数组中单个元素的值。

防止对象变化
------------

使用 ``Object.freeze``\ 。

使用箭头函数写简洁的匿名函数
----------------------------

ES6 提供的语法糖可以让我们不需要这样写匿名函数：

.. code:: js

   const myFunc = () => {
     const myVar = "value";
     return myVar;
   }

.. code:: js

   const myFunc = () => "value";

写具有参数的箭头函数
--------------------

.. code:: js

   const doubler = (item) => item * 2;
   doubler(4);

如果一个箭头函数只有一个参数，则可以省略包含该参数的圆括号。

.. code:: js

   const doubler = item => item * 2;

.. code:: js

   const multiplier = (item1, item2) => item1 * item2;
   multiplier(4, 2);

为函数设置默认参数
------------------

.. code:: js

   const greeting = (name = "Anonymous") => "Hello" + name;
   console.log(greeting("Tim"));
   console.log(greeting());

在函数参数中使用 ``rest`` 参数
----------------------------------

通过它可以创建具有参数变量的函数，这些参数被存储在一个数组中，能够被后来的内部函数调用。

改变前：

.. code:: js

   const sum = (x, y, z) => {
     const args = [x, y, z];
     return args.reduce((a, b) => a + b, 0);
   };
   console.log(sum(110, 1, 2));

改变后：

.. code:: js

   const sum = (...args) => {
     return args.reduce((a, b) => a + b, 0);
   };
   console.log(sum(110, 1, 2));

好奇怪，这样改动是我不经意之举，但是改对了。

使用 ``spread`` 操作符计算在位阵列
--------------------------------------

.. code:: js

   const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
   let arr2;

   arr2 = [...arr1];  // Change this line

   console.log(arr2);

试过很多次，最后一次对了。现在还不理解，以后会理解的。

----

**参考资料**\ ：


#. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6
