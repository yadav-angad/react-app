import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationComponent = () => {
  return (
      <div className="header4">
        <NavLink className="menuItem" to="/about">About</NavLink>
        <NavLink className="menuItem" to="/">Home</NavLink>
        <NavLink className="menuItem" to="/employee">Employee</NavLink>
        <NavLink className="menuItem" to="/user">User</NavLink>
      </div>
  );
}

export default NavigationComponent;