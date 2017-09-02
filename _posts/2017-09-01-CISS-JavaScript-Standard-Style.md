---
layout : single
excerpt: ""
author_profile: true
read_time: true
comments: true
share: true
related: true
tags:
  - CSS
  - JS
  - HTML
---


# JavaScript Standard Style

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

This is a TL;DR of the [standard](https://github.com/feross/standard) JavaScript
rules.

The best way to learn about `standard` is to just install it and give it a try on
your code.

这是 JavaScript standard 代码规范的全文。

掌握本规范的最好方法是安装并在自己的代码中使用它。

## Rules 细则

* **Use 2 spaces** for indentation. 使用两个空格进行缩进。

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **Use single quotes for strings** except to avoid escaping. 除需要转义的情况外，字符串统一使用单引号。

  ```js
  console.log('hello there')
  $("<div class='box'>")
  ```

* **No unused variables.不要定义未使用的变量。**

  ```js
  function myFunction () {
    var result = something()   // ✗ avoid
  }
  ```

* **Add a space after keywords.关键字后面加空格。**

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ avoid
  ```

* **Add a space before a function declaration's parentheses.函数声明时括号与函数名间加空格。**

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ avoid

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ avoid
  ```

* **Always use** `===` instead of `==`.<br>
  Exception: `obj == null` is allowed to check for `null || undefined`.  
  始终使用 === 替代 ==。
例外： obj == null 可以用来检查 null || undefined。

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ avoid
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ avoid
  ```

* **Infix operators** must be spaced.  
字符串拼接操作符 (Infix operators) 之间要留空格。

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ avoid
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **Commas should have a space** after them.  
逗号后面加空格。

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ avoid
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **Keep else statements** on the same line as their curly braces.  
else 关键字要与花括号保持在同一行。

  ```js
  // ✓ ok
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ avoid
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **For multi-line if statements,** use curly braces.  
多行 if 语句的的括号不能省。

  ```js
  // ✓ ok
  if (options.quiet !== true) console.log('done')
  ```

  ```js
  // ✓ ok
  if (options.quiet !== true) {
    console.log('done')
  }
  ```

  ```js
  // ✗ avoid
  if (options.quiet !== true)
    console.log('done')
  ```

* **Always handle the** `err` function parameter.  
不要丢掉异常处理中err参数。
  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ avoid
  run(function (err) {
    window.alert('done')
  })
  ```

* **Declare browser globals** with a `/* global */` comment.<br>
  Exceptions are: `window`, `document` and `navigator`.<br>
  Prevents accidental use of poorly-named browser globals like `open`, `length`,
  `event`, and `name`.  
  声明全局对象时用/* global */注释。  
  `window`, `document` and `navigator`除外。  
  不使用名称不正确的浏览器全局对象，`open`, `length`,
  `event`, and `name`.
  如下所示：  

  ```js
  /* global alert, prompt */

  alert('hi')
  prompt('ok?')
  ```

  Explicitly referencing the function or property on `window` is okay too, though
  such code will not run in a Worker which uses `self` instead of `window`.  
  使用浏览器全局变量时加上 window. 前缀。如果代码不在浏览器中工作则用self 代替。
  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Multiple blank lines not allowed.不允许有连续多行空行。**


  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ avoid
  var value = 'hello world'


  console.log(value)
  ```

* **For the ternary operator** in a multi-line setting, place `?` and `:` on their own lines.  
  对于三元运算符 ? 和 : 与他们所负责的代码处于同一行

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ avoid
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **For var declarations,** write each declaration in its own statement.  
每个 var 关键字单独声明一个变量。

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ avoid
  var silent = true, verbose = true

  // ✗ avoid
  var silent = true,
      verbose = true
  ```

* **Wrap conditional assignments** with additional parentheses. This makes it clear that the expression is intentionally an assignment (`=`) rather than a typo for equality (`===`).  
条件语句中赋值语句使用括号包起来。这样使得代码更加清晰可读，而不会认为是将条件判断语句的全等号（===）错写成了等号（=）。

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ avoid
  while (m = text.match(expr)) {
    // ...
  }
  ```

  单行代码块两边加空格。

  eslint: block-spacing

    function foo () {return true}    // ✗ avoid
    function foo () { return true }  // ✓ ok

*
## Semicolons

* No semicolons. (see: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))
不要使用分号
  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ avoid
  ```

* Never start a line with `(`, `[`, or `` ` ``. This is the only gotcha with omitting semicolons, and standard protects you from this potential issue.
不使用分号的项目中，不要以`(`, `[`, or `` ` `` 开头。而用分号开头
  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ avoid
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ avoid
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ avoid
  `hello`.indexOf('o')
  ```

  Note: If you're often writing code like this, you may be trying to be too clever.

  Clever short-hands are discouraged, in favor of clear and readable expressions, whenever
  possible.
  不鼓励使用短遍历因为会削弱可读性

  Instead of this:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  This is much preferred:
  这种遍历方式更值得鼓励。

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## Helpful reading 拓展阅读

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### And a helpful video:一个值得观看的视频：

- [Are Semicolons Necessary in JavaScript? - YouTube][3]
JavaScript 中的分号多余吗？- YouTube

All popular code minifiers in use today use AST-based minification, so they can
handle semicolon-less JavaScript with no issues (since semicolons are not required
in JavaScript).

##### Excerpt from *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:

[Relying on automatic semicolon insertion] is quite safe, and perfectly valid JS that every browser understands. Closure compiler, yuicompressor, packer, and jsmin all can properly minify it. There is no performance impact anywhere.

I am sorry that, instead of educating you, the leaders in this language community have given you lies and fear.  That was shameful. I recommend learning how statements in JS are actually terminated (and in which cases they are not terminated), so that you can write code that you find beautiful.

In general, `\n` ends a statement unless:
  1. The statement has an unclosed paren, array literal, or object literal or ends in some
     other way that is not a valid way to end a statement. (For instance, ending with `.`
     or `,`.)
  2. The line is `--` or `++` (in which case it will decrement/increment the next token.)
  3. It is a `for()`, `while()`, `do`, `if()`, or `else`, and there is no `{`
  4. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other
     binary operator that can only be found between two tokens in a single expression.

The first is pretty obvious. Even JSLint is ok with `\n` chars in JSON and parenthesized constructs, and with `var` statements that span multiple lines ending in `,`.

The second is super weird. I’ve never seen a case (outside of these sorts of conversations) where you’d want to do write `i\n++\nj`, but, point of fact, that’s parsed as `i; ++j`, not `i++; j`.

The third is well understood, if generally despised. `if (x)\ny()` is equivalent to `if (x) { y() }`. The construct doesn’t end until it reaches either a block, or a statement.

`;` is a valid JavaScript statement, so `if(x);` is equivalent to `if(x){}` or, “If x, do nothing.” This is more commonly applied to loops where the loop check also is the update function. Unusual, but not unheard of.

The fourth is generally the fud-inducing “oh noes, you need semicolons!” case. But, as it turns out, it’s quite easy to *prefix* those lines with semicolons if you don’t mean them to be continuations of the previous line. For example, instead of this:
当前主流的代码压缩方案都是基于词法（AST-based）进行的，所以在处理无分号的代码时完全没有压力（何况 JavaScript 中分号本来就不是强制的）。

一段摘抄自 "An Open Letter to JavaScript Leaders Regarding Semicolons" 这篇文章的内容：

[自动化插入分号的做法]是安全可依赖的，而且其产出的代码能够在所有浏览器里很好地运行。 Closure compiler, yuicompressor, packer 还有 jsmin 都能正确地对这样的代码进行压缩处理。并没有任何性能相关的问题。

不得不说，Javascript 社区里的大牛们一直是错误的，并不能教给你最佳实践。真是让人忧伤啊。 我建议先弄清楚 JS 是怎样断句的（还有就是哪些地方看起来断了其实并没有），明白了这个后就可以随心写出漂亮的代码了。

一般来说， \n 表示语句结束，除非：

该语句有未闭合的括号， 数组字面量， 对象字面量 或者其他不能正常结束一条语句的情况（譬如，以 . 或 , 结尾）
该语句是 -- 或者 ++ （它会将后面的内容进行自增或减）
该语句是 for()，while()，do，if() 或者 else 并且没有 {
下一行以 [，(，+，*，/，-，,，. 或者其他只会单独出现在两块内容间的二元操作符。
第一条很容易理解。即使在 JSLint 中，也允许 JSON，构造器的括号中，以及使用 var 配合 , 结尾来声明多个变量等这些情中包含 \n。

第二条有点奇葩。 我还想不出谁会（除了这里用作讨论外）写出 i\n++\nj 这样的代码来，不过，顺便说一下，这种写法最后解析的结果是 i; ++j，而不是 i++; j。

第三条也容易理解。 if (x)\ny() 等价于 if (x) { y() }。解释器会向下寻找到代码块或一条语句为止。

; 是条合法的 JavaScript 语句。所以 if(x); 等价于 if(x){}，表示 “如果 x 为真，什么也不做。” 这种写法在循环里面可以看到，就是当条件判断与条件更新是同一个方法的时候。 不常见，但也不至于没听说过吧。

第四条就是常见的 “看，说过要加分号！” 的情形。但这些情况可以通过在语句前面加上分号来解决，如果你确定该语句跟前面的没关系的话。举个例子，假如你想这样：
```js
foo();
[1,2,3].forEach(bar);
```

you could do this:  
那么完全可以这样来写：
```js
foo()
;[1,2,3].forEach(bar)
```

The advantage is that the prefixes are easier to notice, once you are accustomed to never seeing lines starting with `(` or `[` without semis.  
后者的好处是分号比较瞩目，一旦习惯后便再也不会看到以 ( 和 [ 开头又不带分号的语句了。

*End quote from "An Open Letter to JavaScript Leaders Regarding Semicolons".*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
