import classes from "./comment-list.module.css";

export default function CommentList(props) {
  console.log("props = ", props);
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {props.comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
