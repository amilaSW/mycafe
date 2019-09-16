import React, { Component } from "react";

//React-scroll
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
//ant-design
import { Row ,Col} from 'antd';


//css
import styled from "styled-components";

import FeedBack from "./FeedBack";


const Container = styled.div`
display: flex;
flex-direction, column;
max-width: 20em;
min-width: 21.25em;
min-height: 35.5em;
max-height: 35.5em;
box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
border-radius: 6px;
padding: 24px;
background-color: aliceblue;
margin: 5px;
overflow-y: scroll;
`;

const Header =  styled.div`
visibility: visible;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
min-width: 8em;
max-width: 20em;
height: 27px;
-webkit-box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
margin-bottom: 10px;
align-items: center;
transition: visibility 0.5s ease-out;
background-color: aliceblue;
text-align: center;
`;


const HeaderContent = styled.div`
flex: 1;
text-align: center;
font-size: 15px;
font-weight: bold;
color: #28a745;
line-height: 2;
cursor: pointer;
`;


class FeedBackList extends Component {
  state = {};
  render() {
    return (
      <Container>
      <Row>
        
        <div>
          <Header style={{paddingLeft:8}} className="header-container"><h6>Breakfast</h6></Header>
          <FeedBack />
          <FeedBack />
          <FeedBack />
        </div>
        <div>
        <Header style={{paddingLeft:8}} className="header-container"><h6>Lunch</h6></Header>
          
          <FeedBack />
          <FeedBack />
          <FeedBack />
        </div>
        <div>
        <Header style={{paddingLeft:8}} className="header-container"><h6>Dinner</h6></Header>
          
          <FeedBack />
          <FeedBack />
          <FeedBack />
        </div>
      </Row>
      </Container>

    );
  }
}

export default FeedBackList;
