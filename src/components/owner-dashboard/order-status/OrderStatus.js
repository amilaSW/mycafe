import React, { Component } from "react";

//react-boostrap
import { Button, Badge } from "react-bootstrap";

//ant-design
import { Row, Col } from "antd";

//css
import "./orderStatus.css";

class OrderStatus extends Component {
  state = {};
  render() {
    return (
      <div className="orderStatus-container">
        <Row style={{borderBottom:"solid"}}>
          <h5>Science Canteen</h5>
        </Row>
        <Row >
            
          <Col span={8} >
            <Button variant="primary">
              Orders <Badge variant="light"><span style={{fontSize:20}}>50</span></Badge>
              <span className="sr-only">unread messages</span>
            </Button>
          </Col>
          <Col span={8} >
            <Button variant="success">
              Delivered <Badge variant="light"><span style={{fontSize:20}}>20</span></Badge>
              <span className="sr-only">unread messages</span>
            </Button>
          </Col>
          <Col span={8} >
            <Button variant="danger">
              Pending <Badge variant="light"><span style={{fontSize:20}}>30</span></Badge>
              <span className="sr-only">unread messages</span>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderStatus;
