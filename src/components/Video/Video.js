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
            src="https://project-2-api.herokuapp.com/stream/?api_key=5821f58b-d638-4339-9f50-71d86650f340"
          ></video>
        </div>
      </div>
    </>
  );
}
export default Video;
