import "./VideoUpload.scss";
import thumbnailUpload from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/publish.svg";
const VideoUpload = () => {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form">
        <label className="upload__label">
          VIDEO THUMBNAIL
          <img
            className="upload__thumb"
            src={thumbnailUpload}
            alt="thumbnail upload"
          />
        </label>
        <label for="title" className="upload__label">
          TITLE YOUR VIDEO
          <input
            type="text"
            name="title"
            placeholder="Add a title to your video"
            id="title"
            className="upload__input"
          ></input>
        </label>
        <label className="upload__label" for="description">
          ADD A VIDEO DESCRIPTION
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Add a description to your video"
            className="upload__input"
          ></textarea>
        </label>
        <button className="upload__button">
          <img src={uploadIcon} alt="upload icon" />
          <p>PUBLISH</p>
        </button>
        <p>CANCEL</p>
      </form>
    </div>
  );
};

export default VideoUpload;
