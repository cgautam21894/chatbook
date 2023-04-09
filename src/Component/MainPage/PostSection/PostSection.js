import React, { Component } from "react";
import Post from "./Post";
import "./PostSection.css";
import post2 from "../../../images/post2.webp";
class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    let jsonData = [
      {
        post_id: 1,
        user_id: 12345,
        user_img: "user image",
        user_name: "Gautam Chauhan Pro",
        description: "Good Morning Kashmir!",
        post_img: post2,
        like: 25,
      },
      {
        post_id: 2,
        user_id: 67890,
        user_img: "user image",
        user_name: "Sagar Late Comer",
        description: "Sagar Tu Jaldi Aa!",
        post_img: "",
        like: 1000,
      },
    ];
    this.setState({ data: jsonData });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Post object={item} />
        ))}
      </div>
    );
  }
}

export default PostSection;
