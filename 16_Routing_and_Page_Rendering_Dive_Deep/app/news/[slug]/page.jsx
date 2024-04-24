import { NEWS } from "@/components/news";

export default function page({ params }) {
  const news = NEWS.find((news) => news.slug === params.slug);
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
