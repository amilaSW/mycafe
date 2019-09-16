import React, { Component } from "react";

//ant-design
import { Row, Col } from "antd";
import { Input } from "antd";
import { Skeleton, Switch, Card, Icon, Avatar } from "antd";

import styled from "styled-components";

const { Search } = Input;
const { Meta } = Card;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  /*max-width: 20em;*/
  min-width: 20em;
  min-height: 20em;
  max-height: 30em;
  padding: 15px;
  box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.8);
  border-radius: 6px;
  background-color: aliceblue;
  margin: 3px;
`;

class Wallet extends Component {
  state = {
    loading: true,
    user: []
  };

  componentDidUpdate() {
    if (this.state.user != null) {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <Div>
        <Row>
          <Search
            placeholder="input Username/Reg.No"
            onSearch={value => console.log(value)}
            enterButton
          />
          <div>
            <Card
              style={{ width: 270, marginTop: 16 }}
              actions={[
                
                  <div>
                    <Row style={{height:20}}>
                      <Col offset={6} span={6}>
                        <Icon type="setting" key="setting" />
                      </Col>
                      <Col offset={0} span={2}>
                        Recharge
                      </Col>
                    </Row>
                  </div>
                  ,
                  <div>
                    <Row style={{height:20}}>
                      <Col offset={6} span={6}>
                        <Icon type="edit" key="edit" />,
                      </Col>
                      <Col offset={0} span={2}>
                        Edit
                      </Col>
                    </Row>
                  </div>
               
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={<Icon type="user" />}
                  title="User Details"
                  description={
                    <div>
                      UserName : {this.state.user.username}
                      <br />
                      Email : {this.state.user.email}
                      <br />
                      Balance : {this.state.user.balance}
                      <br />
                    </div>
                  }
                />
              </Skeleton>
            </Card>
          </div>
        </Row>
      </Div>
    );
  }
}

export default Wallet;
