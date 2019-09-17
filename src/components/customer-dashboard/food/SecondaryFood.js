import React, { Component } from "react";

class SecondaryFood extends Component {
  render() {
    return (
      <div id="main">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th>Name</th>
              <th>Price (Rs.)</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>Yougurt</td>
              <td>35.00</td>
              <td>20</td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>Chocalate</td>
              <td>50.00</td>
              <td>40</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SecondaryFood;
