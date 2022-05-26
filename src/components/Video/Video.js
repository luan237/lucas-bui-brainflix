import "./Video.scss";
import React from "react";
import playIcon from "../../assets/icons/play.svg";
import fullscreenIcon from "../../assets/icons/fullscreen.svg";
import volumeupIcon from "../../assets/icons/volume_up.svg";
import * as VideoDetailsList from "../../data/video-details.json";
import * as VideosID from "../../data/videos.json";

let videoDetailsList = VideoDetailsList;
let videosID = VideosID;
function Video() {
  return (
    <>
      <div className="video" key={videosID[0].id}>
        <div className="video__player">
          <video
            className="video__player--show"
            poster={videosID[0].image}
          ></video>
          <div className="controls video__player--controls" data-state="hidden">
            <button className="controls__play" type="button" data-state="play">
              <img width="11" src={playIcon} alt="play icon" />
            </button>
            <div className="controls__progress">
              <span className="controls__progress--bar"></span>
              <span className="controls__progress--time">
                0:00 / {videosID[0].duration}
              </span>
            </div>
            <div className="controls__right">
              <button
                id="fs"
                type="button"
                data-state="go-fullscreen"
                className="controls__right--full"
              >
                <img width="20" src={fullscreenIcon} alt="full screen icon" />
              </button>
              <button
                id="volinc"
                type="button"
                data-state="volup"
                className="controls__right--vol"
              >
                <img width="22" src={volumeupIcon} alt="volume up icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Video;
