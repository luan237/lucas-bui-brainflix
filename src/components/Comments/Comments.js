import "./Comments.scss";

function Comments(props) {
  let comments = props.showingComments;
  return (
    <div className="comments">
      <p className="comments__count">{comments.length} Comments</p>
    </div>
  );
}

export default Comments;
