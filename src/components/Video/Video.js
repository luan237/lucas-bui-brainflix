import "./Video.scss";

function Video(props) {
  return (
    <>
      <div className="video">
        <div className="video__player">
          <video
            className="video__player--show"
            poster={props.showingVideo.image}
            controls={true}
          ></video>
        </div>
      </div>
    </>
  );
}
export default Video;
