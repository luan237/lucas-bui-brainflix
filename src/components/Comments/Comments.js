import "./Comments.scss";
import avaPic from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

function Comments(props) {
  let comments = props.showingComments;
  return (
    <div className="comments">
      <p className="comments__count">{comments.length} Comments</p>
      <div className="comments__container">
        <img src={avaPic} alt="avatar" />
        <div className="comments__form">
          <form className="comments__form--container">
            <label className="comments__form--label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <input
              className="comments__form--input"
              type="text"
              name="comment"
              placeholder="Add a new comment"
            ></input>
            <button>
              <img src={commentIcon} alt="comment icon" />
              COMMENT
            </button>
          </form>
        </div>
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
