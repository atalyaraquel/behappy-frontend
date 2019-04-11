import React from "react";

import GenderButton from "../GenderButton";

export default function GenderSelector(props) {
  const male = props.gender === "m";
  const female = props.gender === "f";
  const cor = props.invalidValue ? "#d50000" : "#cccccc";
  const style = {
    boxSizing: "border-box",
    border: `1px solid ${cor}`,
    borderRadius: "5px",
    padding: "3px",
    paddingBottom: "0"
  };

  return (
    <div style={style}>
      <GenderButton
        selected={female}
        gender={"f"}
        updateGender={props.updateGender}
      />
      <GenderButton
        selected={male}
        gender={"m"}
        updateGender={props.updateGender}
      />
    </div>
  );
}
