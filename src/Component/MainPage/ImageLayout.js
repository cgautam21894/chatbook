import { Avatar } from "@material-ui/core";
import mypic from "../../images/profilepic.jpg";
import React, { Component } from "react";

class ImageLayout extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="imagelayout_container">
        <div className="imagelayout_image">
          <Avatar
            className="imagelayout_avatar"
            src={this.props.image}
          ></Avatar>
        </div>
        <div className="imagelayout_text">{this.props.text}</div>
      </div>
    );
  }
}

export default ImageLayout;
