import "./Main.scss";
import Video from "../Video/Video.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import VideoList from "../VideoList/VideoList.js";
import React from "react";
import Comments from "../Comments/Comments";
import axios from "axios";

const apiLink = "http://localhost:8080";
// const apiKey = "?api_key=9bffd4bc-52e5-4fcf-a13c-d2fd49ad9848";

class Main extends React.Component {
  // Initial state
  state = {
    videoList: [],
    showingVideo: null,
  };

  // get API
  componentDidMount() {
    this.fetchVideoList();
  }

  fetchVideoList = () => {
    axios
      .get(`${apiLink}/videos`)
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
  };
  // fetch data function
  fetchActiveVideo = (videoId) => {
    axios
      .get(`${apiLink}/videos/${videoId}`)
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
    // scroll to top after click the new video
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Title on the tab's name
    if (this.props.match.params.id) {
      this.state.showingVideo &&
        (document.title = this.state.showingVideo.title);
    } else document.title = "Home";
  }

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
              <Comments showingId={this.state.showingVideo.id} />
            )}
          </div>
          {showingVideo && (
            <VideoList
              videoList={this.state.videoList}
              showingVideo={this.state.showingVideo}
              routerProps={this.props}
            />
          )}
        </div>
      </>
    );
  }
}
export default Main;
