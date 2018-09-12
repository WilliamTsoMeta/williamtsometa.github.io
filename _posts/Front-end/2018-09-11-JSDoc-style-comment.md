# JSDoc
JSDoc用于所有类，字段和方法。

## 7.1一般表格

**JSDoc块的基本格式如下例所示：**

```js
/ **
 * 这里写了多行JSDoc文本，
 * 正常包裹。
 * @param {number} arg要做某事的数字。
 * /

function doSomething（arg）{...}
```
单行示例：

```js
/ ** @const @private {！Foo}一小段JSDoc。 * /
this.foo_ = foo;
```
如果单行注释溢出到多行，则必须在自己的行上使用带有/ ** 和 * /的多行样式。

JSDoc从注释中提取信息以执行代码验证和优化。因此，这些注释必须有良好的格式。

## 7.2 Markdown

JSDoc是用Markdown编写的，尽管它可能在必要时包含HTML。

请注意，自动提取JSDoc的工具（例如JsDossier）通常会忽略纯文本格式，因此如果您这样写：
```js
/**
 * Computes weight based on three factors:
 *   items sent
 *   items received
 *   last timestamp
 */
```

它会像这样出现：

```
Computes weight based on three factors: items sent items received last timestamp
```

根据三个因素计算权重：项目发送的项目是上次收到的时间戳
相反，写一个Markdown列表：

```
/ **
 *根据三个因素计算重量：
 * - 发送的项目
 * - 收到的物品
 * - 上次时间戳
 * /
```

## 7.3 JSDoc标签

Google风格允许使用JSDoc标记的子集。有关完整列表，请参见9.1 JSDoc标记参考。大多数标签必须占据自己的行，标签位于行的开头。

非法：
```js
/ **
 * “param”标记必须占用自己的行。
 * @param {number}离开@param {number}吧
 * /
```

function add(left, right) { ... }

不需要任何附加数据的简单标签（例如@ private，@ const，@ final，@ export）可以合并到同一行，并在适当时与可选类型组合。

/ **
 *放置更复杂的注释（如“工具”和“模板”）在他们自己的行上.
 *多个简单标签( "export" and "final") 可以合并为一行。
 * @export @final
 * @implements {Iterable <TYPE>}
 * @template TYPE
 * /

```js
class MyClass {
  /**
   * @param {!ObjType} obj Some object.
   * @param {number=} num An optional number.
   */
  constructor(obj, num = 42) {
    /** @private @const {!Array<!ObjType|number>} */
    this.data_ = [obj, num];
  }
}
```

何时组合标签或以何种顺序组合标签没有硬性规则。

## 7.4换行
换行块标记缩进四个空格。包装的描述文本可以与前面的行描述对齐，但不鼓励这种水平对齐。

```js
/**
 * Illustrates line wrapping for long param/return descriptions.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */
exports.method = function(foo) {
  return 5;
};
```

包裹@fileoverview描述时不要缩进。

## 7.5顶级/文件级注释

文件可能具有顶级文件概述。版权声明，作者信息和默认可见性级别。当文件由多个类定义组成时，通常建议使用文件概述。顶级评论旨在为不熟悉代码的读者做出说明。如果存在，它可以提供文件内容的描述以及任何依赖性或兼容性信息。行不缩进。

例：
```js
/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @package
 */
```

## 7.6类注释
Classes, interfaces and records must be documented with a description and any template parameters, implemented interfaces, visibility, or other appropriate tags.

类描述应该为读者提供足够的信息，以了解如何以及何时使用该类，以及正确使用该类所需的任何其他注意事项。构造函数可能省略了文本描述。 @constructor和@extends注释不与class关键字一起使用，除非该类用于声明@interface或扩展泛型类。

```js
/**
 * A fancier event target that does cool things.
 * @implements {Iterable<string>}
 */
class MyFancyTarget extends EventTarget {
  /**
   * @param {string} arg1 An argument that makes this more interesting.
   * @param {!Array<number>} arg2 List of numbers to be processed.
   */
  constructor(arg1, arg2) {
    // ...
  }
};

/**
 * Records are also helpful.
 * @extends {Iterator<TYPE>}
 * @record
 * @template TYPE
 */
class Listable {
  /** @return {TYPE} The next item in line to be returned. */
  next() {}
}
```

## 7.8方法和功能注释

必须记录参数和返回类型。必要时应记录此类型。如果方法，参数和返回描述（但不是类型）从方法的其余部分JSDoc或其签名中显而易见，则可以省略它们。方法描述应以用第三人称声明语音写的句子开头。如果方法覆盖超类方法，则它必须包含@override注释。如果任何类型被细化，则重写方法必须包括所有@param和@return注释，但如果类型完全相同则应省略它们。

```js
/** This is a class. */
class SomeClass extends SomeBaseClass {
  /**
   * Operates on an instance of MyClass and returns something.
   * @param {!MyClass} obj An object that for some reason needs detailed
   *     explanation that spans multiple lines.
   * @param {!OtherClass} obviousOtherClass
   * @return {boolean} Whether something occurred.
   */
  someMethod(obj, obviousOtherClass) { ... }

  /** @override */
  overriddenMethod(param) { ... }
}

/**
 * Demonstrates how top-level functions follow the same rules.  This one
 * makes an array.
 * @param {TYPE} arg
 * @return {!Array<TYPE>}
 * @template TYPE
 */
function makeArray(arg) { ... }
```

匿名函数不需要JSDoc，但如果自动类型推断不足，则可以内联指定参数类型。
```js

promise.then(
    (/** !Array<number|string> */ items) => {
      doSomethingWith(items);
      return /** @type {string} */ (items[0]);
    });

```

## 7.9 属性注释

**必须说明属性类型。** 如果名称和类型提供了足够的文档来理解代码，则可以省略私有属性的描述。

公共导出的常量与属性的注释方式相同。对于具有明显已知类型的表达式初始化的@const属性，可以省略显式类型。

提示：如果@const属性的类型是直接从具有声明类型的构造函数参数赋值的，或者直接来自具有声明的返回类型的函数调用，则可以将其视为“明显已知”。从更复杂的表达式分配的非const属性和属性应该明确声明它们的类型。

```js

/** My class. */
class MyClass {
  /** @param {string=} someString */
  constructor(someString = 'default string') {
    /** @private @const */
    this.someString_ = someString;

    /** @private @const {!OtherType} */
    this.someOtherThing_ = functionThatReturnsAThing();

    /**
     * Maximum number of things per pane.
     * @type {number}
     */
    this.someProperty = 4;
  }
}

/**
 * The number of times we'll try before giving up.
 * @const
 */
MyClass.RETRY_COUNT = 33;

```

## 7.10输入注释

类型注释可在@ param，@ return，@ this和@type标签上找到，也可选择在@ const，@ export和任何可见性标签上找到。附加到JSDoc标记的类型注释必须始终用大括号括起来。

### 7.10.1可空性
类型系统定义修饰符！和？对于非null和可空，分别为。

**原始类型（undefined，string，number，boolean，symbol和function（...）：...）和记录对象（{foo：string，bar：number}）默认为非空类型。不要添加  “！”。**

默认情况下，对象类型（Array，Element，MyClass等）可以为空，但不能立即与@typedef'd的名称区分为非null-by-default类型。因此，**除了原始类型和记录文字之外的所有类型都必须使用 “？”** 明确注释？要么 ！表明它们是否可以为空。

### 7.10.2类型转换

在类型检查不能准确推断表达式类型的情况下，可以通过添加类型注释注释并将表达式括在括号中来注明类型。请注意，括号是必需的。

```js
/ ** @type {number} * /（x）
```

### 7.10.3模板参数类型

始终指定模板参数。这样编译器可以做得更好，它使读者更容易理解代码的作用。

坏实例：
```js
const /** !Object */ users = {};
const /** !Array */ books = [];
const /** !Promise */ response = ...;
```

好示例：

```js
const /** !Object<string, !User> */ users = {};
const /** !Array<string> */ books = [];
const /** !Promise<!Response> */ response = ...;

const /** !Promise<undefined> */ thisPromiseReturnsNothingButParameterIsStillUseful = ...;
const /** !Object<string, *> */ mapOfEverything = {};
```

Cases when template parameters should not be used:

Object is used for type hierarchy and not as map-like structure.

## 7.11可见性注释

可见性注释（@private，@ package，@ protected）可以在@fileoverview块中指定，也可以在任何导出的符号或属性上指定。 不要指定局部变量的可见性，无论是在函数内还是在模块的顶层。 所有@private名称必须以下划线结尾。
