import * as fs from "node:fs";
import path from "path";

export default function AllFeedbacks(props) {
  return (
    <div>
      <ul>
        {props.feedbackData.map((item) => (
          <li key={item.id}>
            <h2>{item.email}</h2>
            <p>{item.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  /* CAUTION: 
  ==> no "fetch" call in getStaticProps for Next local fullStack API project
  ---------------------------------------------------------------------------*/
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
