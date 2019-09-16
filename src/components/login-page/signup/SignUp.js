import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Tooltip } from "antd";
import { registerCustomer } from "../../../service/CustomerService";
import { withFormik, Form as FormikForm, Field as FormikField } from "formik";
import * as Yup from "yup";
import "./signup.css";

const FormItem = Form.Item;

const SignUpForm = ({
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
      <div className="container">
        <div className="box-controller">
          <div className="controller">
            Sign Up
            <h6 style={{color:"red",fontSize:13}}>* Registration is for Customers Only</h6>

            </div>
        </div>
        <Form className="login-form">
          <FormikForm onSubmit={handleSubmit}>
            <FormItem>
              <FormikField
                render={({ field }) => (
                  <Input
                    name="username"
                    className="forminput"
                    placeholder="Enter your Registration Number"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {touched.username && errors.username && (
                <h5 className="errors">{errors.username}</h5>
              )}
            </FormItem>

            <FormItem>
              <FormikField
                render={({ field }) => (
                  <Input
                    name="email"
                    placeholder="Enter your email"
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {touched.email && errors.email && (
                <h5 className="errors">{errors.email}</h5>
              )}
            </FormItem>

            <FormItem help={errors.touched && errors.email ? errors.email : ""}>
              <FormikField
                render={({ field }) => (
                  <Input
                    name="phone"
                    placeholder="Enter your contact number"
                    prefix={
                      <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {touched.phone && errors.phone && (
                <h5 className="errors">{errors.phone}</h5>
              )}
            </FormItem>

            <FormItem>
              <FormikField
                render={({ field }) => (
                  <Input.Password
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

            <FormItem>
              <FormikField
                name="confirmPassword"
                render={({ field }) => (
                  <Input.Password
                    type="password"
                    placeholder="Confirm your password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                  />
                )}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <h5 className="errors">{errors.confirmPassword}</h5>
              )}
            </FormItem>

            <FormItem>
              <Button
                htmlType="submit"
                type="primary"
                disabled={isSubmitting}
                block
              >
                Submit
              </Button>
            </FormItem>
          </FormikForm>
        </Form>
      </div>
    </div>
  );
};

const SignUp = withFormik({
  mapPropsToValues({ username, email, phone, password, confirmPassword }) {
    return {
      username: username || "",
      email: email || "",
      phone: phone || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("*username is required"),
    //.matches(),
    email: Yup.string()
      .required("*Email is required")
      .email("*invalid email"),
    phone: Yup.string()
      .required("*contact number is required")
      .matches(
        /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
        "*invalid contact number"
      ),
    password: Yup.string()
      .required("*Password is required")
      .min(6, "*password must be at least 6 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "*Passwords must match"
    )
  }),

  validateOnChange: true,
  validateOnBlur: true,

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      console.log("Form values", values);
      //create request object
      const signUpRequest = {
        username: values.username,
        email: values.email,
        phone: values.phone,
        password: values.password
      };
      // save user
      registerCustomer(signUpRequest);
      setSubmitting(false);
    }, 2000);
  }
})(SignUpForm);

export default SignUp;
