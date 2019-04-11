import React from "react";

import Image from "../Image";

export default function GenderImage(props) {
  return (
    <Image
      x={0}
      y={props.gender === "m" ? 0 : 1}
      width={170}
      height={170}
      backgroundHeight={340}
      file="img/avatars.png"
    />
  );
}
