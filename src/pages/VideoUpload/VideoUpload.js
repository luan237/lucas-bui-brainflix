import "./VideoUpload.scss";
// import thumbnailUpload from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/publish.svg";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class VideoUpload extends Component {
  state = {
    isUploaded: false,
    selectedImage: "",
  };
  handleUpload = (e) => {
    console.log(e.target.thumbnail.value);
    this.setState(
      {
        isUploaded: false,
      },
      () => {
        const formData = new FormData();
        formData.append("thumbnail", this.state.selectedImage);
        formData.append("title", e.target.title.value);
        formData.append("description", e.target.description.value);
        axios.post("http://localhost:8080/videos", formData).catch((err) => {
          console.log(err);
        });
        this.setState({
          isUploaded: true,
        });
      }
    );
  };
  handleImageChange(e) {
    e.preventDefault();
    this.setState({
      selectedImage: e.target.files[0],
    });
  }
  render() {
    if (this.state.isUploaded === true) {
      return <Redirect from={this.props.match.url} to="/" />;
    }
    return (
      <div className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <form onSubmit={(e) => this.handleUpload(e)} className="upload__form">
          <div className="upload__info-wrap">
            <label className="upload__label" htmlFor="thumbnail">
              VIDEO THUMBNAIL
              <input
                onChange={(e) => this.handleImageChange(e)}
                className="upload__thumb"
                type="file"
                name="thumbnail"
                id="thumbnail"
                accept="image/jpeg, image/png"
              ></input>
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
