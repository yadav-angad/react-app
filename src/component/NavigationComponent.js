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
          <NavLink id="about" className="menuItem" to="/about" onClick={() => {
            this.selectedMenu("about");
          }}>About</NavLink>
          <NavLink id="home" className="menuItem" to="/" onClick={() => {
            this.selectedMenu("home");
          }}>Home</NavLink>
          <NavLink id="employee" className="menuItem" to="/employee" onClick={() => {
            this.selectedMenu("employee");
          }}>Employee</NavLink>
          <NavLink id="user" className="menuItem" to="/user" onClick={() => {
            this.selectedMenu("user");
          }}>User</NavLink>
          <NavLink id="loadUserPost" className="menuItem" to="/loadUserPost" onClick={() => {
            this.selectedMenu("loadUserPost");
          }}>LoadUserPost</NavLink>
          <NavLink id="userForm" className="menuItem" to="/userForm" onClick={() => {
            this.selectedMenu("userForm");
          }}>User Form</NavLink>
        </div>
    );
  }
};

export default NavigationComponent;