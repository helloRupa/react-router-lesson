import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="btn btn-info" to="/glasses">Glasses</NavLink>
        <NavLink className="btn btn-info" to="/manager">Manager</NavLink>
      </nav>
    );

}

export default NavBar;
