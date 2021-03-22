---
mark: original
title: hexo本地环境的迁移与备份
categories: [technology]
date: 2017-06-09 15:20:12
tags: [hexo, 备份]
author: SengMitnick
linktitle: '97'
comments: true
sidemenu: false
---

> 这里记录本博客本地环境的迁移过程，有时候系统换了，hexo 配置出问题解决不了肿么办？就如同 Windows 出问题又不知道怎么解决平时都是重装系统一样，重新 init 一个 hexo 就好了。

这里我推荐使用微软的 OneDrive 进行对 hexo 本地环境的时刻备份。。。<!--more-->

## 初始化

首先重新初始化一个新的 hexo

```shell
hexo init blog
cd blog
npm install
```

## 文件迁移

把原 hexo 文件夹里的 scaffolds、source、themes 文件夹和\_config.yml 配置文件复制到刚刚初始化的 blog 文件夹下。

<Image  name="97.png" caption="资料迁移" alt="资料迁移"></Image>

## 恢复以前安装的插件

### 文章置顶

该设置参考给 Hexo 添加文章置顶功能

### 无痛使用本地图片

首先确认 \_config.yml 中有 post_asset_folder:true 。

在 hexo 目录，执行

```shell
npm install https://github.com/CodeFalling/hexo-asset-image --save
```

### sitemap & rss 插件

在 hexo 目录，执行

```shell
npm install hexo-generator-feed --save
npm install hexo-generator-sitemap --save
```

### 本地搜索

在 hexo 目录，执行

```shell
npm install hexo-generator-search --save
```

至此，完成。
