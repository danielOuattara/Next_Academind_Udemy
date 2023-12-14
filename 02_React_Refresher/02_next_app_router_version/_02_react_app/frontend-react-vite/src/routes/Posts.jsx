import PostList from "./../components/PostsList";
import { Outlet } from "react-router-dom";
export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

const url = "http://localhost:8080/posts";

export async function loader() {
  const response = await fetch(url);
  const data = await response.json();
  return data.posts;
}
