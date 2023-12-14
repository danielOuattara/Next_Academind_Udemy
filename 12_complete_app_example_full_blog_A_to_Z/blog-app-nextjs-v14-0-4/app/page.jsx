import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
