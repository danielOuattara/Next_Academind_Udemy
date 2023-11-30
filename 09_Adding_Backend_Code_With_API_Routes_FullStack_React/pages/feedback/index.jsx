import * as fs from "node:fs";
import path from "path";
import { useState } from "react";

export default function AllFeedbacks(props) {
  const [singleFeedbackData, setSingleFeedbackData] = useState({});

  const getSingleFeedbackDetails = async (id) => {
    const response = await fetch(`/api/feedback/${id}`);
    const data = await response.json();
    setSingleFeedbackData(data.singleFeedback);
  };
  return (
    <div>
      {singleFeedbackData && <p>message : {singleFeedbackData.feedback}</p>}
      <ul>
        {props.feedbackData.map((item) => (
          <li key={item.id} style={listItemStyle}>
            <h2>{item.email}</h2>
            {/* <p>{item.feedback}</p> */}
            <button
              style={btnStyle}
              onClick={() => getSingleFeedbackDetails(item.id)}
            >
              show details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  /* CAUTION: 
  ==> no "fetch" call in getStaticProps with Next for local fullStack API project
  --------------------------------------------------------------------------------*/
  // const response = await fetch("/api/feedback");
  // const feedbackData = await response.json();

  const filePath = path.join(process.cwd(), "dataStorage", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const feedbackData = JSON.parse(fileData);

  return {
    props: {
      feedbackData,
    },
  };
}

const btnStyle = {
  backgroundColor: "#04AA6D" /* Green */,
  borderRadius: "6px",
  border: "none",
  color: "#fff",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  cursor: "pointer",
};

const listItemStyle = {
  border: "1px solid gray",
  margin: "10px",
  padding: "10px",
  borderRadius: "6px",
};
