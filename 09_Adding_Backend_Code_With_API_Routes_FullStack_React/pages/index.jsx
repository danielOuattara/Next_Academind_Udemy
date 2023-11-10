import { useRef } from "react";

export default function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInput.current.value;
    const feedback = feedbackInput.current.value;

    // do not forget validation !

    console.log(email, feedback);

    // fetch("/api/feedback", {
    //   headers: {
    //     "content-type": "application-type/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify({ emailData, feedbackData }),
    // });
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form action="" method="get" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your email Address :</label>
          <input type="email" id="email" name="email" ref={emailInput} />
        </div>
        <hr />
        <div>
          <label htmlFor="feedback">Your Feedback :</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInput}
          ></textarea>
        </div>

        <button type="submit">Send feedback</button>
      </form>
    </div>
  );
}
