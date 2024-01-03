import UserProfile from "../components/profile/user-profile";
import { getSession } from "next-auth/react";

export default function ProfilePage(props) {
  console.log(props);
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
