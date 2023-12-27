import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getSinglePostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync((filePath, "utf-8"));
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
  console.log(postsFiles);
  return postsFiles
    .map((file) => getSinglePostData(file))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.isFeatured === true);
}
