import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import axios from "axios";
import { Component } from "react";
////////////////////////////////////////////////////////////////////////////////////
const apiLink = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=5821f58b-d638-4339-9f50-71d86650f340";
////////////////////////////////////////////////////////////////////////////////////

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

class Comments extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    this.fetchComments(this.props.showingId);
  }
  fetchComments = (id) => {
    axios.get(`${apiLink}/videos/${id}${apiKey}`).then((response) => {
      this.setState({
        comments: response.data.comments,
      });
    });
  };
  componentDidUpdate(prevProps) {
    if (this.props.showingId) {
      if (prevProps.showingId !== this.props.showingId) {
        this.fetchComments(this.props.showingId);
      }
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiLink}/videos/${this.props.showingId}/comments${apiKey}`, {
        name: "BrainStation Man",
        comment: e.target.comment.value,
      })
      .then(() => {
        e.target.reset();
        this.fetchComments(this.props.showingId);
      });
  };
  handleDelete = (e) => {
    axios
      .delete(
        `${apiLink}/videos/${this.props.showingId}/comments/${e.target.id}${apiKey}`
      )
      .then(() => this.fetchComments(this.props.showingId));
  };
  render() {
    const comments = this.state.comments;
    comments.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    return (
      <div className="comments">
        {/* comments count */}
        <p className="comments__count">{comments.length} Comments</p>
        {/* comments container */}
        <div className="comments__container">
          <div className="comments__container--avatar"></div>

          {/* comment form */}
          <form
            className="comments__form"
            onSubmit={(e) => this.handleSubmit(e)}
          >
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
            return (
              <div className="comments__box" key={comment.id}>
                <div className="comments__box--avatar"></div>
                {/* main comments */}
                <div className="comments__box--right">
                  <div className="comments__box--info">
                    <p className="comments__box--name">{comment.name}</p>
                    <p className="comments__box--time">{time}</p>
                    <p
                      id={comment.id}
                      onClick={(e) => this.handleDelete(e)}
                      className="comments__box--delete"
                    >
                      X
                    </p>
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
}

export default Comments;
