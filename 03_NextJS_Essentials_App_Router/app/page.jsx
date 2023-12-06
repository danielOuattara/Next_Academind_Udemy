import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
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
