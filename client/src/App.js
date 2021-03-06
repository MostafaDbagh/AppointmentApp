import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthenticateUser from './components/Authenticate';

const App = () => {
  return (
    <div style={{ maxWidth: "60rem", margin: "0 auto" }}>

      <GlobalProvider>
        <Router>
          <Switch>
             <Route exact path="/" component={AuthenticateUser}/>
             <Route exact path="/app" component={Home} /> 
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App

//  +user.time.split(':')[0]>=12 ?`${+user.time.split(':')[0] -12 +":"+user.time.split(':')[1]} Pm`:`${user.time} Am` }