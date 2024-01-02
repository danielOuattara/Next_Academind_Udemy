import Head from "next/head";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "@/libraries/posts_utility";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Daniel's blog</title>
        <meta
          name="description"
          content="My blog is about Web development technologies"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </>
  );
}

//--------------------------------------
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
  };
}
