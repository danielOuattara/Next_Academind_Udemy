import Link from "next/link";
import * as styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">BrowseAll Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
