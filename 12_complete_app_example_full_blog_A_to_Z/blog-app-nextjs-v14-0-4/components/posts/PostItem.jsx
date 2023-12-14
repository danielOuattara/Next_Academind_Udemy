import styles from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostItem(props) {
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${props.slug}/${props.image}`;

  return (
    <li className={styles.post}>
      <Link href={props.postSlug}>
        <div className={styles.image}>
          <Image src={imagePath} alt={props.title} width={300} height={200} />
        </div>

        <div className={styles.content}>
          <h3>Title {props.title}</h3>
          <time>time data: {formattedDate}</time>
          <p>The excerpt {props.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}