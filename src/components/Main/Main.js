import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
import VideoDetailsList from "../../data/video-details.json";
import VideosBasic from "../../data/videos.json";
import Comments from "../Comments/Comments";

const videosBasic = Array.from(VideosBasic);
const videoDetailsList = Array.from(VideoDetailsList);

class Main extends React.Component {
  state = {
    videosBasic,
    videoDetailsList,
    showingVideo: videosBasic[0],
    showingVideoDetails: videoDetailsList[0],
  };

  updatedVideo = (id) => {
    let showingVideo2 = this.state.videosBasic.find((video) => video.id === id);
    let showingVideoDetails2 = this.state.videoDetailsList.find(
      (video) => video.id === id
    );
    this.setState({
      showingVideo: showingVideo2,
      showingVideoDetails: showingVideoDetails2,
    });
  };

  updatedVideoList = () => {
    let updatedList = [...VideosBasic];
    let showingIndex = updatedList.indexOf(this.state.showingVideo);
    updatedList.splice(showingIndex, 1);
    return updatedList;
  };
  render() {
    return (
      <>
        <Video showingVideo={this.state.showingVideo} />
        <div className="page">
          <div className="page__left">
            <VideoDetails showingVideo={this.state.showingVideoDetails} />
            <Comments
              showingComments={this.state.showingVideoDetails.comments}
            />
          </div>
          <VideoList
            newList={this.updatedVideoList()}
            newVideo={this.updatedVideo}
          />
        </div>
      </>
    );
  }
}
export default Main;
