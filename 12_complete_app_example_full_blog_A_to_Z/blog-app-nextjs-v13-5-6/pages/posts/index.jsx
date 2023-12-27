import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/libraries/posts_utility";

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
