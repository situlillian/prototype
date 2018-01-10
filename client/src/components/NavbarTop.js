import React from "react";
// import PropTypes from "prop-types";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavbarTop() {
  return (
    <nav className = "navbar navbar-default">
      <div className="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <NavLink to="/">
            <p className="logo">Safe Space</p>
          </NavLink>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
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
