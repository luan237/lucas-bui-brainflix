import "./VideoUpload.scss";
import thumbnailUpload from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/publish.svg";
import { Component } from "react";
import { Redirect } from "react-router-dom";

class VideoUpload extends Component {
  state = {
    isUploaded: false,
  };

  handleUpload = () => {
    this.setState({
      isUploaded: true,
    });
  };
  render() {
    if (this.state.isUploaded === true) {
      return <Redirect from={this.props.match.url} to="/" />;
    }
    return (
      <div className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <form onSubmit={() => this.handleUpload()} className="upload__form">
          <div className="upload__info-wrap">
            <label className="upload__label">
              VIDEO THUMBNAIL
              <img
                className="upload__thumb"
                src={thumbnailUpload}
                alt="thumbnail upload"
              />
            </label>
            <label htmlFor="title" className="upload__label">
              TITLE YOUR VIDEO
              <input
                type="text"
                name="title"
                placeholder="Add a title to your video"
                id="title"
                className="upload__input"
              ></input>
            </label>
            <label className="upload__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Add a description to your video"
                className="upload__input"
              ></textarea>
            </label>
          </div>
          <button className="upload__button">
            <img src={uploadIcon} alt="upload icon" />
            <p>PUBLISH</p>
          </button>
          <button className="upload__button--cancel">CANCEL</button>
        </form>
      </div>
    );
  }
}

export default VideoUpload;
