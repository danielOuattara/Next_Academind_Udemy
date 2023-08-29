// Collect all routes

import { useRouter } from "next/router";

export default function BlogsPostPage() {
  const router = useRouter();
  console.log("router blog = ", router);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
