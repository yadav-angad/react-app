import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './css/App.css';
import './css/style.css'
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import About from "../../react-app/src/component/About";
import Home from "./controller/Home";
import EmployeeController from "./controller/EmployeeController";
import Error from "../../react-app/src/component/Error";
import UserController from "./controller/UserController";
import LoadUserPostController from "./controller/LoadUserPostController";
import ErrorHandling from "./exception/ErrorHandling";
import UserFormController from "./controller/UserFormController";
import UserData from "./component/UserData";
import TicTacToeController from "./controller/TicTacToeController";

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isLoggedIn: true
    }
  }

  render() {
    return (
        <div className="rootContainer">
          <ErrorHandling>
            <HeaderComponent headerName="FED Training"/>
            <Switch>
              <Route path="/login">
                {this.state.isLoggedIn ? (<Redirect to="/userForm" />) : (<Redirect to="/about" />)}
              </Route>
              <Route path="/about" component={About}/>
              <Route path="/" component={Home} exact/>
              <Route path="/employee" component={EmployeeController}/>
              <Route path="/user" component={UserController}/>
              <Route path="/loadUserPost" component={LoadUserPostController}/>
              <Route path="/userForm" component={UserFormController}/>
              <Route path="/userData/:id" component={UserData} />
              <Route path="/ticTacToe" component={TicTacToeController} />
              <Route component={Error}/>
            </Switch>
            <FooterComponent/>
          </ErrorHandling>
        </div>
    );
  }
}

export default App;
