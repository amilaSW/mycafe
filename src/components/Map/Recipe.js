import React, { Component } from "react";

import { Card ,Button } from "antd";

class Recipe extends Component {
  state = {};
  render() {
    return (
      <Card
        title={this.props.canteen}
        extra={<Button type="primary">Sign In to Order</Button>}
        style={{ width: 300 }}
      >
        <h6>Meal Time :Lunch</h6>
        <h6>Curry List :</h6>
        <p>Curry 1</p>
        <p>Curry 1</p>
        <p>Curry 1</p>
      </Card>
    );
  }
}

export default Recipe;
