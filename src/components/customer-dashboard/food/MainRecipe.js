import React, { Component } from "react";

import Meal from './Meal'

import pic from './image/rice.jpg'


class MainRecipe extends Component {
  state = {};
  render() {
    return (
      <div>
        <Meal image={pic}/>
        <Meal image={pic}/>
        <Meal image={pic}/>
      </div>
    );
  }
}

export default MainRecipe;
