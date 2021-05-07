import React from 'react'; 
import {NavLink} from 'react-router-dom'

const NavBar = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <div className="container-fluid">
          <NavLink className={`text-dark ${props.navClass}`} to={props.link}>{props.location}</NavLink>         
        </div>
      </nav>
    )
}

export default NavBar; 