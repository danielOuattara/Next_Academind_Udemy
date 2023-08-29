import Link from "next/link";
import * as styles from "./../../styles/button.module.css";

export default function ButtonLink(props) {
  return (
    <Link href={props.link} className={styles.btn}>
      {props.children}
    </Link>
  );
}
