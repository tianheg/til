# JavaScript 基础

## Comment JavaScript Code

JavaScript 会忽略被注释掉的代码。写注释能够帮你或别人弄清楚代码的意思。注释的两种方法：

```javascript
// This is an in-line comment.

/* This is a
multi-line comment */
```

好的注释能够帮助代码传达实现意图。

## 声明 JavaScript 变量

在计算机科学中，data 指代一切对计算机有意义的事物。JavaScript 提供了 8 种不同的数据类型，它们分别是 `undefined`，`null`，`boolean`，`string`，`symbol`，`bigint`，`number`，`object`。

计算机可以识别数字，例如 `2`，字符串，例如 `"2"`,`"cat"`， 或者 `"2 cat"`，最后一个是字符的组合。计算机能进行有关数字的数学运算，但它不能运算字符串。

计算机能以动态方式存储操作变量。计算机使用标签指向数据，而不是直接使用数据。变量可以是八种数据类型的任何一个或多个。

这里的变量和你在数学中用到的 x 和 y 变量很像，这说明变量是一个代表我们想用的数据的简单名字。计算机变量不同于数学变量，因为它们可以在不同的时间存储不同的值。

在 JavaScript 中，使用 `var` 创建或声明一个变量：

```js
var ourName;
```

在 JavaScript 中使用分号结束声明。**数字、字母和 `$` 或 `_`是变量名组成范围**，但是：

1. 变量不能含有空格；
2. 首字母不能是数字。

## 使用赋值操作符存储值

```js
myVariable = 5; // assigns the number value 5 to myVariable
```

如果 `=` 右侧有任何计算，在把值赋给操作符左边的变量之前，计算已经结束了。

例子：

```js
var myVar;
myVar = 5;
```

## 把一个变量的值赋给另一个变量

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

## 使用赋值操作副初始化变量

```js
var myVar = 0;
```

## 理解未初始化变量

在 JavaScript 中，刚声明的变量具有初始值：`undefined`。如果使用一个 `undefined` 变量执行数学操作，你的结果会是 `NaN`，意为“不是一个数字”。如果和 `undefined` 变量组成字符串，你会得到一个文字字符串 `undefined`。

## 理解变量的大小写敏感

在 JavaScript 中，所有变量和函数的名字是大小写敏感的。这意味着大写对它们的名字有影响。

`MYVAR` 和 `MyVar` 或 `myvar` 都不一样。可能有多个这样的变量，它们名字相同，但具有不同的大小写。为了清晰强烈推荐不要使用这个语言特点。

**最佳实践**：

在 JavaScript 中使用驼峰命名法。该种方法中，多单词变量的第一个单词首字母小写，第二个单词和之后的单词的首字母大写。

```js
var someVariable;
var anotherVariableName;
var theVariableNameIsSoLong;
```

## 基本运算

### 两数加法

`Number` 是 JavaScript 中的一种数据类型，它可以表示数字数据。`+` 是 JavaScript 的加法操作运算符。

```js
myVar = 1 + 2;
```

### 两数相减

```js
myVar = 2 - 1;
```

### 两数相乘

```js
myVar = 2 * 3;
```

### 两数相除

```js
myVar = 4 / 2;
```

## 自增 1 再赋值

```js
i++;
```

## 自减 1 再赋值

```js
i--;
```

## 创建十进制数

十进制数有时候也可看成 _floating point numbers_ 或 _floats_。

**不过并非所有实数都能用浮点数准确表示。这样会导致化整误差**。

```js
var myDecimal = 2.3;
```

## 两浮点数相乘

```js
var product = 2.0 * 2.5;
```

## 两浮点数相除

```js
var quotient = 4.4 / 2.0;
```

## 取余

余数运算符 `％` 给出两个数字除法的余数（取余操作符 `%` 作为两数相除后的余数标志，括号内的是自己的翻译）。

在数学中，通过检查与 `2` 整除的余数来确定一个数字是偶数还是奇数。

**有时，取余操作符有时会被误认为是模操作符**。它和模操作符很像，但它无法识别负数。

```js
var remainder = 11 % 3;
```

## 用括号在字符串中寻找字符

大多数现代编程语言从 0 开始计数。

```js
var firstName = "Tianhe Gao";
var firstLetter = firstName[0];
// ouput: T

// 找第 n 个字符
var firstName = "Ada";
var secondLetterOfFirstName = firstname[1];
// output: d

// 找最后一个字符
var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];

// 找倒数第 n 个
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
```

## 理解的字符串的不变性

JavaScript 中，字符串的值一经创建无法修改。除非重新赋值。

```js
var myStr = "Amy";
myStr = "Tom";
```

## 填字游戏

```js
var myNoun = 'dog';
var myAdjective = 'Big';
var myVerb = 'ran';
var myAdverb = 'quickly';

var wordBlanks =
    myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb + '.';
console.log(wordBlanks);
```

## 变量存储多值

```js
var sandwich = ["A", "B", "C", 12];
```

## 数组嵌套

```js
var myArray = [["Amy", 21], ["Tom", 23]];
```

## 使用索引访问数组数据

```js
var myArray = [50,60,70];
var myData = myArray[0];

// 使用索引修改数组数据
var myArray = [18,64,99];
myArray[0] = 45;

// 使用索引访问多维数组
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```

## 首尾增减数组

### `unshift()`

`unshift()` 从数组的开头添加元素

```js
var ourArray = ['A', 'B', 'C'];
ourArray.shift();
ourArray.unshift('D');
console.log(ourArray);
```

### `shift()`

`shift()` 从数组的开头移除元素

```js
var ourArray = ["A", "B", "C"];
var removeFromOurArray = ourArray.shift();
```

### `push()`

`push()` 能够很轻松地在数组的最后附加数据。

```js
var myArray = [
    ['John', 23],
    ['cat', 2],
];
myArray.push(['dog', 3]);
console.log(myArray);
```

### `pop()`

`pop()` 从数组的最后移除元素

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

## 创建 `List`

`List` 是包含几个子数组的多维数组。作为购物清单的话，多维数组的子数组的第一个元素是包含购买物品的名字的字符串，第二个元素应该是表示数量的数字：`["Chocolate", 12]`。

```js
var myList = [["A", 12], ["B", 13], ["C", 14],["D", 15], ["E", 16]];
```

## 使用函数编写可复用的 JavaScript

```js
function functionName() {
    console.log('Hello World');
}
functionName();
```

你可以通过类似 `functionName()` 的形式调用该函数。这个函数每调用一次都会在开发控制台打印输出信息：`Hello World`。每次调用函数时，大括号内的所有代码都会执行一次。

## 使用参数将值传递给函数

参数是用作变量的占位符，这些变量将在调用函数时输入到函数中。

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(12, 13);
```

## 全局作用域和函数

JavaScript 中，范围是指变量的可见性。在功能块之外定义的变量具有全局作用域。这意味着它们可以被用于 JavaScript 代码的任何地方。变量创建的作用域为全局，当不使用 `var` 声明时。这样做时会使你代码的其他地方产生意想不到的结果，或者当你再次使用函数时。你应该总是使用 `var` 声明变量。

```js
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = '';
    if (typeof myGlobal != 'undefined') {
        output += 'myGlobal: ' + myGlobal;
    }
    if (typeof oopsGlobal != 'undefined') {
        output += ' oopsGlobal: ' + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
```

## 局部作用域和函数

在函数中声明的变量以及函数参数具有局部作用域。这意味着他们只在该函数中可见。

```js
function myLocalScope() {
    // Only change code below this line
    var myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

## 函数中的全局和局部变量

有可能局部变量和全局变量的名字相同。当出现这种情况时，局部变量的优先级高于全局变量。

```js
var someVar = 'Hat';
function myFun() {
    var someVar = 'Head';
    return someVar;
}
console.log(myFun());
```

## 使用 `return` 将值发回函数

```js
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5);
console.log(answer);
```

## `undefined` 值

```js
var sum = 0;
function addSum(num) {
    sum = sum + sum;
}
console.log(addSum(3));
// output: undefined
```

## 赋返回值

```js
var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);
// output: 2
```

## 排队等候

在计算机科学中，队列是一种抽象的数据结构，它的对象按照一定顺序排列。遵从“先进先出，后进后出”的规则。

***着重理解，这段代码***

```js
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// or
// function nextInLine(arr, item) {
//   arr.push(item);
//   var removed = arr.shift();
//   return removed;
// }
```

## 布尔型

它是一种数据类型。只有两个值：`True` 和 `False`，且互相排斥。注意：布尔型书写时没有引号，带引号的字符串：`"true"``"false"`，不是布尔型，在 JavaScript 中没有特殊意义。

函数返回布尔型：

```js
function isLess(a, b) {
  return a < b;
}
```

## 用 `if` 表达条件逻辑

```js
if(true / false) {
  statement is executed
}
```

只有当 if 后括号中的值为 true 时，大括号内的代码才执行。if 与括号之间可以有空格，但为了规范，不写空格。

```js
function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```

## `else`, `else if`

```js
// else
if(num > 10) {
  return "Bigger than 10";
} else {
  return "10 or less";
}
// else if
if(num > 15) {
  return "Bigger than 15";
} else if(num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

`if`, `else if` 中的逻辑顺序很重要。以下示例：

```js
// A
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
foo(0) // output: Less than one
// B
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
bar(0) // output: Less than two
```

`if` 和 `else if` 配合使用：

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change me";
  }
}
testSize(7);
```

## `switch`

在这个例子中，没有理解 `case` 后的值采用 `===`（严格等于）的真正含义。

```js
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
  }
  return answer;
}
caseInSwitch(3);
```

如果 `switch` 语句的 `case` 中省略了 `break` 语句，则执行下面的 `case` 语句，直到遇到 `break`。如果你有多个带有相同输出的输入，你可以像下面这样表示：

```js
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

`switch` 语句与 `if / if else` 可以互相替换，前者相较于后者更容易编写。

**一个应用的小例子（Card Counting）**：

没找到解题思路

```js
var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

## 比较运算符

JavaScript 中有很多比较运算符，它们的运算结果是布尔型，即只返回：`True` 和 `False`。

**强制类型转换（ Type Coercion）**

### `==`

```js
function testEqual(val) {
  if(val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);
```

### `===`

Strict equality (`===`) is the counterpart to the equality operator (`==`). 严格相等运算符不支持类型转换，如果比较两个数据类型不同的值，返回值为：`false`。亦即，严格相等运算符在运算时比较两项：数据类型、大小，有一个不同即返回：`False`。

```js
function tesstStrict(val) {
  if(val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);
```

### `!=`

```js
function testNotEqual(val) {
  if(val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotequal(10);
```

### `!==`

```js
function testStrictNotEqual(val) {
  if(val !== 17)  {
    return "NotEqual";
  }
  return "Equal";
}
testStrictNotEqual(10);
```

### `>`, `<`, `>=`, `<=`

```js
console.log(1 > 2);
console.log(2 < 3);
console.log(2 <= 3);
console.log(1 >= 2);
```

### `&&`, `||`

```js
// &&
function testLogicalAnd(val) {
  if(val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);
// ||
function testLogicalOr(val) {
  if(val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalor(15);
```

## `return`

返回函数的早期模式：函数中遇到 `return`，当函数运行到 `return` 时，返回 `return` 后面的值，该函数停止执行以后的陈述：

```js
function myFunc() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFunc();
// Output: Hello\n"World"
```

## 构建对象

对象和数组很像，只不过对象不使用索引存取和修改数据，而是通过属性。对象对于以结构化方式存储数据很有用。如果您的对象具有任何非字符串属性，则 JavaScript 会自动将它们作为字符串进行类型转换。

```js
var myDog = {
  name: "Xiaoming",
  legs: 4,
  tails: 1
}
```

### 访问对象属性

**`.`**

当你知道属性名，并且想提前获取时，可以使用 `.`。

```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

**`[]`**

```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
testObj["hat"];
testObj["shirt"];
```

**变量**

```js
var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBread);
```

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

注意：当使用变量获取对象属性时，不要在变量处加引号，因为我们需要变量的值，而不是名字。

### 更新对象属性

```js
var ourDog = {
    name: 'Bot',
};
ourDog.name = 'Happy Bot';
console.log(ourDog);
// or ourDog["name"] = "Happy Bot";
```

### 添加新属性

就像修改对象属性一样，添加新属性，不过是修改一个当前对象不存在的属性。

```js
var ourDog = {
    name: 'Bot',
};
ourDog.legs = 4;
console.log(ourDog);
```

### 删除属性

```js
var ourDog = {
    name: 'Bot',
};
delete ourDog.name;
console.log(ourDog);
```

### 使用对象查询

对象可被看作「键 / 值 存储」，就像字典。如果你有表格数据，你可以使用一个对象查询值而不是一个 `switch` 或 `if / else` 语句。当你清楚你的输入数据是有限范围时很有用。

**不会写**：

```js
// 问题：
// switch 语句转成名为 lookup 的对象
// switch 语句
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
// 答案
function phoneticLookup(val) {
    var result = '';
    var lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        fixtrot: 'Frank',
    };
    result = lookup[val]; // 这句话没想到这么写
    return result;
}
console.log(phoneticLookup('echo'));
```

### 测试对象属性存在与否

使用 `.hasOwnProperty(propname)` 对象方法，确定对象是否有给定的属性名。如果有，`.hasOwnProperty()` 返回 `true`，反之返回 `false`。

```js
var tianhegObj = {
    right: 'air',
    left: 'life',
};
console.log(tianhegObj.hasOwnProperty('right'));
console.log(tianhegObj.hasOwnProperty('middle'));
// ouput: true false
```

**问题**：输入 `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` 格式数据，如果属性存在，返回属性值，若不存在，返回 `"Not Found"`。

```js
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return 'Not Found';
    }
}
console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));
```

以上是正确答案，我写的错误答案，只是把 `obj[checkProp]` 改为 `obj.checkProp`。

## 操作复杂对象

JavaScript 对象可以使你灵活地存储数据。他们允许字符串、数字、布尔型、数组、函数、对象的任意组合。

例子：

```js
var myMusic = [
    {
        artist: 'Coldplay',
        title: 'Viva La Vida',
        release_year: 2008,
        formats: ['CD', 'Cassette', 'LP'],
        gold: true,
    },
];
```

这是数组中的内嵌了对象。这个对象有关于一张唱片的各种元信息。它还具有一个嵌套的格式数组。注意：你要在数组中的每一个对象后加 `,` 除非它是数组的最后一个对象。

## 访问嵌套对象

```js
var myStorage = {
    car: {
        inside: {
            'glove box': 'maps',
            'passenger seat': 'crumbs',
        },
        outside: {
            trunk: 'jack',
        },
    },
};
console.log(myStorage.car.inside['glove box']);
```

## 访问嵌套数组

```js
var myPets = [
    {
        animalType: 'cat',
        names: ['A', 'B', 'C'],
    },
    {
        animalType: 'dog',
        names: ['D', 'E', 'F'],
    },
];
console.log(myPets[1].names[1]);
```

## 场景：唱片收集

**不会写**

题目：一个文字对象，展示了你的音乐唱片集合。每一个唱片都有唯一的 id 数字，作为它的键，和其他几个属性。并非所有唱片拥有完整的信息。初始化：一个函数名为 `updateRecords` 的文字对象，`records`，包含音乐唱片集锦，`id`，`prop`（像 `artist` 或 `tracks`），和 `value`。使用以下规则修改函数，把对象传递给函数：

1. 你的函数必须总是返回整个记录集合对象。
2. 如果 `prop` 不是 `tracks`，`value` 非空，更新或将唱片的 `prop` 设置成 `value`。
3. 如果 `prop` 是 `tracks` 但唱片没有 `tracks` 属性，新建一个空数组，添加 `value`。
4. 如果 `prop` 是 `tracks` 且 `value` 非空，添加 `value` 到唱片存在的 `tracks` 数组最后。
5. 如果 `value` 是空字符串，从唱片中删除 `prop` 属性。

默认代码：

```js
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

:::: el-tabs

::: el-tab-pane label=我的代码

```js
function updateRecords(records, id, prop, value) {
    //var value = '';
    if (value != '') {
        return (value = records[id][prop]);
    } else if (records.hasOwnProperty('tracks') === false) {
        var myArray = [''];
        myArray.push(value);
    } else if (prop === 'tracks' && value != '') {
        records[id][prop].value;
    } else if ((value = '')) {
        delete records[id][prop];
    } else {
        return records;
    }
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
```

:::

::: el-tab-pane label=答案

```js
// way 1
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

// way 2
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
```

:::

::::

**Code Explanation**:

- First checks if `value` is a blank string. If so, then the key (`prop`) is removed from the object.
- If that first check doesn’t pass, it next checks if `prop` is equal to `tracks`. The `tracks` array is initialized if it does not exist, and then `value` is pushed into the `tracks` array. (This step uses shortcircuit evaluation)
- If both these checks fail (meaning `value` is not an empty string and `prop` is not `tracks`), then either a new key (`prop`) and value (`value`) are added to the object, or an existing key is updated if the `prop` already exists.

## 循环

### `while`

使用 `while` 进行迭代。

```js
var myArray = [];
var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//

var myArray = [];
var i = 5;
while (i > -1) {
    myArray.push(i);
    i--;
}
console.log(myArray);
```

### `for`

`for(a; b; c)`：

- `a` - 初始化语句 仅在循环开始前执行一次，它通常被用于定义和设置循环变量
- `b` - 条件语句
- `c` - 结果表达式

条件语句在每次循环迭代的开始时进行评估，并且只要评估结果为 `true`，便会继续执行。如果条件在迭代开始时为 `false`，则循环将停止执行。这意味着，如果条件开始为假，则循环将永远不会执行。

## 功能

### `typeof`

输出数据类型。
