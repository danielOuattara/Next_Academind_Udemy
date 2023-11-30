import { useRef, useState } from "react";

export default function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();
  const [feedbackData, setFetchedFeedback] = useState([]);

  // console.log("feedbackData = ", feedbackData);

  //------
  const fetchFeedback = async () => {
    const response = await fetch("/api/feedback");
    const data = await response.json();
    // console.log("data = ", data);
    setFetchedFeedback(data.data);
  };

  //------
  const submitFormHandler = async (event) => {
    event.preventDefault();
    const email = emailInput.current.value;
    const feedback = feedbackInput.current.value;

    if (!email || !feedback) return;

    // do not forget input validation !

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, feedback }),
    });

    const dataResponse = await response.json();
    // console.log(dataResponse);

    emailInput.current.value = "";
    feedbackInput.current.value = "";
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form action="" method="get" onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email Address :</label>
          <input type="email" id="email" name="email" ref={emailInput} />
        </div>
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

      <hr />

      <div>
        <button onClick={fetchFeedback}>Fetch feedback</button>
        <ul>
          {feedbackData.map((item) => (
            <li key={item.id}>
              <h2>{item.email}</h2>
              <p>{item.feedback}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// async function
