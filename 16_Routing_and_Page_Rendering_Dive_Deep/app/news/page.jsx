import Link from "next/link";

export default function NewsPage() {
  return (
    <main>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/sports">First News Item</Link>
        </li>
        <li>
          <Link href="/news/culture">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/education">Third News Item</Link>
        </li>
      </ul>
    </main>
  );
}
