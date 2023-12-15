import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";

const FEATURED_POSTS = [
  {
    postSlug: "getting-started-nextjs-1",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs-1.png",
    excerpt:
      "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-12-15",
  },
  {
    postSlug: "getting-started-nextjs-2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs-2.png",
    excerpt:
      "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-12-15",
  },
  {
    postSlug: "getting-started-nextjs-3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs-3.png",
    excerpt:
      "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-12-15",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={FEATURED_POSTS} />
    </>
  );
}
