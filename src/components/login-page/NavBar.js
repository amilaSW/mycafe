import React, { Component } from "react";
import { Row, Col } from "antd";
import Logo from "../logo.png";
import SignIn from './signin/SignIn'

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="navbar">
          <Col className="navbar-left" span={2}>
            <img className="logo" src={Logo} />
          </Col>
          <Col className="navbar-left" span={6}>
            <p>
              <span style={{ fontSize: 30, fontWeight: "bold" }}>Mycafe</span>
              <br />
              The University Canteen Network
            </p>
          </Col >
          <Col span={6}></Col>
          <Col className="navbar-right" span={10}>
            <SignIn />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavBar;
