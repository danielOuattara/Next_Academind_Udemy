import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useSession, signOut } from "next-auth/react";

function MainNavigation() {
  // console.log(useSession());
  const { data: session, status } = useSession();
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {status !== "authenticated" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}

          {status === "authenticated" && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {status === "authenticated" && (
            <li>
              <button onClick={signOut}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
