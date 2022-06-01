import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
// import VideoDetailsList from "../../data/video-details.json";
// import VideosBasic from "../../data/videos.json";
import Comments from "../Comments/Comments";
import axios from "axios";

const apiLink = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=5821f58b-d638-4339-9f50-71d86650f340";
/* since array from json files got some error with array methods, 
convert it to array again */

class Main extends React.Component {
  state = {
    videoList: [],
    showingVideo: null,
  };

  componentDidMount() {
    axios.get(`${apiLink}/videos${apiKey}`).then((response) => {
      // console.log(response);
      this.setState({
        videoList: response.data,
      });

      const showingVideoId = this.props.match.params.id || response.data[0].id;
      this.fetchActiveVideo(showingVideoId);
    });
  }

  fetchActiveVideo = (videoId) => {
    axios.get(`${apiLink}/videos/${videoId}${apiKey}`).then((response) => {
      // console.log(response);
      this.setState({
        showingVideo: response.data,
      });
    });
  };

  // function to change current video when click on another one
  updatedVideo = (id) => {
    let showingVideo2 = this.state.videoList.find((video) => video.id === id);
    this.setState({
      showingVideo: showingVideo2,
    });
  };
  // function to change current list when click on another one
  updatedVideoList = () => {
    let updatedList = [...this.state.videoList];
    let showingIndex = updatedList.indexOf(this.state.showingVideo);
    updatedList.splice(showingIndex, 1);
    return updatedList;
  };
  render() {
    // console.log(this.state.showingVideoDetails);
    // console.log(this.state);
    const { videoList, showingVideo } = this.state;
    // console.log(videoList);
    console.log(showingVideo);
    return (
      <>
        <Video showingVideo={showingVideo} />
        {/* for the desktop styling, added outer wrap for details and comments */}
        <div className="page">
          <div className="page__left">
            {/* <VideoDetails showingVideo={this.state.showingVideo} /> */}
            {/* <Comments showingVideo={this.state.showingVideo} /> */}
          </div>
          {/* <VideoList */}
          {/* newList={this.updatedVideoList()} */}
          {/* newVideo={this.updatedVideo} */}
          {/* /> */}
        </div>
      </>
    );
  }
}
export default Main;
