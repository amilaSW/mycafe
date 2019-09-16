import React from "react";
import ReactDOM from "react-dom";

//ant-design
import "antd/dist/antd.css";
import { Button, Modal, Form, Input, Select, Icon, Row, Col } from "antd";

//formik and yup
import {
  Formik,
  withFormik,
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage
} from "formik";
import * as Yup from "yup";

//Custom Components
import loginService from './../../service/LoginService'

const FormItem = Form.Item;
const { Option } = Select;

const EmailForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          okText="Request Reset Link"
          cancelText="Back to Sign In"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Formik
            initialValues={{
              email: ""
            }}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required")
            })}
            render={({
              errors,
              status,
              touched,
              values,
              handleChange,
              handleBlur
            }) => (
              <Form>
                <FormikForm style={{textAlign:"center"}}>
                  <h4>Did you forgot your password?</h4>
                  <p>
                    Enter your email address you're using for your account below
                    <br />
                    and we will send you a password reset link.{" "}
                  </p>

                  <FormItem>
                    {getFieldDecorator("email")(
                      <Input
                        name="email"
                        placeholder="Email"
                        prefix={
                          <Icon
                            type="mail"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        setFieldsValue={values.nic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}

                    {touched.email && errors.email && (
                      <h5 className="errors">{errors.email}</h5>
                    )}
                  </FormItem>
                </FormikForm>
              </Form>
            )}
          />
          
        </Modal>
      );
    }
  }
);

class ForgotPassWord extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);

      const forgotPasswordResetRequest = {
        
        email: values.email,
        
      };

      console.log(forgotPasswordResetRequest);

      loginService.ForgotPassWord(forgotPasswordResetRequest);

      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <a style={{color:"white"}}
        onClick={this.showModal}>forgot password</a>
        <EmailForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default ForgotPassWord;
