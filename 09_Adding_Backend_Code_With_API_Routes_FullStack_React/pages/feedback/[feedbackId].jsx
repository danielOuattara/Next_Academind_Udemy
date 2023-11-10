import * as fs from "node:fs";
import path from "path";

export default function SingleFeedback(props) {
  console.log(props);
  return (
    <div>
      <h2>Details for feedbackId: {props.singleFeedbackData.id}</h2>
      <p>{props.singleFeedbackData.email}</p>
      <p>{props.singleFeedbackData.feedback}</p>
    </div>
  );
}

// export async function getStaticProps(context) {
//   /* CAUTION:
//   ==> no "fetch" call in getStaticProps for Next local fullStack API project
//   ---------------------------------------------------------------------------*/

//   const filePath = path.join(process.cwd(), "dataStorage", "feedback.json");
//   const fileData = fs.readFileSync(filePath);
//   const feedbackData = JSON.parse(fileData);
//   const singleFeedbackData = feedbackData.find(
//     (item) => item.id === context.params.feedbackId,
//   );

//   return {
//     props: {
//       singleFeedbackData,
//     },
//   };
// }

// export async function getStaticPaths(context) {
//   return {
//     paths: [
//       { params: { feedbackId: "1" } },
//       // { params: { feedbackId: "2" } },
//       // { params: { feedbackId: "3" } },
//     ],
//     fallback: true,
//   };
// }
