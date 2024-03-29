/* 1 */
// import ProfileForm from "./profile-form";
// import styles from "./user-profile.module.css";
// import { useSession} from "next-auth/react";

// export default function UserProfile() {
//   // Redirect away if NOT auth
//   const { data: session, status } = useSession({
//     required: true,
//     onUnauthenticated() {
//       return (window.location.href = "/auth");
//     },
//   });

//   if (status === "loading") {
//     return <h1 className={styles.profile}>Loading...</h1>;
//   }

//   return (
//     <section className={styles.profile}>
//       <h1>Your User Profile</h1>
//       <ProfileForm />
//     </section>
//   );
// }

//---------------------------------------------------------------

/* 2 */
// import ProfileForm from "./profile-form";
// import styles from "./user-profile.module.css";
// import { getSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// export default function UserProfile() {
//   // Redirect away if NOT auth
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     getSession().then((session) => {
//       if (!session) {
//         window.location.href = "/auth";
//       } else {
//         setIsLoading(false);
//       }
//     });
//   }, []);

//   if (isLoading) {
//     return <h1 className={styles.profile}>Loading...</h1>;
//   }

//   return (
//     <section className={styles.profile}>
//       <h1>Your User Profile</h1>
//       <ProfileForm />
//     </section>
//   );
// }

//---------------------------------------------------------------

/* 3 */
import ProfileForm from "./profile-form";
import styles from "./user-profile.module.css";

async function handleChangePassword(payload) {
  try {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `${response.status}: ${response.statusText}` || "Something went wrong",
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default function UserProfile() {
  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm handleChangePassword={handleChangePassword} />
    </section>
  );
}
