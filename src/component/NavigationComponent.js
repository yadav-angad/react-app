import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavigationComponent extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      previousSelectedMenuItem: ''
    }
  }

  selectedMenu(id) {
    if (!!this.state.previousSelectedMenuItem) {
      document.getElementById(this.state.previousSelectedMenuItem).style.textDecoration = "none";
      this.highlightMenuItem(id);
    } else {
      this.highlightMenuItem(id);
    }
  }

  highlightMenuItem(id) {
    this.setState({previousSelectedMenuItem: id});
    document.getElementById(id).style.textDecoration = "underline";
  }

  render() {
    return (
        <div className="header4 displayFlexRow">
          <NavLink id="login" className="menuItem" to="/login" onClick={() => {
            this.selectedMenu("login");
          }} activeClassName="active">Login</NavLink>
          <NavLink id="about" className="menuItem" to="/about" onClick={() => {
            this.selectedMenu("about");
          }} activeClassName="active">About</NavLink>
          <NavLink id="home" className="menuItem" to="/" onClick={() => {
            this.selectedMenu("home");
          }} activeClassName="active">Home</NavLink>
          <NavLink id="employee" className="menuItem" to="/employee" onClick={() => {
            this.selectedMenu("employee");
          }} activeClassName="active">Employee</NavLink>
          <NavLink id="user" className="menuItem" to="/user" onClick={() => {
            this.selectedMenu("user");
          }} activeClassName="active">User</NavLink>
          <NavLink id="loadUserPost" className="menuItem" to="/loadUserPost" onClick={() => {
            this.selectedMenu("loadUserPost");
          }} activeClassName="active">LoadUserPost</NavLink>
          <NavLink id="userForm" className="menuItem" to="/userForm" onClick={() => {
            this.selectedMenu("userForm");
          }} activeClassName="active">User Form</NavLink>
          <NavLink id="ticTacToe" className="menuItem" to="/ticTacToe" onClick={() => {
            this.selectedMenu("ticTacToe");
          }} activeClassName="active">TicTacToe</NavLink>
        </div>
    );
  }
};

export default NavigationComponent;