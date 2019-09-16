import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Tooltip, Modal } from "antd";
//import { loginUser } from "../../../service/LoginService";
import loginService from './../../../service/LoginService'
import { withFormik, Form as FormikForm, Field as FormikField } from "formik";
import * as Yup from "yup";
import "./signin.css";
import { Row, Col } from "antd";
import ForgotPassWord from '../ForgotPassword'
import axios from "axios";


const FormItem = Form.Item;

const SignInForm = ({
  props,
  values,
  errors,
  touched,
  setFieldTouched,
  setFieldValue,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  return (
    <div>
      <Form className="login-form">
        <FormikForm onSubmit={handleSubmit}>
          {/*<h2>Sign In</h2>*/}

          {/*<FormItem>
            <FormikField
              render={({ field }) => (
                <Input
                  type="text"
                  name="usernameOrEmail"
                  className="forminput"
                  placeholder="Username / Email"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  value={values.usernameOrEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
            />
            {touched.usernameOrEmail && errors.usernameOrEmail && (
              <h5 className="errors">{errors.usernameOrEmail}</h5>
            )}
          </FormItem>

          <FormItem>
            <FormikField
              render={({ field }) => (
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
            />
            {touched.password && errors.password && (
              <h5 className="errors">{errors.password}</h5>
            )}
          </FormItem>

          <Form.Item>
            <Row>
              <Col span={12}>
                <Checkbox>Remember me</Checkbox>
              </Col>
              <Col span={12}>
                <a className="login-form-forgot" href="#">
                  Forgot password
                </a>
              </Col>
            </Row>
          </Form.Item>

          <FormItem>
            <Button
              htmlType="submit"
              type="primary"
              disabled={isSubmitting}
              block
            >
              Login
            </Button>
            </FormItem>*/}

          <Row>
            <Col className="col-style" span={10}>
              <FormItem>
                <FormikField
                  render={({ field }) => (
                    <Input
                      style={{ width: 200,marginBottom: "0px" ,}}
                      className="input-field ant-form-item"
                      size="small"
                      name="usernameOrEmail"
                      className="forminput"
                      placeholder="Username/Email"
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      value={values.usernameOrEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                />
                {/*touched.usernameOrEmail && errors.usernameOrEmail && (
                  <h5 className="errors">{errors.usernameOrEmail}</h5>
                )*/}
              </FormItem>
              <FormItem >
                <Checkbox style={{fontSize:12}} className="checkbox">Remember me</Checkbox>
              </FormItem>
            </Col>
            <Col className="col-style" span={10}>
              <FormItem>
                <FormikField
                  render={({ field }) => (
                    <Input.Password
                      className="input-field"
                      size="small"
                      name="password"
                      placeholder="Password"
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                />
                {/*touched.password && errors.password && (
                  <h5 className="errors ">{errors.password}</h5>
                )*/}
              </FormItem>
              <FormItem style={{}}>
                <ForgotPassWord className="login-form-forgot"/>
                {/*<a className="login-form-forgot" href="#">
                  <span style={{fontSize:12}}>Forgot password</span>
              </a>*/}
              </FormItem>
            </Col>
            <Col className="col-style" span={4}>
              <FormItem>
                <Button
                  style={{ backgroundColor: " #389e0d" }}
                  htmlType="submit"
                  type="primary"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </FormItem>
            </Col>
          </Row>
        </FormikForm>
      </Form>
    </div>
  );
};

const SignIn = withFormik({
  mapPropsToValues({ usernameOrEmail, password, visible }) {
    return {
      usernameOrEmail: usernameOrEmail || "",
      password: password || "",
      visible: false
    };
  },

  validationSchema: Yup.object().shape({
    usernameOrEmail: Yup.string().required("*username or email is required"),

    password: Yup.string().required("*Password is required")
  }),

  validateOnChange: true,
  validateOnBlur: true,

  handleSubmit(values, { resetForm, setErrors, setSubmitting,props }) {
    

    setTimeout(() => {
      console.log("Form values", values);
      //create request object
      const signInRequest = {
        usernameOrEmail: values.usernameOrEmail,
        password: values.password
      };

      loginService.login(signInRequest,()=>{
        var role = sessionStorage.getItem('role');

      console.log(role);

      if(role == "ADMIN"){
        props.history.push('/admin');
      }
      else if(role == "CUSTOMER"){
        props.history.push('/customer');

      }
      else if(role == "OWNER"){
        props.history.push('/owner');

      }
      else{
        props.history.push('/');

      }
      });

      //login user
      //loginUser(signInRequest);

    
      /*var role = sessionStorage.getItem('role');

      console.log(role);

      if(role == "ADMIN"){
        props.history.push('/admin');
      }
      else if(role == "CUSTOMER"){
        props.history.push('/customer');

      }
      else if(role == "OWNER"){
        props.history.push('/owner');

      }
      else{
        props.history.push('/');

      }*/


      setSubmitting(false);
    }, 2000);
  }
})(SignInForm);

export default withRouter(SignIn);
