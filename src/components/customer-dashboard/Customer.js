import React, { Component } from "react";

//custom imports
import Header from "./header/Header";
import Crowd from "./crowd/Crowd";
import Feedback from "./feedback/Feedback";
import Directions from "./directions/Directions";
import FoodView from "./food/FoodView";

//ant-design
import { Row, Col } from "antd";

class Owner extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col span={6}>
            <Row>
              <Col>
                <Crowd />
              </Col>
              <Col>
                <Feedback />
              </Col>
              <Col>
                <Directions />
              </Col>
            </Row>
          </Col>
          <Col span={18}>
           <FoodView />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Owner;
