import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//-------------------------------------------------

export default function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  /* 1 */
  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (session) {
  //       router.replace("/");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return <AuthForm />;
}

/* 2 */
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: { status: "unauthenticated" },
  };
}
