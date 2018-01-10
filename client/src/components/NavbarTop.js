import React from "react";
// import PropTypes from "prop-types";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarTop() {
  return (
  //   <Navbar>
  //   <Link to="/">
  //     <Navbar.Text className="logo">Safe Space Project</Navbar.Text>
  //   </Link>
  //   <Nav pullRight>
  //     <Link to="/">
  //       <Navbar.Text className="navText">Home</Navbar.Text>
  //     </Link>
  //     <Link to="/state">
  //       <Navbar.Text className="navText">Browse by State</Navbar.Text>
  //     </Link>
  //     <Link to="/about">
  //       <Navbar.Text className="navText">About</Navbar.Text>
  //     </Link>
  //     <Link to="/create">
  //       <Navbar.Text className="navText">Add Shelter</Navbar.Text>
  //     </Link>
  //   </Nav>
  // </Navbar>
  <nav className = "navbar navbar-default">
    <div className="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Link to="/">
          <p className="logo">Safe Space</p>
        </Link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to="/" className="navText">Home</Link>
          </li>
          <li>
            <Link to="/state" className="navText">By State</Link>
          </li>
          <li>
            <Link to="/about" className="navText">About</Link>
          </li>
          <li>
            <Link to="/create" className="navText">Add Shelter</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}

export default NavbarTop;
