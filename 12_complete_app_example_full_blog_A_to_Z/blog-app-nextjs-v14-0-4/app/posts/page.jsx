import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/libraries/posts_utility";

export default function AllPostsPage() {
  const posts = getAllPosts();
  return <AllPosts posts={posts} />;
}
