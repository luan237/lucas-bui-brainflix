import "./VideoDetails.scss";
import viewIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoDetails(props) {
  let newTime = new Date(props.showingVideo.timestamp).toLocaleDateString();
  return (
    <div className="detail">
      <div className="detail__left">
        <p className="detail__left--author">By {props.showingVideo.channel}</p>
        <p className="detail__left--date">{newTime}</p>
      </div>
      <div className="detail__right">
        <div className="detail__right--views">
          <img src={viewIcon} alt="views icon" />
          <p>{props.showingVideo.views}</p>
        </div>
        <div className="detail__right--likes">
          <img src={likesIcon} alt="likes icon" />
          <p>{props.showingVideo.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
