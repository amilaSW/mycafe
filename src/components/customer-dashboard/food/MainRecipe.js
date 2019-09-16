import React, { Component } from "react";

import MainMeal from "./MainMeal";

class MainRecipe extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Main Recipe</h1>
        <MainMeal />
      </div>
    );
  }
}

export default MainRecipe;
