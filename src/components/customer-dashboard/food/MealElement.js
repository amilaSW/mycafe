import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./MealElement.css";
import { Col, Row, Card, CardColumns } from "react-bootstrap";

class MealElement extends Component {
  render() {
    return (
      <Card border="secondary" text="dark" id="main">
        <Card.Header>
          <h4>Rice</h4>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col id="col">
              <Col>
                <div id="img">Image</div>
              </Col>
            </Col>
            <Col>
              <div>Dhal Curry</div>
              <div>Fish Curry</div>
              <div>Potato Curry</div>
            </Col>
            <Col>
              <Button variant="outline-success">Order Now</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default MealElement;
