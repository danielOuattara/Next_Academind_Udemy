const express = require("express");
const bodyParser = require("body-parser");

const { getStoredPosts, storePosts } = require("./data/posts");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/posts", async (req, res) => {
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 3500));
  const storedPosts = await getStoredPosts();
  res.json({ posts: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === parseInt(req.params.id));
  res.json({ post });
});

app.post("/posts", async (req, res) => {
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 3500));
  const existingPosts = await getStoredPosts();
  const newPost = {
    id: new Date().getTime(),
    ...req.body,
  };
  await storePosts([newPost, ...existingPosts]);
  res.status(201).json({ message: "Stored new post.", post: newPost });
});

app.listen(8080);
