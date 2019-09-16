import React, { Component } from "react";
import Logo from "../../logo.png";

//css
import "../owner.css";

//ant-design
import { Row, Col } from "antd";
import { Tag } from 'antd';


//custom imports
import DropDown from "./DropDown";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="navbar" align="middle">
          <Col className="navbar-left" span={2}>
            <img className="logo" src={Logo} />
          </Col>
          <Col className="navbar-left" span={6}>
            <p>
              <span style={{ fontSize: 30, fontWeight: "bold" }}>Mycafe</span>
              <br />
              The University Canteen Network
            </p>
          </Col>
          <Col offset={11} span={5} className="content-right">
            <DropDown />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
