import "./Video.scss";
import { Component } from "react";

class Video extends Component {
  state = {
    showingVideo: null,
  };
  componentDidUpdate() {
    this.setState({
      showingVideo: this.props.showingVideo,
    });
  }
  render() {
    console.log(this.state.showingVideo);
    return (
      <>
        <div className="video">
          <div className="video__player">
            <video
              className="video__player--show"
              poster={this.state.showingVideo.image}
              controls={true}
            ></video>
          </div>
        </div>
      </>
    );
  }
}
export default Video;
