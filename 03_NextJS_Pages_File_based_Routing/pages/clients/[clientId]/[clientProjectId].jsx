import { useRouter } from "next/router";

export default function SelectedProjectPage() {
  const router = useRouter();
  console.log("router 2 = ", router);
  return (
    <div>
      <h1>The page for a specific project for a selected client</h1>
    </div>
  );
}
