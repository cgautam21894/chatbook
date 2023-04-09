import React, { Component } from "react";
import "../RightPanel/RightSide.css";
import ImageLayout from "../ImageLayout";
import mypic from "../../../images/profilepic.jpg";
class RightSide extends Component {
  constructor(props) {
    super(props);
  }
  state = { data: [] };

  getData = () => {
    let jsondata = [
      {
        image: mypic,
        text: "Yash Javeri",
      },
      {
        image: mypic,
        text: "Minashri Chauhan",
      },
      {
        image: mypic,
        text: "Satish Kathiriya",
      },
      {
        image: mypic,
        text: "Jaspreet Singh",
      },
    ];
    this.setState({ data: jsondata });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="rightside_container">
        <div className="rightside_header">Contacts</div>
        <div className="rightside_content">
          {this.state.data.map((item) => (
            <ImageLayout image={item.image} text={item.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default RightSide;
