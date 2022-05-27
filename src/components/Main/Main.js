import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
import VideoDetailsList from "../../data/video-details.json";
import VideosID from "../../data/videos.json";

const videosID = Array.from(VideosID);
const videoDetailsList = Array.from(VideoDetailsList);

// const defaultPageList = [...defaultVideoDetailsList];
// defaultPageList.shift();
// function Main() {
class Main extends React.Component {
  state = {
    videosID,
    videoDetailsList,
    showingVideo: videoDetailsList[0],
  };
  // updatedVideoDetailsList = videoDetailsList
  //   .filter((video) => video.id !== this.state.showingVideo.id)
  //   .map();
  updatedVideo = (id) => {
    let showingVideo2 = this.state.videoDetailsList.find(
      (video) => video.id === id
    );
    this.setState({
      showingVideo: showingVideo2,
    });
  };
  // handleClickNewVideo = (event) => {
  //   event.PreventDefault();
  //   // New State
  //   this.setState({
  //     videoDetailsList: [...defaultVideoDetailsList],
  //     showingVideo: {
  //       id: event.target.id,
  //       image: event.target.image,
  //       duration: event.target.duration,
  //     },

  // videosID = this.state.videosID;
  // console.log(state.video);
  // newID: [...this.videosID]
  // state.videosID
  //   .filter(video.id !== this.state.videosID.id)
  //   .map((updatedList) => {
  //     return updatedList;
  //     // if (v.id === video.id) {
  //     //   state.videoDetailsList = updatedList.
  //     // }
  //   })
  // });
  // console.log(this.state.updatedVideoDetailsList);
  // };

  render() {
    // console.log(this.state.videoDetailsList);
    // console.log(this.updatedVideoDetailsList);
    console.log(this.updatedVideoDetailsList);
    return (
      <>
        <Video showingVideo={this.state.showingVideo} />
        {/* {console.log(this.state.showingVideo)} */}
        <VideoDetails showingVideo={this.state.showingVideo} />
        <VideoList
          newList={this.state.videoDetailsList}
          newVideo={this.updatedVideo}
        />
      </>
    );
  }
}
export default Main;
