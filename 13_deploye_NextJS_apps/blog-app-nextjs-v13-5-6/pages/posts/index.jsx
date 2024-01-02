import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/libraries/posts_utility";
import Head from "next/head";

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title> All Blogs List</title>
        <meta
          name="description"
          content="My blog is about Web development technologies"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
