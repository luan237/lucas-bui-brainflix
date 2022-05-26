import "./VideoList.scss";
// import * as VideosID from "../../data/videos.json";
// import * as VideoDetailsList from "../../data/video-details.json";
function VideoList({ newList, newVideo, id }) {
  // const videoDetailsList = Array.from(VideoDetailsList);
  return (
    // {console.log(videoDetailsList)};
    <div className="list">
      {
        // itemShow

        newList.map((item) => {
          return (
            <div
              className="list__item"
              onClick={() => {
                newVideo(item.id);
              }}
              key={item.id}
            >
              <img
                className="list__thumbnail"
                src={item.image}
                alt="video thumbnail"
              />
              <p>{item.title}</p>
              <p>{item.channel}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default VideoList;
