import React, { Component } from "react";

//ant-design
import { Menu, Dropdown, Icon, Row, Col, Button, Badge } from "antd";

import {withRouter} from 'react-router-dom'

//images
import Profile from "../img/user2.png";
import Summary from "../img/summary.png";
import Notification from "../img/notify.png";
import MyProfile from './MyProfile'

//css
//import "../owner.css";

const menuNotify = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Notification
      </a>
    </Menu.Item>
    
  </Menu>
);

const menuSummary = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Balance
      </a>
    </Menu.Item>
    
  </Menu>
);

const menuProfile = <MyProfile/>

/*const menuProfile =(props) => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        My Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
      Settings      </a>
    </Menu.Item>
    <Menu.Item>
      <Button
        size="small"
        style={{ backgroundColor: "#28a745", color: "white" }}
       
        
      >
        Sign Out
      </Button>
    </Menu.Item>
  </Menu>
);*/

class DropDown extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "right" }} placement="bottomCenter">
        <Row>
          <Col offset={2} span={7}>
            <Dropdown overlay={menuNotify}>
              <a className="ant-dropdown-link" href="">
                
                <Row className="icon-style">
                <Badge count={5}>
                <img src={Notification} style={{ height: 40, width: 40 }} />
                </Badge>
                </Row>
                <Row className="text-style">Notify</Row>
              </a>
            </Dropdown>
          </Col>
          <Col span={6}>
            <Dropdown overlay={menuSummary} placement="bottomCenter">
              <a className="ant-dropdown-link" href="">
                <Row className="icon-style">
                  <img src={Summary} style={{ height: 40, width: 40 }} />
                </Row>
                <Row className="text-style">Wallet</Row>
              </a>
            </Dropdown>
          </Col>
          <Col span={7}>
            <Dropdown overlay={menuProfile} placement="bottomCenter">
              <a className="ant-dropdown-link" href="">
                <Row className="icon-style">
                  <img src={Profile} style={{ height: 45, width: 45 }} />
                </Row>
                <Row className="text-style">Profile</Row>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DropDown;
