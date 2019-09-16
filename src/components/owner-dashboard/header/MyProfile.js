import React from 'react';

import {withRouter} from 'react-router-dom'
import loginService from '../../../service/LoginService'


//ant-design
import { Menu, Dropdown, Icon, Row, Col, Button, Badge } from "antd";


const Profile =(props) => (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          My Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
        Employee Management      </a>
      </Menu.Item>
      <Menu.Item>
        <Button
          size="small"
          style={{ backgroundColor: "#28a745", color: "white" }}
          onClick = {() => {
            loginService.logout(()=>{
              props.history.push("/");
              sessionStorage.clear();
              
            });
          }}
        >
          Sign Out
        </Button>
      </Menu.Item>
    </Menu>
  );

  export default withRouter(Profile);