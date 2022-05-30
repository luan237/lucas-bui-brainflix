import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

// Get dynamic time function (diving deeper)
function timeSince(timeStamp) {
  let now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + " seconds ago";
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + " minutes ago";
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + " hours ago";
  }
  if (secondsPast < 2629800) {
    return parseInt(secondsPast / 86400) + " days ago";
  }
  if (secondsPast < 31557600) {
    return parseInt(secondsPast / 2629800) + " months ago";
  } else {
    return "more than a year ago";
  }
}

function Comments(props) {
  let comments = props.showingComments;
  return (
    <div className="comments">
      {/* comments count */}
      <p className="comments__count">{comments.length} Comments</p>
      {/* comments container */}
      <div className="comments__container">
        <div className="comments__container--avatar"></div>
        <form className="comments__form">
          <label className="comments__form--label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          {/* comment input */}
          <textarea
            className="comments__form--input"
            type="text"
            name="comment"
            placeholder="Add a new comment"
            id="comment"
          ></textarea>
          {/* submit button */}
          <button className="comments__form--button">
            <img src={commentIcon} alt="comment icon" />
            <p>COMMENT</p>
          </button>
        </form>
      </div>
      {/* submitted comments */}
      <div className="comments__fan">
        {comments.map((comment) => {
          let time = timeSince(comment.timestamp);
          const commentKey = comments.indexOf(comment);
          return (
            <div className="comments__box" key={commentKey}>
              <div className="comments__box--avatar"></div>
              {/* main comments */}
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
