import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white ">
      <NavLink className={`text-dark navbar-brand`} to='/'> <img src={logo} alt="most loved logo"
        className="img-fluid w-50" /></NavLink>
      <div className="container-fluid">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className={`text-dark nav-link mr-3 `} to='/'>Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`text-dark nav-link mr-3 `} to='/result'>Summary</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar;