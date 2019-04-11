import React from "react";
import Image from "../Image";
import ButtonImage from "../ButtonImage";
import ManipularEvento from "./ManipularEvento";

class ImageScroller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventHandler: new ManipularEvento(
        this.props.images.length,
        this.props.selectedImage.index
      )
    };
  }

  getAll() {
    return this.props.images[this.state.eventHandler.index];
  }

  renderButtonImage(position) {
    return (
      <ButtonImage
        position={position}
        onTouchStart={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
        onTouchEnd={e => e.stopPropagation()}
        onClick={e => {
          e.preventDefault();
          let eventHandler = this.state.eventHandler;
          let index = eventHandler.index;
          if (position === "left") {
            index += -1;
          } else {
            index += 1;
          }
          eventHandler.definirIndex(index);
          eventHandler.atualizarClique();

          this.setState({ eventHandler: eventHandler }, () => {
            this.props.onChange(this.getAll());
          });
        }}
      />
    );
  }

  renderSelected() {
    let style = {
      float: "left",
      width: "140px",
      height: "160px",
      marginLeft: "42px",
      backgroundColor: "#00C853",
      position: "relative",
      zIndex: -2
    };

    return <span style={style} />;
  }

  renderImage(entry, index) {
    let y = this.props.y ? this.props.y : 0;
    let style = {
      paddingTop: "8px",
      position: "absolute",
      zIndex: "-1",
      marginLeft: `${index * 140}px`
    };

    return (
      <li style={style} key={index + entry.toString()}>
        <Image
          x={entry.index}
          y={y}
          width={170}
          height={170}
          backgroundHeight={280}
          file={this.props.file}
        />
      </li>
    );
  }

  renderImages() {
    const ms = this.state.eventHandler.toqueEmExecucao ? "100ms" : "800ms";

    const style = {
      WebkitTransitionDuration: ms /* Safari e Chrome */,
      MsTransitionDuration: ms /* IE */,
      MozTransitionDuration: ms /* Firefox */,
      OTransitionDuration: ms /* Opera */,
      transitionDuration: ms /* Nativa do W3C */,

      listStyleType: "none",
      margin: "0",
      padding: "0",
      position: "relative",
      width: `${this.props.images.length * 170}px`,
      left: `${this.state.eventHandler.left}px`
    };

    const lista = this.props.images.map((entry, index) =>
      this.renderImage(entry, index)
    );

    return <ul style={style}>{lista}</ul>;
  }

  renderImageScroller() {
    const style = {
      boxSizing: "border-box",
      borderWidth: "1px",
      borderBottomWidth: "0",
      borderStyle: "solid",
      borderColor: "#cccccc",
      borderRadius: "5px",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
      width: "310px",
      height: "160px",
      overflow: "hidden"
    };

    return (
      <div
        style={style}
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchMove={this.onTouchMove.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
      >
        {this.renderButtonImage("left")}
        {this.renderSelected()}
        {this.renderImages()}
        {this.renderButtonImage("right")}
      </div>
    );
  }

  renderLabel() {
    const style = {
      boxSizing: "border-box",
      borderWidth: "1px",
      borderStyle: "solid",
      borderTopWidth: "0",
      borderColor: "#cccccc",
      borderRadius: "5px",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      backgroundColor: "#cccccc",
      color: "#444444",
      fontSize: "20px",
      textAlign: "center",
      padding: "5px",
      width: "310px"
    };

    return <div style={style}>{this.getAll().toString()}</div>;
  }

  onTouchStart(e) {
    let clientX = e.targetTouches[0].clientX;
    let eventHandler = this.state.eventHandler;
    eventHandler.iniciar(clientX);
    this.setState({ eventHandler: eventHandler });
  }
  onTouchMove(e) {
    let clientX = e.targetTouches[0].clientX;
    let eventHandler = this.state.eventHandler;
    eventHandler.mover(clientX);
    this.setState({ eventHandler: eventHandler });
  }
  onTouchEnd(e) {
    let eventHandler = this.state.eventHandler;
    eventHandler.atualizarToque();
    this.setState({ eventHandler: eventHandler }, () => {
      this.props.onChange(this.getAll());
    });
  }

  render() {
    return (
      <div>
        {this.renderImageScroller()}
        {this.renderLabel()}
      </div>
    );
  }
}

export default ImageScroller;
