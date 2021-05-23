# 12 JavaScript Quirks

source: <https://2ality.com/2013/04/12quirks.html>

A core of JavaScript (the so\-called “good parts”) is elegant, but that core is often obscured by quirks. This introduction is the first of a series of blog posts that looks at twelve common quirks and how to best deal with them:

1. [Implicit conversion of values](http://2ality.com/2013/04/quirk-implicit-conversion.html)
2. [Two “non\-values” – undefined and null](http://2ality.com/2013/04/quirk-undefined.html)
3. [Normal equality (\==)](http://2ality.com/2013/04/quirk-equality.html)
4. [Unknown variable names create global variables](http://2ality.com/2013/04/quirk-automatic-globals.html)
5. [Parameter handling](http://2ality.com/2013/05/quirk-parameters.html)
6. [The scope of variables](http://2ality.com/2013/05/quirk-variable-scope.html)
7. [Inadvertent sharing of variables via closures](http://2ality.com/2013/05/quirk-closures.html)
8. [Array\-like objects](http://2ality.com/2013/05/quirk-array-like-objects.html)
9. Subtyping constructors
10. Reading and writing of properties
11. this in real functions
12. The for\-in loop

A concluding post will cover ECMAScript 6 \[1\], which will eliminate most of the above quirks.

The series will provide a good overview of JavaScript. It is a translation of a [previous blog post](http://2ality.com/2013/01/fallgruben.html) in German. ECMAScript 5 will be used and a basic knowledge of JavaScript is required, but much will be explained. I will post one quirk per week.

**Reference:**

1. [ECMAScript: ES.next versus ES 6 versus ES Harmony](http://2ality.com/2011/06/ecmascript.html)

## JavaScript quirk 1: implicit conversion of values

\[This post is part of a [series](http://2ality.com/2013/04/12quirks.html) on JavaScript quirks.\]

JavaScript is very tolerant when it comes to accepting values. For example, everywhere it expects a number, it does not reject values from other types, but tries to convert them:

    > '5' \- '2'plainplain
    3
    > '5' \* '2'
    10

Automatic conversion to boolean is rarely problematic and often useful. It is covered here as a preparation for later – we’ll use it to work around quirks. Automatic conversion to string, however, can cause problems.

### Implicit conversion to boolean: “truthy” and “falsy” values

Whenever JavaScript expects a boolean value (e.g. for the condition of an if statement), any value can be used. It will be interpreted as either true or false. The following values are interpreted as false:

- undefined, null
- Boolean: false
- Number: \-0, +0, NaN
- String: ''

All other values are considered true. Values interpreted as false are called *falsy*, values interpreted as true are called *truthy*. You can use Boolean as a function to test how a value is interpreted. It converts its argument to boolean:

    > Boolean(undefined)
    false
    > Boolean(0)
    false
    > Boolean(3)
    true

### Implicit conversion of strings

In web development, you often get values as strings that are actually numbers or booleans. For example, when users enter this kind of data in a form. If you forget to explicitly convert these strings then JavaScript will surprise you negatively in two ways: First, there will be no warning. Second, the values will be converted automatically, but wrongly. The plus operator (+), for instance, is problematic, because it concatenates strings as soon as one of its operands is a string. During the following interaction with JavaScript, the assumption is that we are adding 1 to 5. Instead, we are concatenating the strings '5' and '1'.

    > var x = '5';  // wrong assumption: x is a numberplain
    > x + 1
    '51'

Furthermore, there are a few falsy values that are truthy if converted to string. Example: false.

    > Boolean(false)  // truthy?
    false
    > String(false)
    'false'
    > Boolean('false')  // truthy?
    true

Example: undefined.

    > Boolean(undefined)  // truthy?plain
    false
    > String(undefined)
    'undefined'
    > Boolean('undefined')  // truthy?
    true

### Implicit conversion of objects

Objects are only implicitly converted if JavaScript expects a number or a string. In the former case, the conversion takes three steps:

1. Call valueOf(). If the result is primitive (not an object) then use it and convert it to a number.
2. Otherwise, call toString(). If the result is primitive, use it and convert it to a number.
3. Otherwise, throw a TypeError.

Example for step 1:

    > 3 \* { valueOf: function () { return 5 } }plainplain
    15

Example for step 3:

    > function returnObject() { return {} }
    > 3 \* { valueOf: returnObject, toString: returnObject }
    TypeError: Cannot convert object to primitive value

If JavaScript converts to string, steps 1 and 2 are swapped: toString() is tried first, valueOf() second.

### Best practice: explicit conversion

It is best to explicitly convert values to the desired types before using them. A minimal solution is to use the functions Boolean(), Number() and String():

    function handleFormData(formData) {plain
        var givenName = String(formData.givenName);
        var age = Number(formData.age);
        ...
    }

These functions always return a value (they never throw an exception). However, Number() returns the error value NaN \[1\] if it can’t convert a value:

    > Number('xyz')plain
    NaN
    > Number(undefined)
    NaN
    > Number(null)
    0
    > Number(true)
    1

A more elaborate solution would be to first check whether the value you are converting has the correct format (e.g. someone shouldn’t enter 'xyz' as their age) and to take appropriate measures if it doesn’t.

### Reference

1. [NaN and Infinity in JavaScript](http://2ality.com/2012/02/nan-infinity.html)

## JavaScript quirk 2: two “non-values” – undefined and null

Most programming languages have only one value for “no value” or “empty reference”. For example, that value is null in Java. JavaScript has two of those special values: undefined and null. They are basically the same (something that will change with ECMAScript 6, as will be explained in the last post of this series), but they are used slightly differently.

undefined is assigned via the language itself. Variables that have not been initialized yet have this value:

    > var foo;plain
    > foo
    undefined

Similarly, JavaScript assigns undefined to missing parameters:

    > function id(x) { return x }
    > id()
    undefined

null is used by programmers to explicitly indicate that a value is missing. E.g. for [JSON.stringify()](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify):

    > console.log(JSON.stringify({ first: 'Jane' }, null, 4))
    {
        "first": "Jane"
    }

### Check: does a variable have a value

If you want to know whether a variable v has a value, you normally have to check for both undefined and null. Fortunately, both values are [truthy](http://2ality.com/2013/04/quirk-implicit-conversion.html). Thus, checking for truthiness via if performs both checks at the same time:

    if (v) {plain
        // v has a value
    } else {
        // v does not have a value
    }

You’ll see more examples of the above check in the post for quirk 5 about parameter handling. There is one caveat: this check also interprets false, \-0, +0, NaN and '' as “no value”. If that isn’t what you want then you can’t use it. You have two choices.

Some people advocate lenient non\-equality (!=) to check that v is neither undefined nor null:

    if (v != null) {plainplain
        // v has a value
    } else {
        // v does not have a value
    }

However, that requires you to know that != considers null to be only equal to itself and to undefined. I prefer the more descriptive use of !==:

    if (v !== undefined && v !== null) {
        // v has a value
    } else {
        // v does not have a value
    }

[Performance\-wise](http://jsperf.com/definedness), all three checks shown in this section are more or less the same. Hence, which one you will end up using depends on your needs and your taste. Some minification tools even rewrite the last check to a check via !=. TODO: <http://2ality.com/2013/04/check\-undefined.html>

## JavaScript quirk 3: normal equality (==)

Let’s start with a simple rule: the normal equality operators \== and != are so problematic that you should always use strict equality (\=== and !==). Some people say that there are exceptions to this rule, I disagree \[2\]. Keeping this rule in mind, we can now take a look at what is strange about \==, without burdening our minds unnecessarily.

The “normal” equality operator (\==) has many quirks. While it is forgiving, it does not adhere to the typical rules of truthy and falsy (see [quirk 1](http://2ality.com/2013/04/quirk-implicit-conversion.html)):

    > 0 == false  // OKplain
    true
    > 1 == true  // OK
    true
    > 2 == true  // not OK
    false

    > '' == false  // OK
    true
    > '1' == true  // OK
    true
    > '2' == true  // not OK
    false

Apart from that, it lets you compare values that aren’t really comparable:

    > '' == 0plainplain
    true
    > '\\n  123  \\t' == 123
    true

The last check is true because conversion to number ignores leading and trailing whitespace in JavaScript.

If you are still interested in finding out how exactly \== works, you can read up on it here: \[1\]. With strict equality (\===), values of different types are never equal \[1\], which means that all of the above problems go away.

**References:**

1. [Equality in JavaScript: === versus ==](http://2ality.com/2011/06/javascript-equality.html)
2. [When is it OK to use == in JavaScript?](http://2ality.com/2011/12/strict-equality-exemptions.html)

## JavaScript quirk 4: unknown variable names create global variables

Normally, JavaScript automatically creates a global variable if you use an unknown variable name:

    > function f() { foo = 123 }plain
    > f()
    > foo
    123

Thankfully, you get a warning in ECMAScript 5 strict mode \[1\]:

    > function f() { 'use strict'; foo = 123 }
    > f()
    ReferenceError: foo is not defined

**Reference:**

1. [JavaScript’s strict mode: a summary](http://2ality.com/2011/01/javascripts-strict-mode-summary.html)

## JavaScript quirk 5: parameter handling

The basics of parameter handling in JavaScript are simple, advanced tasks require manual work. This blog post first looks at the basics and then covers advanced topics.

### The basics of parameter handling

Two facts form the core of JavaScript parameter handling.

#### Fact: you can always pass an arbitrary amount of parameters

When calling a function, you can pass as many or as few actual parameters as you want, independently of how many formal parameters are mentioned in the function declaration. Parameters that are missing have the value undefined. Parameters that are too many are ignored. Let’s use the following function for a demonstration:

    function f(x, y) {plain
        console.log('x: '+x);
        console.log('y: '+y);
    }

You can call this function with arbitrary many parameters:

    > f()plain
    x: undefined
    y: undefined

    > f('a')
    x: a
    y: undefined

    > f('a', 'b')
    x: a
    y: b

    > f('a', 'b', 'c')
    x: a
    y: b

#### Fact: all passed parameters are stored in arguments

All passed parameters are stored in the special, “Array\-like” (see below for what that means) variable arguments. The following function lets us examine how that variable works.

    function g() {plain
        console.log('Length: '+arguments.length);
        console.log('Elements: '+fromArray(arguments));
    }

Function fromArray is shown below, it converts arguments to an array so that it can be logged. Using g():

    > g()
    Length: 0
    Elements:
    > g('a')
    Length: 1
    Elements: a
    > g('a', 'b')
    Length: 2
    Elements: a,b

arguments is always there, no matter how many parameters have been explicitly declared. It always contains all actual parameters.

### Has a parameter been passed

If a caller does not provide a parameter, undefined is passed to the function. Because undefined is falsy \[1\], you can use an if statement to check whether the parameter “exists” or not:

    function hasParameter(param) {plain
        if (param) {
            return 'yes';
        } else {
            return 'no';
        }
    }

Thus, you get the same result if you omit a parameter and if you pass undefined:

    > hasParameter()plainplainplain
    'no'
    > hasParameter(undefined)
    'no'

The test works also well for truthy values:

    > hasParameter(\[ 'a', 'b' \])plain
    'yes'
    > hasParameter({ name: 'Jane' })
    'yes'
    > hasParameter('Hello')
    'yes'

With falsy values, however, you have to be careful. For example, false, zero and the empty string are interpreted as missing parameters:

    > hasParameter(false)plain
    'no'
    > hasParameter(0)
    'no'
    > hasParameter('')
    'no'

Still, this pattern has proven itself. You do have to be vigilant, but the code becomes pleasantly compact and it does not matter whether callers omit a parameter, pass undefined or pass null.

### Default values for parameters

The following function should accept zero or more parameters. Parameters x and y should have the value 0 if they are missing. A simple way of doing that is:

    function add(x, y) {
        if (!x) x = 0;
        if (!y) y = 0;
        return x + y;
    }

Interaction:

    > add()
    0
    > add(5)
    5
    > add(2, 7)
    9

You can write add() more compactly by using the “or” operator (||). This operator returns the first operand if it is truthy and otherwise the second operand. Examples:

    > 'abc' || 'def'
    'abc'
    > '' || 'def'
    'def'
    > undefined || { foo: 123 }
    { foo: 123 }
    > { foo: 123 } || 'def'
    { foo: 123 }

Let’s use || to assign parameter default values:

    function add(x, y) {
        x = x || 0;
        y = y || 0;
        return x + y;
    }

### An arbitrary number of parameters

You can also use arguments to accept an arbitrary number of parameters. One example is the following function format() that is modeled after the classic C function sprintf:

    > format('Hello %s! You have %s new message(s).', 'Jane', 5)plain
    'Hello Jane! You have 5 new message(s).'

The first argument is a pattern in which '%s' marks blanks. The following arguments are filled into those blanks. A simple implementation of format looks like this:

    function format(pattern) {
        for(var i=1; i < arguments.length; i++) {
            pattern = pattern.replace('%s', arguments\[i\]);
        }
        return pattern;
    }

Note: the loop skips the first parameter (arguments\[0\]) and thus ignores pattern.

### Enforcing a certain number of parameters

If you want to force a caller to provide a certain number of parameters, you need to check arguments.length, at runtime:

    function add(x, y) {plain
        if (arguments.length > 2) {
            throw new Error('Need at most 2 parameters');
        }
        return x + y;
    }

### arguments is not an array

arguments is not an array, it is only *array\-like*: you can access the i\-th parameter via arguments\[i\] and you can determine how many parameters there are via arguments.length. But you can’t use Arraymethods such as forEach and indexOf. Further details, along with solutions are discussed in quirk 8. As a preview, the following function converts an array\-like value to an array.

    function fromArray(arrayLikeValue) {
        return Array.prototype.slice.call(arrayLikeValue);
    }

### Reference

1. [JavaScript quirk 1: implicit conversion of values](http://2ality.com/2013/04/quirk-implicit-conversion.html) \[explains “truthy” and “falsy”\]

## JavaScript quirk 6: the scope of variables

In most programming languages, variables only exist within the block in which they have been declared. In JavaScript, they exist in the complete (innermost) surrounding function:

    function func(x) {
        console.log(tmp); // undefined
        if (x < 0) {
            var tmp = 100 \- x;  // (\*)
            ...
        }
    }

The cause of the above behavior is *hoisting*: Internally, the declaration at (\*) is moved to the beginning of the function (the assignment stays where it is). That is, what a JavaScript engine actually executes looks like this:

    function func(x) {plainplain
        var tmp;
        console.log(tmp); // undefined
        if (x < 0) {
            tmp = 100 \- x;
            ...
        }
    }

But there is a trick to limit the scope of a variable to a block, it is called *Immediately Invoked Function Expression* (IIFE, pronounced “iffy”). Below, we use an IIFE to restrict the scope of tmp to the then\-block of the if statement.

    function func(x) {
        console.log(tmp); // ReferenceError: tmp is not defined
        if (x < 0) {
            (function () {  // open IIFE
                var tmp = 100 \- x;
                ...
            }());  // close IIFE
        }
    }

We wrapped a function around the insides of the block, creating a new scope for them. Then we immediately called that function. tmp only exists inside the IIFE. Note that the parentheses at the beginning and the end of the IIFE are necessary. They lead to the function being interpreted as an expression, which is the only form in which it can be be immediately invoked.

## JavaScript quirk 7: inadvertent sharing of variables via closures

Closures are a powerful JavaScript feature: If a function leaves the place where it was created, it still has access to all variables that existed at that place. This blog post explains how closures work and why one has to be careful w.r.t. inadvertent sharing of variables.

### Closures

Let’s start with an example of a closure:

    function incrementorFactory(start, step) {
        return function () {  // (\*)
            start += step;
            return start;
        }
    }

This is how you use incrementorFactory:

    > var inc = incrementorFactory(20, 2);
    > inc()
    22
    > inc()
    24

During all of its lifetime, the inner function (\*) has access to the variables start and step of the outer function incrementorFactory. Thus, incrementorFactory returns not only the function, but somehow attaches the variables start and step. The data structure in which both variables are stored is called an environment. An environment is very similar to an object – it maps names to values. The function that is returned above contains a reference to the environment that was active at its birth, its *outer environment*. The combination function + environment is called a *closure*. The name stems from the fact that an environment “closes over” a function: It provides values for variables that were declared outside the function (so\-called *free variables*).

When a function f is invoked, a new environment is created for its parameters and local variables. There is always a chain of environments:

- f’s environment
- f’s outer environment
- The outer environment of f’s outer environment
- ...
- The environment for global variables (the *global environment*)

When looking up the value of a variable, the complete chain is searched, starting with f’s environment.

### The quirk: inadvertent sharing

Closures don’t get snapshots of a certain point in time, they get “live” variables. The following is an example where that causes a problem.

    var result = \[\];
    for (var i=0; i < 5; i++) {
        result.push(function () { return i });  // (\*)
    }
    console.log(result\[3\]()); // 5 (not 3)

When a function is created in line (\*), the variable i has a certain value. You might expect that function to always return that value. Instead, the connection to the “live” i is never broken. That is, all functions in the array resultshare the same i, via their outer environment. And after the loop is finished, i has the value 5.

One possible fix is to copy the current value of i via an IIFE \[1\]:

    for (var i=0; i < 5; i++) {
        (function (i2) {  // snaphot of i
            result.push(function () { return i2 });
        }(i));
    }

You can also use [bind()](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind), with a similar effect:

    for (var i=0; i < 5; i++) {plain
        result.push(function (i2) { return i2 }.bind(null, i));
    }

Another possibility is using forEach and the [range()](http://underscorejs.org/#range) function of the Underscore.js library:

    \_.range(5).forEach(function (i) {
        result.push(function () { return i });
    });

The above works, because forEach creates a new variable i, each time it calls its argument.

#### A practical example

Let’s conclude with a more practical example. Two days ago, I implemented a user interface for the game [Connect Four](http://en.wikipedia.org/wiki/Connect_Four), as a demonstration of the DOM. It contained the following code snippet, which adds event listeners to links above the columns of the board.

    for(var col=0; col < board4.DIM\_X; col++) {plain
        document.getElementById('columnClick'+col)
                .addEventListener('click', function (col) {
                    currentState.columnClick(col);
                    event.preventDefault();
                }.bind(null, col));
    }

An alternative is to use CSS classes instead of IDs and rewrite the above code:

    Array.prototype.forEach.call(plain
        document.getElementsByClassName('columnClick'),
        function (elem, col) {  // (\*)
            elem.addEventListener('click', function () {
                currentState.columnClick(col);
                event.preventDefault();
            });
        });

Again, each invocation of the function (\*) creates a new variable col and no inadvertent sharing occurs.

The last post in this series will explain how ECMAScript 6 helps with the problem of inadvertent sharing.

### Reference

1. [JavaScript quirk 6: the scope of variables](http://2ality.com/2013/05/quirk-variable-scope.html)

## JavaScript quirk 8: array-like objects

Some objects in JavaScript look like arrays, but aren’t. They are called *array\-like*. This blog post looks at what exactly that means and how to best work with those objects.

### Array\-like objects

An array\-like object

- has: indexed access to elements and the property length that tells us how many elements the object has.
- does not have: array methods such as push, forEach and indexOf.

Two examples of array\-like objects is the result of the DOM method document.getElementsByClassName() (many DOM methods return array\-like objects) and the special variable arguments \[1\]. You can determine the number of arguments via

    arguments.lengthplain

And you can access a single argument, e.g. read the first argument:

    arguments\[0\]plain

Array methods, however, have to be borrowed. You can do that, because most of those methods are *generic*.

### Generic methods

A generic method does not require this to be an array, it only requires this to have length and indexed element access. Normally, you invoke a method m on an array arr as follows.

    arr.m(arg0, arg1, ...)plainplain

All functions have a method call that allows you to perform the above invocation differently:

    Array.prototype.m.call(arr, arg0, arg1, ...)

The first argument of call is the value for this that m receives (in this case, arr). Because we access m directly and not via arr, we can now hand any this to that method. For example, arguments:

    Array.prototype.m.call(arguments, arg0, arg1, ...)

#### Examples

Let’s continue with a concrete example. The following function printArgs logs all arguments that it receives.

    function printArgs() {
        Array.prototype.forEach.call(arguments,
            function (arg, i) {
                console.log(i+'. '+arg);
            });
    }

We have used method forEach generically. printArgs in use:

    > printArgs()plainplain
    > printArgs('a')
    0. a
    > printArgs('a', 'b')
    0. a
    1. b

You can even apply generic methods to ordinary objects:

    > var obj = {};plainplain
    > Array.prototype.push.call(obj, 'a');
    1
    > obj
    { '0': 'a', length: 1 }

In the above case, property length did not exist and was automatically created, with the initial value zero.

#### Converting an array\-like object to an array

Sometimes the best way to work with an array\-like object is to convert it to an array. That can also be done via a generic method:

    Array.prototype.slice.call(arguments)

Compare: to create a copy of an array arr, you make the method call

    arr.slice()

### Reference

1. [JavaScript quirk 5: parameter handling](http://2ality.com/2013/05/quirk-parameters.html)
