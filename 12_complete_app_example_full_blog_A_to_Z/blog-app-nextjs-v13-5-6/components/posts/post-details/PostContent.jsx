import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import Markdown from "react-markdown";

const POST = {
  postSlug: "getting-started-nextjs-1",
  title: "Getting started with NextJS",
  image: "getting-started-nextjs-1.png",
  date: "2023-12-15",
  content: "# This is a first post ",
};

export default function PostContent() {
  return (
    <article className={styles.content}>
      <PostHeader
        title={POST.title}
        image={`/images/posts/${POST.postSlug}/${POST.image}`}
      />
      <Markdown>{POST.content}</Markdown>
    </article>
  );
}
