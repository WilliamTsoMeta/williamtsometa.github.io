### Doctype

Always use the minimal, versionless doctype.
```html
<!doctype html>
```

### Encoding

Always define the character encoding. The encoding should be defined as early as possible. Make sure your editor uses UTF-8 as character encoding, without a byte order mark (UTF-8, no BOM). Do not specify the encoding of style sheets as these assume UTF-8.
```html
<meta charset="utf-8">
```
More on encodings and when and how to specify them can be found in Handling character encodings in HTML and CSS

### Capitalisation

All html should be lowercase; element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings). Additionally, there is no need to use CDATA to escape inline JavaScript, formerly a requirement to meet XML strictness in XHTML.

所有html应该是小写的;元素名称，属性，属性值（除非是文本/ CDATA），CSS选择器，属性和属性值（字符串除外）。此外，不需要使用CDATA来转义内联JavaScript，以前是在XHTML中满足XML严格性的要求。
```html
<!-- Good -->
<img src="CISS.png" alt="CISS">

<!-- Bad -->
<A HREF="/">Home</A>
<!-- Good -->
a {
    color: #a3a3a3;
}

<!-- Bad -->
a {
    color: #A3A3A3;
}
```

### Protocol

Omit the protocol portion (http:, https:) from URLs pointing to images and other media files, style sheets, and scripts unless they are not available over both protocols.

This prevents mixed content issues and results in minor file size savings.

__指向图像和其他媒体文件，样式表和脚本的URL中省略协议部分（http :, https :)，除非这两个协议都不可用__

这可以防止混合内容问题，从而节省较小的文件大小。
```html
<!-- Good -->
<link rel="stylesheet" href="//CISS.org/css/main.css">

<!-- Bad -->
<link rel="stylesheet" href="http://CISS.org/css/main.css">
Elements and Attributes
```

Always include html, head, and body tags.

Type attributes

Do not use type or attributes for style sheets (unless not using CSS) and scripts (unless not using JavaScript).

不要使用样式表的类型或属性（除非不使用CSS）和脚本（除非不使用JavaScript）。
```html
<!-- Good -->
<link rel="stylesheet" href="//CISS.org/css/main.css">

<!-- Bad -->
<link rel="stylesheet" href="//CISS.org/css/main.css" type="text/css">
```

Language attributes
Do not use language attributes on script tags.
不要在script标签上使用语言属性。
```html
<!-- Good -->
<script href="//code.jquery.com/jquery-latest.js">

<!-- Bad -->
<script href="//code.jquery.com/jquery-latest.js" language="javascript">
```

Attributes

Attribute values should be quoted using double ("") quotes. Optional attributes should be omitted.  
应使用双引号（“”）引用属性值。可选属性应该省略

```html
<!-- Good -->
<script src="//code.jquery.com/jquery-latest.js"></script>
<!-- Bad -->
<script src='//code.jquery.com/jquery-latest.js'></script>
Use attribute/value pairs for boolean attributes

<!-- Good -->
<input type="checkbox" value="on" checked="checked">
<!-- Bad -->
<input type="checkbox" value="on" checked>
```

HTML attributes should be listed in an order that reflects the fact that class names are the primary interface through which CSS and JavaScript select elements.
按如下顺序书写属性
class
id
data-*
Everything else

```html
<!-- Good -->
<a class="[some-value]" id="[some-value]" data-name="[some-value]" href="[some-value]">Text</a>
<!-- Bad -->
<a href="[some-value]" class="[some-value]" id="[some-value]" data-name="[some-value]">Text</a>
```

Elements with multiple attributes can have attributes arranged across multiple lines in an effort to improve readability and produce more useful diffs:
具有多个属性的元素可以跨多行排列属性，以提高可读性：
```html
<a class="[some-value]"
 data-action="[some-value]"
 data-id="[some-value]"
 href="[some-value]">
    <span>Text</span>
</a>
```

Elements

Optional closing tags may not be omitted.
所有标签必须关闭
```html
<!-- Good -->
<p>The quick brown fox jumps over the lazy dog.</p>
<!-- Bad -->
<p>The quick brown fox jumps over the lazy dog.
Self-closing (void) elements should not be closed. Trailing forward slashes and spaces should be omitted.

<!-- Good -->
<img src="//images/logo.png" alt="">
<!-- Bad -->
<img src="//images/logo.png" alt="" />
```

Formatting

Use a new line for every block, list, or table element, and indent every such child element.
对每个块，列表或表格元素使用新行，并缩进每个这样的子元素。

```html
<!-- Good -->
<div>
	<ul>
	  <li>Home</li>
	  <li>Blog</li>
	</ul>
</div>

<!-- Bad -->
<div><ul>
  <li>Home</li>
  <li>Blog</li>
</ul></div>
```

使用2行空行分隔html块，消除末尾空隔
```html
<blockquote>
    <p><em>Space</em>, the final frontier.</p>
</blockquote>


<ul>
    <li>Moe</li>
    <li>Larry</li>
    <li>Curly</li>
</ul>


<table>
    <thead>
        <tr>
            <th scope="col">Income</th>
            <th scope="col">Taxes</th>
        </tr>
    <tbody>
    <tr>
        <td>$ 5.00</td>
        <td>$ 4.50</td>
    </tr>
</table>
```

Indentation

Don't indent inside html, body, script, or style. Indent inside head and all other elements. Indent by four spaces at a time. Don’t use tabs or mix tabs and spaces for indentation.

不要在html，body，script或style中缩进。缩进头部和所有其他元素。一次缩进四个空格。不要使用tab或混合标签和空格进行缩进。
```html
<!-- Good -->
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Sample Page</title>

    <link rel="stylesheet" href="/style.css">
    <style>
    body {
        font-size: 100em;
    }
    </style>

    <script src="/jquery.js"></script>
    <script>
    $(function() {
        $( "p" ).text( $.fn.jquery );
    });
    </script>
</head>
<body>

<p>CISS! is awesome!<p>

</body>
</html>
```
Trailing Whitespace

Remove trailing white spaces. Trailing white spaces are unnecessary and can complicate diffs.
删除尾随的空格。
```html
<!-- Good -->
<p>Yes please.</p>

<!-- Bad -->
<p>No, thank you. </p>
```

Inline CSS

Inline CSS must be avoided. When altering states using JavaScript, use CSS to define your states, and only use on obtrusive JavaScript to alter class names whenever possible.

必须避免内联CSS。当使用JavaScript更改状态时，请使用CSS来定义您的状态。
React 除外。

```html
<!-- Good -->
<a class="is-link-disabled" href="//index.php">Home</a>

<!-- Bad -->
<a href="//index.php" style="text-decoration: line-through;">Home</a>
```


Style Attributes

You should not use border, align, valign, or clear attributes. Avoid use of style attributes, except where using syndicated content or internal syndicating systems.

Semantics

Use HTML according to its purpose. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.
使用合适的语义标签，根据目的使用HTML。

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.
根据其目的使用HTML对于可访问性，重用和代码效率很重要。

```html
<!-- Good -->
<a href="subscriptions/">View subscriptions</a>

<!-- Bad -->
<div onclick="goToSubscriptions();">View subscriptions</div>
```
Markup

Image Tags

Image elements () must have an alt attribute. Height and width attributes are optional and may be omitted.
Image elements（）必须具有alt属性。高度和宽度属性是可选的，可以省略。

Comments
在标签结尾标明对应的开始标签
```html
<div class="parent">

    <div class="child">
    </div><!-- /child -->

</div><!-- /parent -->
```
Mark todos

Highlight todos by using the keyword TODO, eg:
使用 TODO标明代办办事件
```html
<!-- TODO: add active item class -->
<ul>
  <li>Home</li>
  <li>Blog</li>
</ul>
```
Adding line breaks

Always use <br /> instead of <br> and <br/>
始终使用<br /> 而不是<br> 或 <br/>
