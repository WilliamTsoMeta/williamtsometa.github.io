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

# React Style Guide

# jQuery

* __In general, avoid using jQuery within React components.__
* __Never use jQuery in a component for DOM manipulation.__
* __Performing ajax with jQuery in your component is fine.__
* __If you're using a jQuery plugin, consider encapsulating the use of the plugin in its own component so that you only have to manage it in a single place.__


* __尽量避免在React组件中使用jQuery。__
* __绝不在组件中使用jQuery进行DOM操作。__
* __执行 ajax与jQuery在你的组件是允许的.__
* __如果您正在使用jQuery插件，请考虑将插件的使用封装在自己的组件中，以便只需在单个位置进行管理。__

#### Sources
Based on the styles recommended from:    
__根据以下推荐的风格编辑：__
1. https://github.com/Khan/style-guides/blob/master/style/react.md
2. https://reactjsnews.com/react-style-guide-patterns-i-like/
3. [React.js Training](https://reactjs-training.com/) by [Ryan Florence](https://twitter.com/ryanflorence) and [Michael Jackson](https://twitter.com/mjackson)


# Classes

* Component class names should always begin with an upper case character. React expects elements starting with a lower case character to be built-in HTML elements and will throw an error if your component starts with one.  
__组件类名应始终以大写字母开头。
React希望以小写字符开头的元素是内置的HTML元素，如果您的组件以一个小写字母开头，则会抛出错误。__

    ```js
    // Bad
    var myComponent = React.createClass({ /* ... */ });

    // Good
    var MyComponent = React.createClass({ /* ... */ });
    ```

* Members should be in the following order:
    1. Lifecycle methods in order of occurrence
    2. Implementation methods
    3. `render`


* __定义方法的顺序如下__
  1. __constructor__
  2. __内置生命周期方法__
  3. __自定义方法__
  4. __`render`__

    ```js
    const Foo = React.createClass({                
        componentWillMount: function () {},
        componentWillUnmount: function () {},
        _handleButtonClick: function () {},
        _myMethod: function () {},
        render: function () {}
    });
    ```

* The `render` method should always be last - this way you can easily find it by scrolling to the bottom of the file.  
* __`render`方法应该是最后一个 - 这样你可以通过滚动到文件的底部轻松的找到它。__

* Prefix custom methods and event handlers with an underscore.
* __使用下划线修饰自定义方法和事件处理程序。__
`_handleButtonClick: function () {},`

* Event handlers should be named `_handle{EventName}`. Props that pass event handlers should be named `on{EventName}`.
* __自定义事件处理程序应该被命名为`_handle{EventName}`。 传递事件处理程序的 props 应该命名为“on{EventName}”。例如：__

    ```js
    _handleButtonClick: function (e) { /* ... */ }
    ```

    ```js
    <Foo onButtonClick={this._handleButtonClick} />
    ```

* The element returned by the `render` method should have a `className` matching the name of the component (or otherwise identifying the component). This is useful for "namespacing" any CSS/LESS that go with the component. For example:
* __`render`方法返回的元素应该有一个`类名`匹配组件的名称（或以其他方式标识组件）。 对任何使用CSS/LESS“命名空间”的组件是有用的。 例如：__

    ```js
    // Foobar.js
    import React from 'react';
    import 'Foobar.less';

    const Foobar = React.createClass({
        render: function () {
            return <div className="foobar">
                Foobar
            </div>;
        }
    });

    export default Foobar;
    ```

    ```less
    // Foobar.less
    .foobar {
        // Rules defined here will only apply to Foobar elements
    }
    ```

# JSX

* Align props when you can't fit them all on a single line. The ending ">" of the opening tag should go on its own line. This makes it clearly visible where the opening tag ends and the element's children begin.
* __当您无法将其全部放在一行上时，将props对齐。 开始标签的结尾“>”应该另起一行。 以便分辨开始标签和子元素。__
    ```js
    // Bad
    <div className="foo-container"
        data-bar="some value">
        { /* ... */ }
    </div>

    // Good
    <div className="foo-container" data-bar="some value">
        { /* ... */ }
    </div>

    // Good
    <div
        className="foo-container"
        data-bar="some value"
    >
        { /* ... */ }
    </div>
    ```

* Open elements that span multiple lines on the same line. This conserves space because it requires one fewer tab and also saves a couple of lines.
* __打开同一行上跨多行的元素。 这节省了空间，因为它需要更少的缩进。__
    ```js
    // OK...
    var multilineJsx = (
        <div>
            { /* ... */ }
        </div>
    );

    // Better
    var multilineJsx = <div>
        { /* ... */ }
    </div>;

    // Better
    var multilineJsx = <div
        className="really very long class"
        id="reallyReallyReallyLongId"
        data-foo="some important value"
    >
        { /* ... */ }
    </div>;
    ```

* Variables holding a JSX object can stay on one line if it is short enough.
* __变量可以保持JSX元素在一行内。__

    ```js
    var singleLineJsx = <h1>My header</h1>;
    ```

* When rendering a list of components from an array, do it inline if it makes sense. If the map function is too long or complicated, consider extracting it out into its own method on the component class.
* __当从数组中渲染列表时将其内联。 如果 map 函数太长或复杂，请考虑将其提取为独立组件。__

    ```js
    <ul>
        {items.map(function (item, i) {
            return <li key={i}>{item}</li>;
        )}
    </ul>;

    // or with ES6

    <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>;
    ```
