import React from "react";
import "./App.css";

//react-router components
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Custom components
import Form from "./components/login-page/Form";
import Customer from "./components/customer-dashboard/Customer";
import Owner from "./components/owner-dashboard/Owner";
import Admin from "./components/admin-page/Admin";
import Errorpage from "./components/login-page/ErrorPage";
import { ProtectedRoute } from "./service/ProtectedRoute";
import ReactMap from "./components/Map/ReactMap";

function App() {
  return (
    /*<div >
    <ReactMap/>
    </div>*/
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Form} exact />
          {/*<ProtectedRoute  path="/admin" component={Admin} />
          <ProtectedRoute  path="/customer" component={Customer} />
          <ProtectedRoute  path="/owner" component={Owner} />*/}
          <Route  path="/admin" component={Admin} />
          <Route  path="/customer" component={Customer} />
          <Route path="/owner" component={Owner} />
          <Route path="**" component={Errorpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
