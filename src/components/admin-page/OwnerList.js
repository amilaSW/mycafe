import React, { Component } from "react";

//axios
import axios from 'axios'

//react-bootstrap
import { Table } from "react-bootstrap";

//ant-design
import { Popconfirm,Button,Row,Col } from "antd";

//Custom Coponents
import CreateOwnerForm from './CreateOwnerForm'
import EditOWnerForm from './EditOwnerForm'
import {getOwnerList} from '../../service/AdminService'

axios.defaults.headers.common = {'Authorization': `Bearer ${sessionStorage.getItem('token')}`};


class OwnerList extends Component {
  state = {
    owners: [],
  };

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate(){
   this.refreshList();
  }

  refreshList() {
    
    axios.get("http://localhost:8080/owner/getAll")
   .then(response => {
     console.log(response);
    this.setState({owners: response.data});
   })
   .catch(err => console.log(err))
  }

  async handleDelete (key)  {
    await axios.delete('http://localhost:8080/owner/delete/'+key)
    let ownersCopy = this.state.owners 
    for (let i = 0; i < ownersCopy.length; i++) {
      let owner = ownersCopy[i]
      if (owner.id === key) {        
        ownersCopy.splice(i, 1)  
        break                     
      }
    }
    this.setState({owners: ownersCopy}) 
  };

  render() {
    const { owners } = this.state;

    return (
      <div>
      <Table className="mt-4" striped hover size="sm" style={{backgroundColor:"white"}}>
        <thead>
          <tr>
            <th>Canteen/Faculty</th>
            <th>Name</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {owners.map(owner => (
            <tr key={owner.id}>
              <td>{owner.canteen}</td>
              <td>{owner.name}</td>
              <td>
                
                <Row>
                  <Col span={6} offset={6}><EditOWnerForm  key={owner.id} /></Col>
                  <Col span={6} offset={3}>

                  <Popconfirm
                  key={owner.id}
                  title="Sure to delete?"
                  onConfirm={() => this.handleDelete(owner.id)}
                >
                  <Button
                    //onClick={() => this.handleDelete(owner.id)}
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
      
      <CreateOwnerForm/>

      
    </div>
    );
  }
}

export default OwnerList;
