import "./Video.scss";
import React from "react";

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
        <p className="video__name">{props.showingVideo.title}</p>
      </div>
    </>
  );
}
export default Video;
