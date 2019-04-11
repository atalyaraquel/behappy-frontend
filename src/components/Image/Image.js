import React, { Component } from "react";

class Image extends Component {
  // constructor(props) {
  //   super(props);
  // }

  calcPositionX = () => {
    return this.props.x * this.props.width * -1 + "px";
  };

  calcPositionY = () => {
    return `${this.props.y * this.props.height * -1}px`;
  };

  calcSize = () => `auto ${this.props.backgroundHeight}px`;

  calcStyle = () => {
    return {
      backgroundImage: `url(${this.props.file})`,
      backgroundPositionX: this.calcPositionX(),
      backgroundPositionY: this.calcPositionY(),
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      display: "table",
      margin: "0 auto"
    };
  };

  render() {
    return <div style={this.calcStyle()} />;
  }
}

export default Image;
