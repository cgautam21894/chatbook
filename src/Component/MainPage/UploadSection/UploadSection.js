import { Avatar, Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./UploadSection.css";
import profilepic from "../../../images/profilepic.jpg";
import photo from "../../../images/photo.png";
import watch from "../../../images/watch.png";
import feeling from "../../../images/feeling.jpg";

class UploadSection extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Paper className="upload_container" width="500px">
          <div className="upload_top">
            <div className="upload_image">
              <Avatar src={profilepic} />
            </div>
            <div>
              <input
                className="upload_text"
                placeholder="What's on your mind?"
                type="text"
              ></input>
            </div>
          </div>
          <div className="upload_bottom">
            <div className="upload_tabs">
              <Avatar src={watch} width="30px" />
              <div className="upload_tabs_text">Live Video</div>
            </div>
            <div className="upload_tabs">
              <Avatar src={photo} width="30px" />
              <div className="upload_tabs_text">Photo/Video </div>
            </div>
            <div className="upload_tabs">
              <Avatar src={feeling} width="30px" />
              <div className="upload_tabs_text">Feeling/Activity</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default UploadSection;
