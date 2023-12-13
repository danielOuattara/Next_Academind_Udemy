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
