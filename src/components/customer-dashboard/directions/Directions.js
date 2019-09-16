import React, { Component } from "react";

import styled from "styled-components";
import { Button, Row, Col } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction, column;
  max-width: 20em;
  min-width: 21.25em;
  min-height: 6.5em;
  max-height: 6.5em;
  box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
  border-radius: 6px;
  padding: 24px;
  background-color: aliceblue;
  margin: 5px;
`;

class Directions extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col span={24}>
            <p style={{ marginBottom: 10 }}>Get directions to Canteen</p>
          </Col>
          <Col span={24}>
            <Button type="primary">Click Here</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Directions;
