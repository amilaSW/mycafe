import React from "react";
import { Route ,Redirect} from "react-router-dom";
import loginService from './LoginService'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
          if(loginService.isAuthenticated()){
            return <Component {...props} />;
          }
          else{
            return <Redirect
                to={
                    {
                        pathname : "/",
                        state : {
                            from : props.location,
                        }
                    }
                }
            />
          }
      }}
    />
  );
};
