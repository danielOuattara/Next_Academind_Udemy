import { useRouter, withRouter } from "next/router";

// withRouter for class base components

export default function project() {
  const router = useRouter();
  console.log("router = ", router);
  console.log("router.query = ", router.query);

  return <h2>project {router.query.projectId}</h2>;
}
