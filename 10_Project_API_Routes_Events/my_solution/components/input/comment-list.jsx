import classes from "./comment-list.module.css";

export default function CommentList(props) {
  console.log("props = ", props);
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {props.singleEventComments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
