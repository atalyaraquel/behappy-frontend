import React from "react";

export default function Button(props) {
  const className = props.main
    ? "pure-button pure-button-primary"
    : "pure-button";
  const style = {
    boxSizing: "border-box",
    backgroundColor: props.main ? "#2c80b9" : "#e6e6e6",
    float: props.main ? "right" : "left",
    marginTop: "10px",
    width: "120px",
    height: "38px"
  };

  return (
    <button className={className} style={style} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
