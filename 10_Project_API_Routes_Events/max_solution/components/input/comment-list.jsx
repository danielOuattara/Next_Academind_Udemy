import classes from "./comment-list.module.css";

export default function CommentList(props) {
  if (props.comments.length === 0) {
    return <h2>No comment for this event yet !</h2>;
  }
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {props.comments.map((comment) => (
        <li key={comment._id}>
          <p>{comment.comment}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
