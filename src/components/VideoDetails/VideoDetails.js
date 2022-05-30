import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoDetails(props) {
  let time = new Date(props.showingVideo.timestamp).toLocaleDateString();
  return (
    <div className="detail">
      <p className="detail__name page-header">{props.showingVideo.title}</p>
      <div className="detail__wrap">
        <div className="detail__left">
          <p className="detail__left--author">
            By {props.showingVideo.channel}
          </p>
          <p className="detail__left--date">{time}</p>
        </div>
        <div className="detail__right">
          <div className="detail__right--views">
            <img src={viewsIcon} alt="view icon" />
            <p>{props.showingVideo.views}</p>
          </div>
          <div className="detail__right--likes">
            <img src={likesIcon} alt="like icon" />
            <p>{props.showingVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="detail__content">{props.showingVideo.description}</p>
    </div>
  );
}

export default VideoDetails;
