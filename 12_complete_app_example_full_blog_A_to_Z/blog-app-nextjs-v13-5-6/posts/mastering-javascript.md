---
postSlug: mastering-javascript
title: Mastering JavaScript
image: mastering-js-thumb.png
date: '2021-10-30'
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
isFeatured: true
---

JavaScript powers the web - it's **the** most important programming language you need to know as a web developer.

For example, you should understand code like this:

```js
const basics = 'Okay, that should not be too difficult actually';

function printBasics() {
  console.log(basics):
}

printBasics();

import path from "path";
import matter from "gray-matter";
import fs from "fs";

//-------------------------------------------
const postsDirectory = path.join(process.cwd(), "posts");

//-------------------------------------------
export function getSinglePostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const postData = {
    ...data,
    content,
  };
  return postData;
}

//-------------------------------------------
export function getAllPosts() {
  const postsFilesList = fs.readdirSync(postsDirectory);
  return postsFilesList
    .map((file) => getSinglePostData(file))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

//-------------------------------------------
export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.isFeatured === true);
}

//-------------------------------------------
export function getAllPostsSlug() {
  return getAllPosts().map((post) => post.postSlug);
}

```

![Javascript Async Await ](javascript-async-await.jpg)

Learn more about it [here](https://academind.com).
