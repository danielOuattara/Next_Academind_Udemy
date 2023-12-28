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
