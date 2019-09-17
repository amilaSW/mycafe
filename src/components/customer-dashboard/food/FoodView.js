import React, { Component } from "react";

//ant-design
import { Tabs,Row,Col} from "antd";

//custom imports
import MainRecipe from "./MainRecipe";
import SecondaryFood from "./SecondaryFood";
import styled from "styled-components";

//images
import Main from '../img/main.png'
import Second from '../img/second.png'

const { TabPane } = Tabs;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  /*max-width: 20em;*/
  min-width: 20em;
  min-height: 36em;
  max-height: 36em;
  box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
  border-radius: 6px;
  background-color: aliceblue;
  margin: 3px;
  padding:5px;
`;

const imgStyle = {
    height:'20px',
    width:'20px'
  };

class FoodView extends Component {
  state = {};
  render() {
    return (
      <Div className="">
        <Tabs defaultActiveKey="1">
          <TabPane 
            tab={
              <span >
                  <Row>
                      <Col span={12}>
                      <img src={Main} style={imgStyle}/>
                      </Col>
                      <Col span={12}>
                      <h6>Main Recipe</h6>
                      
                      </Col>
                  </Row>
                
                
              </span>
            }
            key="1"
          >
            <MainRecipe />
          </TabPane>
          <TabPane
            tab={
              <span>
               <Row>
                      <Col span={12}>
                      <img src={Second} style={imgStyle}/>
                      </Col>
                      <Col span={12}>
                      <h6>Secondary Foods</h6>
                      </Col>
                  </Row>
              </span>
            }
            key="2"
          >
            <SecondaryFood />
          </TabPane>
        </Tabs>
      </Div>
    );
  }
}

export default FoodView;
