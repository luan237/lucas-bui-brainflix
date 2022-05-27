import "./VideoDetails.scss";

function VideoDetails(props) {
  return (
    <div className="video__detail">
      <div className="video__detail--left">
        <p className="left__author">By {props.showingVideo.channel}</p>
        <p className="left__date">{props.showingVideo.timestamp}</p>
      </div>
    </div>
  );
}

export default VideoDetails;
