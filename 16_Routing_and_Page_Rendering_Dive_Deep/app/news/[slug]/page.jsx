import { NEWS } from "@/components/news";
import { notFound } from "next/navigation";

export default function page({ params }) {
  const news = NEWS.find((news) => news.slug === params.slug);
  if (!news) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h2> Page for News {news.title} </h2>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
