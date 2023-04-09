import { Avatar, Grid } from "@material-ui/core";
import React, { Component } from "react";
import fblogo from "../../images/fb.png";
import home from "../../images/home.png";
import page from "../../images/page.png";
import watch from "../../images/watch.png";
import market from "../../images/market.png";
import group from "../../images/group.jpg";
import mypic from "../../images/profilepic.jpg";

import "./NavBar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container className="navbar_main">
          <Grid item xs={3}>
            <div className="navbar_leftbar">
              <img className="navbar_logo" src={fblogo} width="40px" />
              <input
                className="navbar_search"
                type="text"
                placeholder="Search Facebook"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="navbar_container">
              <div className="navbar_tabs active">
                <img src={home} height="35px" width="35px" />
              </div>
              <div className="navbar_tabs">
                <img src={page} height="35px" width="35px" />
              </div>
              <div className="navbar_tabs">
                <img src={watch} height="35px" width="35px" />
              </div>
              <div className="navbar_tabs">
                <img src={market} height="35px" width="35px" />
              </div>
              <div className="navbar_tabs">
                <img src={group} height="35px" width="35px" />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="navbar_righttab">
              <Avatar className="navbarimg" src={mypic} />
              <div className="navbar_profilename">Gautam</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
