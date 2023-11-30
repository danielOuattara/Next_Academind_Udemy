import classes from "./newsletter-registration.module.css";
import { useRef, useState, useEffect } from "react";

export default function NewsletterRegistration() {
  const emailRef = useRef();
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const registrationHandler = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      // get user input (state or refs)
      const email = emailRef.current.value;

      // validate user input
      if (!email || !email.includes("@")) {
        throw new Error("Invalid email, please try again !");
      }

      // send valid data to API
      const response = await fetch("/api/newsletter-registration", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setIsLoading(false);
      setSuccess(true);
      setRegistrationEmail(data.email);
      setError("");
      emailRef.current.value = "";
    } catch (err) {
      setIsLoading(false);
      setSuccess(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error && !success) setError("");
      if (success) setSuccess(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [error, success]);

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
      {loading && <p style={baseStyle}>Loading...</p>}

      {!loading && success && (
        <p style={successStyle}>Successful registration {registrationEmail}</p>
      )}

      {!loading && error && <p style={errorStyle}>{error}</p>}
    </section>
  );
}

const baseStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
};

const successStyle = {
  color: "green",
  ...baseStyle,
};

const errorStyle = {
  color: "red",
  ...baseStyle,
};
