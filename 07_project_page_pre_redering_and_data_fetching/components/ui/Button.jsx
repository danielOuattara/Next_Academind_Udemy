import Link from "next/link";
import * as styles from "./button.module.css";

export default function Button(props) {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
