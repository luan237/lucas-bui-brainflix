import "./VideoList.scss";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

const apiLink = "http://localhost:8080";
class VideoList extends Component {
  state = {
    videoList: this.props.videoList,
    showingVideo: this.props.showingVideo,
  };
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps !== this.props);
    console.log(this.state);
    console.log(prevState);
    if (prevProps !== this.props) {
      this.setState(
        {
          showingVideo: this.props.showingVideo,
        },
        () => {
          axios.get(`${apiLink}/videos`).then((response) => {
            this.updateVideoList(response);
          });
        }
      );
    }
  }

  // function to change current list when click on another one
  updateVideoList = (response) => {
    let updatedList = [...response.data];
    if (this.props.showingVideo) {
      let showingIndex = updatedList.findIndex(
        (video) => video.id === this.props.showingVideo.id
      );
      updatedList.splice(showingIndex, 1);
      console.log(showingIndex);
      this.setState({
        videoList: updatedList,
      });
    }
  };
  render() {
    console.log(this.updateVideoList());
    console.log(this.state.videoList());
    return (
      <div className="list">
        <p className="list__next">NEXT VIDEOS</p>
        {this.state.videoList().map((item) => {
          return (
            <Link to={`/${item.id}`} key={item.id} className="list__link">
              <div className="list__item">
                <img
                  className="list__thumbnail"
                  src={item.image}
                  alt="video thumbnail"
                />
                <div className="list__info">
                  <p className="list__info--title">{item.title}</p>
                  <p className="list__info--channel">{item.channel}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default VideoList;
