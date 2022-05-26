import "./VideoList.scss";
import * as VideosID from "../../data/videos.json";
import * as VideoDetailsList from "../../data/video-details.json";
function VideoList() {
  const newList = VideosID;
  const videoDetailsList = VideoDetailsList;
  //   const itemShow = videoDetailsList.map((item) => {
  //     return (
  //       <>
  //         <img key={item.id} src={item.image} alt="video thumbnail" />
  //         <p>{item.title}</p>
  //         <p>{item.channel}</p>
  //       </>
  //     );
  //   });
  return (
    //   console.log(videoDetailsList[1]);

    <div>
      {
        // itemShow

        videoDetailsList.map((item) => {
          return (
            <>
              <img key={item.id} src={item.image} alt="video thumbnail" />
              <p>{item.title}</p>
              <p>{item.channel}</p>
            </>
          );
        })
      }
    </div>
  );
}

export default VideoList;
