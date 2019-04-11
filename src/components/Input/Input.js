import React from "react";

export default function Input(props) {
  const style = {
    borderColor: props.invalidValue ? "#d50000" : "#cccccc",
    backgroundColor: props.invalidValue ? "#ffcdd2" : "#ffffff"
  };
  let properties = Object.assign({}, props);
  delete properties.invalidValue;

  return <input type="text" style={style} {...properties} />;
}
