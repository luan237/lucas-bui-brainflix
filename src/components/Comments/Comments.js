import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

function Comments(props) {
  let comments = props.showingComments;
  return (
    <div className="comments">
      <p className="comments__count">{comments.length} Comments</p>
      <div className="comments__container">
        <div className="comments__container--avatar"></div>
        <form className="comments__form">
          <label className="comments__form--label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__form--input"
            type="text"
            name="comment"
            placeholder="Add a new comment"
            id="comment"
          ></textarea>
          <button className="comments__form--button">
            <img src={commentIcon} alt="comment icon" />
            <p>COMMENT</p>
          </button>
        </form>
      </div>
      <div className="comments__fan">
        {comments.map((comment) => {
          const time = new Date(comment.timestamp).toLocaleDateString();
          const commentKey = comments.indexOf(comment);
          return (
            <div className="comments__box" key={commentKey}>
              <div className="comments__box--avatar"></div>
              <div className="comments__box--right">
                <div className="comments__box--info">
                  <p className="comments__box--name">{comment.name}</p>
                  <p className="comments__box--time">{time}</p>
                </div>
                <p className="comments__box--comment">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
