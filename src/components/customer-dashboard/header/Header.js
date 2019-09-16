import React, { Component } from "react";
import Logo from "../../logo.png";

//css
//import "../owner.css";

//ant-design
import { Row, Col } from "antd";
import { Tag } from 'antd';


//custom imports
import DropDown from "./DropDown";
import Canteen from './Canteen'

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
              <span style={{ fontSize: 30, fontWeight: "bold",marginBottom:0 }}>Mycafe</span><br />
              The University Canteen Network<br/>
              
            </p>
          </Col>
          <Col offset={7} span={9} className="content-right">
            <Row>
              <Col span={12} style={{paddingTop:25}}><Canteen/></Col>
              <Col span={12}><DropDown /></Col>
            </Row>
            
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
