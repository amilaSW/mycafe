import axios from "axios";


const API_URL = "http://localhost:8080/api/auth";

class LoginService {

  constructor() {
   this.authenticated = false;
  } 
  
  
  login(signInRequest,callback){
    this.authenticated = true;
    axios
    .post(API_URL + "/signin", signInRequest)
    .then(function(response) {
      console.log(response);
      if(response==null){
        alert("invalid username and password");
      }
      else{
      sessionStorage.setItem('token',response.data.accessToken);
      sessionStorage.setItem('role',response.data.roleName);
      //this.state.authenticated = true;
      }
    })
    .catch(function(error) {
      console.log(error);
    });

    callback();
  }

  logout(callback){
    this.authenticated =false;   
     callback();
  }

  isAuthenticated(){
    return this.authenticated;
  }

  forgotPasswordRequest(forgotPasswordResetRequest){
    axios.post(API_URL + '/password-reset-request',forgotPasswordResetRequest)
    .then(function(response) {
      console.log(response);
      
      })
    .catch(function(error) {
      console.log(error);
    });
  }
  
}
 
export default new LoginService();

/*export async function loginUser(signInRequest) {
  axios
    .post(API_URL + "/signin", signInRequest)
    .then(function(response) {
      console.log(response);
      sessionStorage.setItem('token',response.data.accessToken);
      sessionStorage.setItem('role',response.data.roleName);
    })
    .catch(function(error) {
      console.log(error);
    });
}*/






