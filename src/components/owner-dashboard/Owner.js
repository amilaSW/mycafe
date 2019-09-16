import React, { Component } from "react";

//custom imports
import Header from "./header/Header";
import Crowd from "./crowd/Crowd";
import FeedBackList from "./feedback/FeedBackList";
import OrderStatus from "./order-status/OrderStatus";
import FoodUpload from "./food-upload/FoodUpload";
import Wallet from "./wallet/Wallet";
import QRScanner from './qr-scanner/QRScanner'

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
            
            <Row style={{ msOverflowY: "auto" }}>
              <FeedBackList />
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <OrderStatus />
            </Row>
            <Row>
              <FoodUpload />
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              {/*<Wallet />*/}
              <QRScanner/>
            </Row>
            <Row>
              <Crowd />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Owner;
