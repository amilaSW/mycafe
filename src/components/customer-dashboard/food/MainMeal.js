import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import MealCurry from "./MealCurry";
import { Row, Col } from "react-bootstrap";
import "./MainMeal.css";
import Scrollspy from "react-scrollspy";

class MainMeal extends Component {
  render() {
    return (
      <div id="mainMealContent">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <MealCurry/>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div>
                    <div>
                      <section id="section-1">section 1</section>
                      <section id="section-2">section 2</section>
                      <section id="section-3">section 3</section>
                    </div>

                    <Scrollspy
                      items={["section-1", "section-2", "section-3"]}
                      currentClassName="is-current"
                    >
                      <li>
                        <a href="#section-1">section 1</a>
                      </li>
                      <li>
                        <a href="#section-2">section 2</a>
                      </li>
                      <li>
                        <a href="#section-3">section 3</a>
                      </li>
                    </Scrollspy>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>Lakshan</div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default MainMeal;
