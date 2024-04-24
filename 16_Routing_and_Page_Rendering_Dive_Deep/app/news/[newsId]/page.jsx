export default function page({ params }) {
  return (
    <section>
      <h2> Page for News {params.newsId} </h2>
    </section>
  );
}
