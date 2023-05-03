import { useRouter, withRouter } from "next/router";

export default function project() {
  const router = useRouter();
  console.log("router = ", router);

  return <h2>{router.query.projectId}</h2>;
}
