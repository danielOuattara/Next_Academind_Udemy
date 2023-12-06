import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">Go To About</Link>
      </p>
      <p>
        <a href="https://nextjs.org/">Go To NextJS website</a>
      </p>
    </main>
  );
}
