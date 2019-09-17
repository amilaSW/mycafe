import React, { Component } from "react";

//ant-design
import { Button, Row, Col,Radio } from "antd";

//styled
import styled from "styled-components";

import CurryList from "./CurryList";

class Meal extends Component {
  state = {};

  order() {}

  render() {
    return (
      <Row style={{ backgroundColor: "#C6F7DB", margin: 5,borderRadius:5 }}>
        <Col span={6}>
          <img
            src={this.props.image}
            style={{ width: 100, height: 100, margin: 10 }}
          />
        </Col>

        <Col span={12}>
          <CurryList />
        </Col>

        <Col span={6} style={{ verticalAlign: "center", paddingTop: 35 }}>
          <Col span={12}>
            <Button type="primary" onClick={this.order}>
              Add to Cart
            </Button>
          </Col>
          <Col span={12}>
            <Button type="danger" onClick={this.order}>
              Order Now
            </Button>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default Meal;
