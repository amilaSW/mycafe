import axios from 'axios'

const API_URL = "http://localhost:8080/api/auth";

export function registerCustomer(signUpRequest) {
    console.log(signUpRequest);
    axios.post(API_URL + "/signup/customer", signUpRequest)
    .then(function (response) {
      alert("Registration successful!");
      console.log(response);
    })
    .catch(function (error) {
      alert("Error in Registration!");
      console.log(error);
    })
    .finally(function () {
      // always executed
    });;
  }