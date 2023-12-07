import Link from "next/link";
import Image from "next/image";
import logoImg from "./../../assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLinks from "./nav-links";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="logo image" priority />
          Next Foodies
        </Link>

        <nav className={styles.nav}>
          <ul>
            <NavLinks href="/meals">Browse Meals</NavLinks>
            <NavLinks href="/community">Foodies community</NavLinks>
          </ul>
        </nav>
      </header>
    </>
  );
}
