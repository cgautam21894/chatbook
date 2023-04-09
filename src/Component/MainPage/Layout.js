import React, { Component } from "react";
import "../MainPage/MainPage.css";
import { Grid } from "@material-ui/core";
import LeftSide from "../MainPage/LeftPanel/LeftSide";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";
import PostSection from "./PostSection/PostSection";
import RightSide from "./RightPanel/RightSide";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainpage_container">
        <Grid container>
          <Grid item xs={3}>
            <LeftSide />
          </Grid>
          <Grid item xs={6} className="middle_container">
            <StatusBar />
            <UploadSection />
            <PostSection />
          </Grid>
          <Grid item xs={3}>
            <RightSide />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;
