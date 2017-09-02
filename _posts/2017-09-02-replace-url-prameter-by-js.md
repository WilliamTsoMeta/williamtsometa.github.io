---
layout : archive
excerpt: "replace url prameter by js"
header:
  overlay_image: /assets/images/sebastien-gabriel-13688.jpg
---

```js
var url  = 'www.something.com?some_parameter_name=old_parameter_value&';

var parameter_name = 'name=';
var url_regex = new RegExp(parameter_name + '[^&]+' + '&');
var old_par = url_regex.exec(url);
var = new_par = 'new_parameter_name=new_parameter_value';
url = url.replace(old_par,new_par);

// chop/slice/trim off last character(& symbol) in string for possibly  use.

var str = "12345.00";
str = str.substring(0, str.length - 1);
// but the slice syntax is much clearer
var str = "12345.00";
str = str.slice(0, -1);
```
