import React, { Component } from "react";
import ReactMap from "./ReactMap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction, column;
  //max-width: 20em;
  min-width: 21.25em;
  min-height: 12.5em;
  //max-height: 12.5em;
  box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
  border-radius: 6px;
  padding: 24px;
  background-color: aliceblue;
  margin: 5px;
`;

class Map extends Component {
  state = {};
  render() {
    return (
      /*<Container style={{ margin: 10 }}>
        {/*<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4099440712284!2d80.57394571464349!3d5.938097431339199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1391b4a29e707%3A0xd54277175e326bc2!2sUniversity%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1567221574946!5m2!1sen!2slk"
          width="850"
          height="450"
          frameborder="0"
          style={{border:10}}
          allowfullscreen=""
        ></iframe>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1u15IB8RcVbvFH34F3ndDopuGIaGAr1al"
          width="950"
          height="480"
        ></iframe>
      </Container>*/
      <Container>
        <ReactMap />
      </Container>
    );
  }
}

export default Map;
