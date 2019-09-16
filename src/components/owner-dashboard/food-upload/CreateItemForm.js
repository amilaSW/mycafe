import React from "react";
import ReactDOM from "react-dom";

//ant-design
import "antd/dist/antd.css";
import { Button, Modal, Form , Input ,Select,Icon,Row,Col} from "antd";

//formik and yup
import { Formik,withFormik, Form as FormikForm, Field as FormikField ,ErrorMessage} from "formik";
import * as Yup from "yup";

//Custom Components
//import { registerOwner } from "../../service/DataService";


const FormItem = Form.Item;
const { Option } = Select;


const AddItemForm = Form.create()(
  class extends React.Component {
   

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      };

        
      return (
        <Modal
          visible={visible}
          title="Add New Item"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Formik
                initialValues={{
                    itemName: '',
                    catagory: null,
                    price: 0,
                    quantity:'',
                    
                }}

                validateOnChange = {true}
                validateOnBlur = {true}

                validationSchema={Yup.object().shape({
                    itemName: Yup.string()
                        .required('Name is required'),
                    catagory: Yup.string()
                        .required('select one catagory'),
                    price: Yup.number()
                        .required('Price is required'),
                    
                })}
                /*onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}*/
                render={({ errors, status, touched,values,handleChange,handleBlur }) => (
                    <Form {...formItemLayout} style={{ textAlign: "left" }} >
                    <FormikForm>
                       
            <FormItem label="Name">
            {getFieldDecorator("itemName")(
                
                    
                  <Input
                    name="itemName"
                    className="forminput"
                    placeholder="Name"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    setFieldsValue={values.ownerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />)}

        
              {touched.itemName && errors.itemName && (
                <h5 className="errors">{errors.itemName}</h5>
              )}
            </FormItem>
            <FormItem label="Catgory">
            
              {getFieldDecorator("catagory")(
                
                <Select
            name="catagory"
            showSearch
            style={{ }}
            placeholder="Select a catagory"
            optionFilterProp="children"
            onChange={handleChange}
            
            onBlur={handleBlur}
            
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Buns">Buns</Option>
            <Option value="Yogurt">Yogurt</Option>
            <Option value="Drinks">Drinks</Option>
            <Option value="Sweets">Sweets</Option>
          </Select>)}
                     
            </FormItem>
            <FormItem label="Price">
            {getFieldDecorator("price")(
                
                    
                  <Input
                    name="price"
                    className="forminput"
                    placeholder="Price"
                    prefix={
                      <Icon type="money-collect" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    setFieldsValue={values.ownerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />)}

        
              {touched.price && errors.price && (
                <h5 className="errors">{errors.price}</h5>
              )}
            </FormItem>
            <FormItem label="Quantity">
            {getFieldDecorator("quantity")(
                
                    
                  <Input
                    name="quantity"
                    className="forminput"
                    placeholder="Quantity"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    setFieldsValue={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />)}

        
              {touched.quantity && errors.quantity && (
                <h5 className="errors">{errors.quantity}</h5>
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

        //registerOwner(registerRequest);

        


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
          Add Item
        </Button>
        <AddItemForm
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