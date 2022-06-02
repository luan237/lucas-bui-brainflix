import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
import Comments from "../Comments/Comments";
import axios from "axios";

const apiLink = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=5821f58b-d638-4339-9f50-71d86650f340";

class Main extends React.Component {
  // Initial state
  state = {
    videoList: [],
    showingVideo: null,
  };
  // get API
  componentDidMount() {
    axios
      .get(`${apiLink}/videos${apiKey}`)
      .then((response) => {
        this.setState({
          videoList: response.data,
        });
        const showingVideoId =
          this.props.match.params.id || response.data[0].id;
        this.fetchActiveVideo(showingVideoId);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // fetch data function
  fetchActiveVideo = (videoId) => {
    axios
      .get(`${apiLink}/videos/${videoId}${apiKey}`)
      .then((response) => {
        this.setState({
          showingVideo: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // check for component update
  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const currentId = this.props.match.params.id;
    if (prevId !== currentId) {
      const showingVideoId = currentId || this.state.videoList[0].id;
      this.fetchActiveVideo(showingVideoId);
    }
  }
  // function to change current list when click on another one
  updatedVideoList = () => {
    let updatedList = [...this.state.videoList];
    let showingIndex = updatedList.findIndex(
      (video) => video.id === this.state.showingVideo.id
    );
    updatedList.splice(showingIndex, 1);
    return updatedList;
  };
  render() {
    const { showingVideo } = this.state;
    return (
      <>
        {showingVideo && <Video showingVideo={showingVideo} />}
        {/* for the desktop styling, added outer wrap for details and comments */}
        <div className="page">
          <div className="page__left">
            {showingVideo && (
              <VideoDetails showingVideo={this.state.showingVideo} />
            )}
            {showingVideo && (
              <Comments showingVideo={this.state.showingVideo} />
            )}
          </div>
          {showingVideo && <VideoList newList={this.updatedVideoList()} />}
        </div>
      </>
    );
  }
}
export default Main;
