import "./VideoList.scss";

function VideoList({ newList, newVideo }) {
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
            <div className="list__info">
              <p className="list__info--title">{item.title}</p>
              <p className="list__info--channel">{item.channel}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoList;
