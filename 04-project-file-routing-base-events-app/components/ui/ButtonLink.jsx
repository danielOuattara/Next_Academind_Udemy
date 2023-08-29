import Link from "next/link";
import * as styles from "./button.module.css";

export default function ButtonLink(props) {
  return (
    <Link href={props.link} className={styles.btn}>
      {props.children}
    </Link>
  );
}
