import React, { Component } from 'react';

//ant-design
import { Row ,Col} from 'antd';

//css
import '../owner.css'

import Image from '../img/cmnt_img.png'

class FeedBack extends Component {
    state = { 
        image :{Image},
        mealTime:"Lunch",
        comment:"Today meal is very nice.",
     }
    render() { 
        return ( 
            <Row style={{marginTop:5}}>
                <Col span={4}>
                    <img src={Image} style={{height:40,width:40}}/>
                </Col>
                <Col span={18} offset={2} style={{textAlign:"left"}}>
                    <span style={{fontWeight:"bold"}}>{this.state.mealTime}</span><br/>
                    {this.state.comment}
                </Col>

            </Row>
         );
    }
}
 
export default FeedBack;