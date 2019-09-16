import React, { Component } from "react";
import Logo from "../logo.png";

//ant-design
import { Input } from "antd";
import { Row, Col } from "antd";


//Custom Components
import { getOwnerList } from "../../service/LoginService";
import OwnerList from './OwnerList'


const { Search } = Input;

class Admin extends Component {
  state = { showPopup: false,
            
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  

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
          <Col span={6} />
          <Col className="navbar-right" span={10}>
            <Search
              placeholder="Enter owner id"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
              onClick={this.finOwnr}                                                                                              
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6} style={{ paddingTop: 30 }}>
            <OwnerList/>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Admin;
