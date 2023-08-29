import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log("router = ", router);

  function loadProjectHandler() {
    // fetch & load data ...
    // router.push("/clients/daniel/project-a");

    /* OR */

    router.push({
      pathname: "/clients/[clientId]/[clientProjectId]",
      query: { clientId: router.query.clientId, clientProjectId: "project-a" },
    });
  }

  return (
    <div>
      <h1>Root for a specific client</h1>
      <h2>Client route identifier: {router.query.clientId}</h2>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}
