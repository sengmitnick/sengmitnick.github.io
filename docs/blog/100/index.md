---
mark: original
title: 微信小程序--简易顶部Toast
cover: /images/cover/02.jpg
images: [/images/cover/02.jpg]
categories: [technology]
date: 2017-06-30 11:05:23
tags: [微信小程序, Toast]
author: SengMitnick
linktitle: '100'
comments: true
sidemenu: false
---

> 目前微信小程序官方的交互反馈 API 的提示框什么的都达不到我想要的简易效果，就自己简单写了一个。

<!--more-->

demo 地址：[https://github.com/smk17/wxToast](https://github.com/smk17/wxToast)

## 效果图

<Image  name="100.gif" caption="demo" alt="demo" normal="true"></Image>

## 添加样式

在 app.wxss 添加我们要自定义的 toast 样式

```css
#toast {
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  background-color: #b1bccf;
  padding: 20rpx 5%;
  text-align: center;
  opacity: 0.7;
  transition: opacity 0.5s ease-out;
}
```

## 添加 View

在需要 toast 的 wxml 文件添加 id 为 toast 的 view 标签

```html
<view id="toast" style="opacity: {{opacity}};">{{message}}</view>
```

## 添加事件

在 wxml 文件对应的 js 文件里面添加对应的事件并设置默认数据

```javascript
data: {
  opacity: 0,
  message: ''
},
/**
  * 显示Toast
  * message， 显示你要提示的内容
 **/
drawToast(message){
  var that = this
  this.setData({
    opacity: 0.7,
    message: message,
  })
  setTimeout(function(){
    that.setData({
      opacity: 0,
    })
  },1000)
},
```

## 总结

其实这就是一个简单的 Toast 提示~~~

**END……**
