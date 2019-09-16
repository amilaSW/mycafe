import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Datetime from "react-datetime";

import styled from "styled-components";

import {Button} from 'antd' 

//ant-design
import "antd/dist/antd.css";
import { Select,Row,Col } from "antd";

const { Option } = Select;

const Container = styled.div`
  display: flex;
  flex-direction, column;
  max-width: 20em;
  min-width: 21.25em;
  min-height: 12.5em;
  //max-height: 12.5em;
  box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
  border-radius: 6px;
  padding: 24px;
  background-color: aliceblue;
  margin: 5px;
`;


class Feedback extends Component {
  state = { feed: null };

  handleChange = e => {
    e.preventDefault();
    this.setState({ feed: e.target.value });
  };
  clickBtn = e => {
    e.preventDefault();
    if (this.state.feed != null) {
      axios({
        method: "post",
        url: "http://localhost:8080/feed/add",
        data: { text: this.state.feed, date: <Datetime /> }
      })
        .then(response => {
          console.log(response);
          alert(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Container id="formFeedback">
        <Row>
        <Form>
          <Col span={24}>
          <Select
            size="small"
            name="catagory"
            showSearch
            style={{ width: 210, backgroundColor: "#28a745", color: "#28a745",marginBottom:10 }}
            placeholder="Canteen"
            optionFilterProp="children"
            defaultValue="Select MealTime"
            //onChange={handleChange}

            //onBlur={handleBlur}

            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Breakfast">Breakfast</Option>
            <Option value="Lunch">Lunch</Option>
            <Option value="Dinner">Dinner</Option>
          </Select>
          </Col>
          <Col span={24}>
          <textarea
            cols="30"
            rows="5"
            placeholder="Give your feedback"
            onChange={this.handleChange}
          />
          </Col>
          <Col span={24}>
          <Button type="primary" size="small" onClick={this.clickBtn} style={{ width: 210}}>
            Submit
          </Button>
          </Col>
        </Form>
        </Row>
      </Container>
    );
  }
}

export default Feedback;
