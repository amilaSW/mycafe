import React, { Component } from 'react';

//axios
import Axios from 'axios'

//react-bootstrap
import { Table } from "react-bootstrap";

//ant-design
import { Popconfirm,Button,Row,Col } from "antd";

import CreateItemForm from './CreateItemForm'




class SecondaryFood extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }

  refreshList() {
    Axios.get("http://localhost:8080/item/getAll")
   .then(response => {
     console.log(response.data);
     this.setState({items: response.data})
   })
   .catch(err => console.log(err))
  
    
  }

  async handleDelete (key)  {
    await Axios.delete('http://localhost:8080/item/delete/'+key)
    let itemsCopy = this.state.items 
    for (let i = 0; i < itemsCopy.length; i++) {
      let item = itemsCopy[i]
      if (item.id === key) {        
        itemsCopy.splice(i, 1)  
        break                     
      }
    }
    this.setState({items: itemsCopy}) 
  };

  render() {
    const { items } = this.state;

    return (
      <div style={{overflowY:"scroll"}}>
      <CreateItemForm/>
      <Table className="mt-4" striped hover size="sm" style={{backgroundColor:"white"}}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.catagory}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                
                <Row>
                  <Col span={6} offset={6}></Col>
                  <Col span={6} offset={3}>

                  <Popconfirm
                  key={item.id}
                  title="Sure to delete?"
                  onConfirm={() => this.handleDelete(item.id)}
                >
                  <Button
                    //onClick={() => this.handleDelete(item.id)}
                    type="danger"
                    size="small"
                    style={{ marginRight: 16 }}
                  >
                    Delete
                  </Button>
          </Popconfirm>

                  </Col>
                

                               
               
          </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      

      
    </div>
    );
  }
}

export default SecondaryFood;

