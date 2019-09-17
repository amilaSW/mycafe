import React, { Component } from "react";

//ant-design
import { Checkbox, Button, Row, Col, Radio } from "antd";

class CurryList extends Component {
  state = {};
  render() {
    return (
      <Row style={{ backgroundColor: "white", margin: 10, minHeight: 100 }}>
        <Col span={24}>
          <Row style={{ padding: 10 }}>
            <Col span={12}>
              <h5>Curry List</h5>
            </Col>
            <Col span={12}>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="veg">Vegitable</Radio.Button>
                <Radio.Button value="nonVeg">Non-Vegitable</Radio.Button>
              </Radio.Group>{" "}
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Checkbox>Curry 1</Checkbox>
              <Checkbox>Curry 1</Checkbox>
              <Checkbox>Curry 1</Checkbox>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default CurryList;
