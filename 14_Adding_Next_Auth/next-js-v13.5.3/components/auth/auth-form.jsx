import { useRef, useState } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//-------------------------------------

async function registerUser(payload) {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
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

//--------------------------------------

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  function switchAuthModeHandler() {
    return setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // client validation: TODO in production

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result.error) {
        // set some auth state/logic
        router.replace("/profile");
      }
    } else {
      await registerUser({ email, password });
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
