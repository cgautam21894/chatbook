import React, { Component } from "react";
import ImageLayout from "../ImageLayout";
import covid from "../../../images/covid.jpg";
import friends from "../../../images/friends.png";
import memories from "../../../images/memories.png";
import admanager from "../../../images/admanager.avif";
import advertise from "../../../images/advertise.png";
import blood from "../../../images/blood.jpg";
import messenger from "../../../images/messenger.jpg";

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  getData = () => {
    let jsondata = [
      {
        image: covid,
        text: "COVID-19 Information Centre",
      },
      {
        image: friends,
        text: "Friends",
      },
      {
        image: memories,
        text: "Memories",
      },
      {
        image: messenger,
        text: "Messenger",
      },
      {
        image: advertise,
        text: "Ad Centre",
      },
      {
        image: admanager,
        text: "Ads Manager",
      },
      {
        image: blood,
        text: "Blood Donations",
      },
    ];
    this.setState({ data: jsondata });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <ImageLayout image={item.image} text={item.text} />
        ))}
      </div>
    );
  }
}

export default LeftSide;
