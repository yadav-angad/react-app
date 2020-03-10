import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/App.css';
import './css/style.css'
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import About from "../../react-app/src/component/About";
import Home from "../../react-app/src/component/Home";
import EmployeeController from "./controller/EmployeeController";
import Error from "../../react-app/src/component/Error";
import UserController from "./controller/UserController";
import LoadUserPostController from "./controller/LoadUserPostController";
import ErrorHandling from "./exception/ErrorHandling";
import UserFormController from "./controller/UserFormController";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter basename="/">
          <div className="rootContainer">
            <ErrorHandling>
              <HeaderComponent headerName="FED Training"/>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/" component={Home} exact/>
                <Route path="/employee" component={EmployeeController}/>
                <Route path="/user" component={UserController}/>
                <Route path="/loadUserPost" component={LoadUserPostController}/>
                <Route path="/userForm" component={UserFormController}/>
                <Route component={Error}/>
              </Switch>
              <FooterComponent/>
            </ErrorHandling>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
