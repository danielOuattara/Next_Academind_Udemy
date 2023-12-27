import path from "path";
import matter from "gray-matter";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "posts");

function getSinglePostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  console.log("filePath = ", filePath);
  const fileContent = fs.readFileSync(filePath, "utf8");
  console.log("fileContent = ", fileContent);
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace("/.md$/", ""); // remove file extension
  const postData = {
    postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDirectory);
  return postsFiles
    .map((file) => getSinglePostData(file))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.isFeatured === true);
}

export function getAllPostsSlug() {
  return getAllPosts().map((post) => ({ postSlug: post.postSlug }));
}
