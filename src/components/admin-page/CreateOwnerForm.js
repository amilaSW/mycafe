import React from "react";
import ReactDOM from "react-dom";

//ant-design
import "antd/dist/antd.css";
import { Button, Modal, Form , Input ,Select,Icon,Row,Col} from "antd";

//formik and yup
import { Formik,withFormik, Form as FormikForm, Field as FormikField ,ErrorMessage} from "formik";
import * as Yup from "yup";

//Custom Components
import { registerOwner } from "../../service/AdminService";


const FormItem = Form.Item;
const { Option } = Select;


const AddOwnerForm = Form.create()(
  class extends React.Component {
   

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

        
      return (
        <Modal
          visible={visible}
          title="Add New Owner"
          okText="Add Owner"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Formik
                initialValues={{
                    ownerName: '',
                    nic: '',
                    email: '',
                    phone:'',
                    canteen:null,
                    tid:'',
                    password: '',
                    confirmPassword: ''
                }}

                validateOnChange = {true}
                validateOnBlur = {true}

                validationSchema={Yup.object().shape({
                    ownerName: Yup.string()
                        .required('Name is required'),
                    nic: Yup.string()
                        .required('NIC is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    phone: Yup.string()
                        .matches(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,'Contact Number is invalid')
                        .required('Contact Number is required'),
                    username: Yup.string()
                        .required('Username is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword:  Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                /*onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}*/
                render={({ errors, status, touched,values,handleChange,handleBlur }) => (
                    <Form >
                    <FormikForm>
                        Personal Details
            <FormItem>
            {getFieldDecorator("ownerName")(
                
                    
                  <Input
                    name="ownerName"
                    className="forminput"
                    placeholder="Name"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    setFieldsValue={values.ownerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />)}

        
              {touched.ownerName && errors.ownerName && (
                <h5 className="errors">{errors.ownerName}</h5>
              )}
            </FormItem>
            <FormItem>
            {getFieldDecorator("nic")(
                
                <Input
                    name="nic"
                    className="forminput"
                    placeholder="NIC"
                    prefix={
                      <Icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    setFieldsValue={values.nic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />)}

                {touched.nic && errors.nic && (
                <h5 className="errors">{errors.nic}</h5>
                )}

            </FormItem>
            <Row gutter={16}>
              <Col span={12}>
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
                    />)}

                {touched.email && errors.email && (
                    <h5 className="errors">{errors.email}</h5>
                  )}

            </FormItem>
              </Col>
              <Col span={12}>
              <FormItem>
            {getFieldDecorator("phone")(
                
                <Input
                        name="phone"
                        placeholder="Contact Number"
                        prefix={
                          <Icon
                            type="phone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        valuesetFieldsValue={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />)}
                      {touched.phone && errors.phone && (
                    <h5 className="errors">{errors.phone}</h5>
                  )}

            </FormItem>
              </Col>
            </Row>
            Authorization
            <Row gutter={16}>
              <Col span={12}>
              {getFieldDecorator("canteen")(
                
                <Select
            name="canteen"
            showSearch
            style={{ }}
            placeholder="Select a canteen"
            optionFilterProp="children"
            onChange={handleChange}
            
            onBlur={handleBlur}
            
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Science">Science Canteen</Option>
            <Option value="Santana">Santana Canteen</Option>
            <Option value="Art">Art Canteen</Option>
            <Option value="Fisheries">Fisheries Canteen</Option>
          </Select>)}
                     
              
              </Col>
              <Col span={12}>
              {getFieldDecorator("tid")(
                
                <Input
                        name="tid"
                        className="forminput"
                        placeholder="Tender Number"
                        prefix={
                          <Icon
                            type="number"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        setFieldsValue={values.tid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />)}
              </Col>
            </Row>
            <Row style={{marginTop:5}}>
            <FormItem>
            {getFieldDecorator("username")(
                
                <Input
                    name="username"
                    className="forminput"
                    placeholder="Username"
                    prefix={
                      <Icon
                        type="user-add"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    setFieldsValue={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />)}
                      {touched.username && errors.username && (
                    <h5 className="errors">{errors.username}</h5>
                  )}

            </FormItem>
            </Row>
            <FormItem>
            {getFieldDecorator("password")(
                
                <Input.Password
                type="password"
                name="password"
                placeholder="Password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                setFieldsValue={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />)}
                      {touched.password && errors.password && (
                    <h5 className="errors">{errors.password}</h5>
                  )}

            </FormItem>
            <FormItem>
            {getFieldDecorator("confirmPassword")(
                
                <Input.Password
                type="password"
                name="confirmPassword"
                placeholder="Password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                setFieldsValue={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />)}
                      {touched.confirmPassword && errors.confirmPassword && (
                    <h5 className="errors">{errors.confirmPassword}</h5>
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

class OwnerForm extends React.Component {
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

      const registerRequest = {
        name : values.ownerName,
        nic : values.nic,
        canteen : values.canteen,
        tid : values.tid,
        email: values.email,
        phone: values.phone,
        username: values.username,
        password: values.password
      };

      console.log(registerRequest);

        registerOwner(registerRequest);

        


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
        <Button type="primary"  onClick={this.showModal}>
          Add Owner
        </Button>
        <AddOwnerForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default OwnerForm;