import React from "react";
import {Link, NavLink} from "react-router-dom";

function NavbarTop() {
  return (
    <nav className = "navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/">
            <p className="logo">Safe Space</p>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink exact activeClassName="active" to="/"><p className="navText">Home</p></NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/state" ><p className="navText">View By State</p></NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about"><p className="navText">About</p></NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/create"><p className="navText">Add Shelter</p></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTop;
