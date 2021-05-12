import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light  "> 
      <NavLink className={`text-dark navbar-brand`} to='/'>LOGO</NavLink>
      <div className="container-fluid">
        <ul className="navbar-nav ">
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