export default function SingleBlogPage(props) {
  console.log("props in single blog page = ", props);
  return (
    <main>
      <h1>Single blog post</h1>
      <p>{props.params.blogId}</p>
    </main>
  );
}
