import React from "react";

import "./index.css";

import Image from "../Image";

export default function ButtonImage(props) {
  let style = {};
  let index = 0;
  const size = 48;

  if (props.position === "right") {
    style.float = "right";
    index = 1;
  } else {
    style.float = "left";
    index = 0;
  }

  let properties = Object.assign({}, props);
  delete properties.position;

  return (
    <div style={style} className="option-image-scroller" {...properties}>
      <Image
        y={0}
        x={index}
        width={size}
        height={size}
        backgroundHeight={size}
        file="img/buttons.png"
      />
    </div>
  );
}
