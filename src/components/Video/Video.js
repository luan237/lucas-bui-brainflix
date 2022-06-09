import "./Video.scss";
import ReactPlayer from "react-player";

const youtubeApiKey = "AIzaSyCkNaQOg6SgzPwVewRCSajzMkkE9cjxpAs";

function Video(props) {
  return (
    <>
      <div className="video">
        <div className="video__player">
          <ReactPlayer
            className="video__player--show"
            poster={props.showingVideo.image}
            controls={false}
            url="https://www.youtube.com/watch?v=xxGaqJ-ge0w"
          />
        </div>
      </div>
    </>
  );
}
export default Video;
