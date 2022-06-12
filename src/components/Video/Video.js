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
            src="https://project-2-api.herokuapp.com/stream?api_key=9bffd4bc-52e5-4fcf-a13c-d2fd49ad9848"
          />
        </div>
      </div>
    </>
  );
}
export default Video;
