import "../styles/TrackCard2.css";
import { useState } from "react";
function TrackCard2({ track }) {
  const [click, setClick] = useState(false);
  return (
    <div className="expand-tracks">
      <div className="expand track-heading">{track.heading}</div>
      <i
        className={click ? "fa fa-angle-up" : "fa fa-angle-down"}
        onClick={() => setClick(!click)}
      ></i>
      <ol className={click ? "track-list two expand" : "track-list two"}>
        {track.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
export default TrackCard2;
