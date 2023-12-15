import styles from "./PostHeader.module.css";
import Image from "next/image";

export default function PostHeader(props) {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
      <Image src={props.image} alt={props.title} width={400} height={400} />
    </header>
  );
}
