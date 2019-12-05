import React from "react";
import ReactPicture from "./picture.png";

const PhotoComponent = props => {
  const imageStyle = {
    height: "140px",
    transform: "rotate(" + props.angle + "deg)"
  };

  return (
    <div>
      <img
        onMouseOver={props.rotates}
        onMouseOut={props.stopsRotate}
        src={ReactPicture}
        className="m-5"
        style={imageStyle}
        alt="..."
      />
    </div>
  );
};

export default PhotoComponent;
