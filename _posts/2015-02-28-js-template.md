---  
layout: post  
title: 简单使用js模板引擎
category: blog  
description: 以前很少使用模板，都是使用字符串来实现的。后来重构一个js写的组件时，尝试了一下js的模板，代码清晰多了。
tag: js 模板
keywords: js,模板   
updateData:  9:44 2015/2/28
---  

## 前言的前言

这篇文章的目的是记录一下我使用的js模板引擎以及简单语法。  


## 前言

之前后台开发较多，对于前台只是简单的写点网页代码，所以没有接触到模板引擎这个东西。  
后来，要做一个可拖拽的自定义风格的系统时，开始了第二次深入到了js的世界。  
话说第一次编写js组件是去年实习的时候，那个有参考网站，相当于扒过来深度改造一下就行了，但是还是写了五六千行的代码。  
这次由于是自己全部手写，所以写之前就设计好架构，尽量让代码模块化，结果还是写到了四五千行。  
后来组件增加，增加一个代码要增加几百行，工作量巨大，浪费很多的时间，我想着什么时候重构一下，使得增加组件后，只需要简单的增加一个模块就行了。  
这样做的好处是工作量很小，只需要实现与逻辑相关的代码细节，其他的框架统一处理。  
但是排期不会安排重构的时间的，虽然浪费的时间远远比重构的时间多。于是只好自己抽空重构了。  
结果一个周末两天时间就重构完了，结果重构完后。。。。


貌似写跑题了，我要写的是js模板引擎，直接跳到正文吧。  
我的这个js组件会动态生成很多dom, 但是之前这个dom的字符串都是存在变量中，然后使用替换函数替换掉对应的占位符，然后生成dom.  

我重构的时候，尝试使用 js 模板引擎来做替换这件事，竟然一用就不能停下来了。


## artTemplate

由于自己网上搜的js模板引擎， 自己有偏向于在 github 上找，于是就发现[这个][js-artTemplate-github]模板引擎了。  

然后这个模板引擎还有一个[专门的页面][js-artTemplate-page]来说明怎么使用这个模板引擎。  

看了教程，发现有两种使用方法。  

一种是使用简洁语 的方式， 另一种是使用原生语法的方式。  


### 简洁语法

起初我使用简洁语法的方式。  

#### 防XSS输出

{% highlight %}
{{content}}
{% endhighlight%}


#### 直接输出

{% highlight %}
{{#content}}
{% endhighlight%}


#### 条件

{% highlight %}
{{if 1}}
    {{1}}
{{else if 2}}
    {{2}}
{{else}}
    {{3}}
{{/if}}
{% endhighlight%}

#### 循环


{% highlight %}
{{each list as value index}}
    {{index}} - {{value}}
{{/each}}

//也可以省略后面的value index

{{each list}}
    {{$index}} - {{$value.user}}
{{/each}}
{% endhighlight%}


### 原生语法

原生语法 和js语法很类似。  

#### 防XSS输出

```
<%=content%>
```


#### 直接输出

```
<%=#content%>
```

#### 其他

对于条件和循环，完全和 js 代码一样，这里就不多说了。  

这里还要说的是 辅助方法。  

有时候我们想在模板中简单的处理一下数据，这个时候就需要辅助方法了。  

比如我的需求:递归输出内容。  

每递归一次，就需要调用一次模板函数，然后把处理的数据输出出来。  

定义辅助方法如下

```
template.helper('$ubb2html', function (content) {
    // 处理字符串...
    return "<h1>" + content + "</h1>";
});
```

调用辅助方法并输出内容

```
<%= $ubb2html(content) %>
```


<完>

[js-artTemplate-page]: http://aui.github.io/artTemplate/
[js-artTemplate-github]: https://github.com/aui/artTemplate