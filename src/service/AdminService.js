import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth";

/*(function() {
    var token = sessionStorage.getItem('token');

    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
        /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['Authorization'];
        */
   /* }
})();*/

export function registerOwner(signUpRequest) {
    console.log(signUpRequest);
    axios.post(API_URL + "/signup/owner", signUpRequest)
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

export function getOwnerList()
{
    axios.get("http://localhost:8080/owner/getAll")
   .then(response => {
     console.log(response.data);
     //sessionStorage.setItem('ownerList',response.data) 
     return response.data;
   })
   .catch(err => console.log(err))
}
