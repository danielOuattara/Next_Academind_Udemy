import Link from "next/link";
import { NEWS } from "@/components/news";

export default function NewsPage() {
  return (
    <main>
      <h1>News Page</h1>
      <ul className="news-list">
        {NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
