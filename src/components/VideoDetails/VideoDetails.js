import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import { Component } from "react";
import axios from "axios";

const apiLink = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=5821f58b-d638-4339-9f50-71d86650f340";

class VideoDetails extends Component {
  state = {
    showingVideo: this.props.showingVideo,
  };
  componentDidMount() {
    axios
      .get(`${apiLink}/videos/${this.state.showingVideo.id}${apiKey}`)
      .then((response) => {
        console.log(response);
      });
  }
  // get uploaded time of the video
  render() {
    let time = new Date(this.state.showingVideo.timestamp).toLocaleDateString();
    return (
      <div className="detail">
        <p className="detail__name page-header">
          {this.state.showingVideo.title}
        </p>
        <div className="detail__wrap">
          {/* channel and date */}
          <div className="detail__left">
            <p className="detail__left--author">
              By {this.state.showingVideo.channel}
            </p>
            <p className="detail__left--date">{time}</p>
          </div>
          {/* views and likes */}
          <div className="detail__right">
            <div className="detail__right--views">
              <img src={viewsIcon} alt="view icon" />
              <p>{this.state.showingVideo.views}</p>
            </div>
            <div className="detail__right--likes">
              <img src={likesIcon} alt="like icon" />
              <p>{this.state.showingVideo.likes}</p>
            </div>
          </div>
        </div>
        <p className="detail__content">{this.state.showingVideo.description}</p>
      </div>
    );
  }
}

export default VideoDetails;
