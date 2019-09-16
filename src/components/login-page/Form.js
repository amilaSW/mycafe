import React, { Component } from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Map from "../Map/Map";
import { Row, Col } from "antd";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import "./form.css";


class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            {/*<Map />*/}
          </Col>
          <Col
            span={8}
            style={{ paddingTop: 60, paddingRight: 80, paddingBottom: 40 }}
          >
            <SignUp />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form;
