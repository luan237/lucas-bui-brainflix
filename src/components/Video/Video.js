import "./Video.scss";
import * as videoDetails from "../../data/video-details.json";
import * as Videos from "../../data/videos.json";
import React from "react";
import playIcon from "../../assets/icons/play.svg";
import fullscreenIcon from "../../assets/icons/fullscreen.svg";
import volumeupIcon from "../../assets/icons/volume_up.svg";

class Video extends React.Component {
  state = {
    videos: Videos,
    videoDetails: videoDetails,
  };

  render() {
    return (
      <>
        <div className="video">
          <div className="video__player">
            <video
              className="video__player--show"
              poster={this.state.videos[0].image}
            ></video>
            <div
              className="controls video__player--controls"
              data-state="hidden"
            >
              <button
                className="controls__play"
                type="button"
                data-state="play"
              >
                <img width="11" src={playIcon} alt="play icon" />
              </button>
              <div className="controls__progress">
                <span className="controls__progress--bar"></span>
                <span className="controls__progress--time">
                  0:00 / {this.state.videoDetails[0].duration}
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
}

export default Video;
