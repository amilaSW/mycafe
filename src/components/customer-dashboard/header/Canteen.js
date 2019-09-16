import React, { Component } from 'react';

//ant-design
import "antd/dist/antd.css";
import { Form , Select} from "antd";

const { Option } = Select;


class Canteen extends Component {
    state = {  }
    render() { 
        return ( 
            <Form>
                <Select
            size="small"
            name="catagory"
            showSearch
            style={{ width:200,backgroundColor:"#28a745",color:"#28a745"}}
            placeholder="Canteen"
            optionFilterProp="children"
            defaultValue="Select Canteen"
            //onChange={handleChange}
            
            //onBlur={handleBlur}
            
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Science">Science Canteen</Option>
            <Option value="Art">Art Canteen</Option>
            <Option value="Fisheries">Fisheries Canteen</Option>
            <Option value="Santana">Santana Canteen</Option>
          </Select>
            </Form>
         );
    }
}
 
export default Canteen;