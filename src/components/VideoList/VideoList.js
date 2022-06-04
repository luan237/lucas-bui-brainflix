import "./VideoList.scss";
import { Link } from "react-router-dom";
function VideoList({ newList }) {
  return (
    <div className="list">
      <p className="list__next">NEXT VIDEOS</p>
      {newList.map((item) => {
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

export default VideoList;
