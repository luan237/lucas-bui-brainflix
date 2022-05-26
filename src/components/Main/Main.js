import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
import * as videoDetailsList from "../../data/video-details.json";
import * as videosID from "../../data/videos.json";

function Main() {
  // class Main extends React.Component {
  //   state = {
  //     videosID: videosID,
  //     videoDetailsList: videoDetailsList,
  //   };
  //   handleClickNewVideo = (event, video) => {
  //     event.PreventDefault();
  //     // New State
  //     this.setState((state) => {
  //       // Iterate over the list of items from state
  //       const updatedList = state.videosID.map((v) => {
  //         if (v.id === video.id) {
  //           const newVideo = [...v];
  //         }
  //       });
  //     });
  //   };
  //   render() {
  return (
    <>
      <Video />
      <VideoDetails />
      <VideoList />
    </>
  );
}

export default Main;
