import React, { Component } from "react";

import styled from "styled-components";

/*https://reactjsexample.com/a-react-component-for-showing-speedometer-like-gauge-using-d3/ */
import ReactSpeedometer from "react-d3-speedometer";

//css
 const Container = styled.div`
  display: flex;
  flex-direction, column;
  max-width: 20em;
  min-width: 21.25em;
  min-height: 12.5em;
  max-height: 12.5em;
  box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
  border-radius: 6px;
  padding: 24px;
  background-color: aliceblue;
  margin: 5px;
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


class Crowd extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header className="header-container">
          <HeaderContent className="header">Crowd</HeaderContent>
        </Header>
        <ReactSpeedometer
          id="speedMeter"
          maxValue={200}
          value={133}
          needleColor="blue"
          startColor="green"
          middleColor="yellow"
          endColor="red"
          needleTransitionDuration={24000}
          needleTransition="easeElastic"
          needleHeightRatio={0.5}
          maxSegmentLabels={5}
          segments={500}
          width={150}
          height={100}
        />
      </Container>
    );
  }
}


export default Crowd;
