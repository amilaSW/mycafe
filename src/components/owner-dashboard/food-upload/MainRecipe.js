import React, { Component } from "react";

//ant-design
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Input
} from "antd";

const { Option } = Select;

class MainRecipe extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    return (
      <Form
        {...formItemLayout}
        onSubmit={this.handleSubmit}
        style={{ textAlign: "left" }}
      >
        <Form.Item label="Meal Time" hasFeedback>
          <Select name="mealTime" placeholder="Meal Time">
            <Option value="breakfast">Breakfast</Option>
            <Option value="lunch">Lunch</Option>
            <Option value="dinner">Dinner</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Catagory">
          <Radio.Group name="mealCatagory">
            <Radio.Button value="Rice">Rice</Radio.Button>
            <Radio.Button value="Fried_Rice">Fried Rice</Radio.Button>
            <Radio.Button value="Noodles">Noodles</Radio.Button>
            <Radio.Button value="Bread">Bread</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Curries">
          <Checkbox.Group style={{ width: "100%" }}>
            <Row>
            <Col span={8}>
                <Checkbox value="Egg">Egg</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Fish">Fish</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Chicken">Chicken</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Dhal">Dhal</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Sambal">Sambal</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Potato">Potato</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Pumpkin">Pumpkin</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Cabbage">Cabbage</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="Add New Curry">
          <Input placeholder="Add Curry Name" />
        </Form.Item>

        <Row>
          <Col offset={8} span={6}>
            <Form.Item>
              <Button block type="primary" htmlType="reset">
                Reset
              </Button>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>

        <Row />
      </Form>
    );
  }
}

export default MainRecipe;
