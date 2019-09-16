import React, { Component } from "react";

import { Result, Button } from "antd";

import {withRouter} from 'react-router-dom';

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <div >
        <Result
          style={{height:750,width:"100%",backgroundColor:"white"}}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" onClick={()=>{
                this.props.history.push("/");
        }}>Back Home</Button>}
        />
      </div>
    );
  }
}

export default withRouter(ErrorPage);
