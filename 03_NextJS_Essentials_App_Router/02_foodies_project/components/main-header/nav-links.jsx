"use client";

import Link from "next/link";
import styles from "./nav-links.module.css";
import { usePathname } from "next/navigation";

export default function NavLinks(props) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={props.href}
        className={
          pathname.startsWith(props.href)
            ? `${styles.link} ${styles.active}`
            : `${styles.link}`
        }
      >
        {props.children}
      </Link>
    </li>
  );
}
