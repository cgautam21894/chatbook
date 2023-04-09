import { Avatar, Paper } from "@material-ui/core";
import React, { Component } from "react";
import profilepic from "../../../images/profilepic.jpg";
import love from "../../../images/love.svg";
import comments from "../../../images/comment.svg";
import share from "../../../images/share.svg";
import like from "../../../images/like.jpg";
import "./PostSection.css";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isImageAvailable = (data) => {
    return data == "" ? false : true;
  };

  componentDidMount() {
    this.isImageAvailable();
  }
  render() {
    return (
      <div>
        <Paper className="post_container">
          {/* header */}
          <div className="post_header">
            <div className="post_header_img">
              <Avatar className="post_header_actualimg" src={profilepic} />
            </div>
            <div className="post_header_text">
              {this.props.object.user_name}
            </div>
          </div>
          {/* description */}
          <div className="post_description">
            {this.props.object.description}
          </div>
          {/* image */}
          <div className="post_img">
            {this.isImageAvailable(this.props.object.post_img) ? (
              <img src={this.props.object.post_img} width="600px"></img>
            ) : (
              <span></span>
            )}
          </div>
          {/* like count */}
          <div className="post_likecount_container">
            <div className="post_likecount">
              <img src={like} className="post_likecount_img" height="35px" />
            </div>
            <div className="post_likecount_value">{this.props.object.like}</div>
          </div>
          {/* like share box */}
          <div className="post__likeshare">
            <div className="post__tab">
              <div className="post__tabfirst">
                <img className="post__tabimg" src={love} />
              </div>
              <div className="post__tabtext">Like</div>
            </div>
            <div className="post__tab">
              <div className="post__tabfirst">
                <img className="post__tabimg" src={comments} />
              </div>
              <div className="post__tabtext">Share</div>
            </div>
            <div className="post__tab">
              <div className="post__tabfirst">
                <img className="post__tabimg" src={share} />
              </div>
              <div className="post__tabtext">Comments</div>
            </div>
          </div>
          {/* comments box */}
          <div className="upload_comment">
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
          </div>
        </Paper>
      </div>
    );
  }
}

export default Post;
