import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
import VideoDetailsList from "../../data/video-details.json";
import VideosID from "../../data/videos.json";
import Comments from "../Comments/Comments";

const videosID = Array.from(VideosID);
const videoDetailsList = Array.from(VideoDetailsList);

class Main extends React.Component {
  state = {
    videosID,
    videoDetailsList,
    showingVideo: videoDetailsList[0],
  };

  updatedVideo = (id) => {
    let showingVideo2 = this.state.videoDetailsList.find(
      (video) => video.id === id
    );
    this.setState({
      showingVideo: showingVideo2,
    });
  };

  updatedVideoList = () => {
    let updatedList = [...VideoDetailsList];
    let showingIndex = updatedList.indexOf(this.state.showingVideo);
    updatedList.splice(showingIndex, 1);
    return updatedList;
  };
  render() {
    return (
      <>
        <Video showingVideo={this.state.showingVideo} />
        <VideoDetails showingVideo={this.state.showingVideo} />
        <Comments showingComments={this.state.showingVideo.comments} />
        <VideoList
          newList={this.updatedVideoList()}
          newVideo={this.updatedVideo}
        />
      </>
    );
  }
}
export default Main;
