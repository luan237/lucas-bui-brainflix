import "./VideoList.scss";

function VideoList({ newList, newVideo, id }) {
  return (
    <div className="list">
      <p className="list__next">NEXT VIDEOS</p>
      {newList.map((item) => {
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
      })}
    </div>
  );
}

export default VideoList;
