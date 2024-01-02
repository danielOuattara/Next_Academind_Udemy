import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/kangoroo.jpeg"
          alt="A portait of my person"
          width={700}
          height={1100}
        />
      </div>
      <h1>Hi I am Daniel</h1>
      <p>This is a blog about web development and technologies</p>
    </section>
  );
}
