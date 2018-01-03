import React from "react";
// import PropTypes from "prop-types";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarTop = (props) => {
  return (
    <Navbar>
      <Nav pullRight>
        <Link to="/">
          <Navbar.Text className="navText">Home</Navbar.Text>
        </Link>
        <Link to="/state">
          <Navbar.Text className="navText">Browse by State</Navbar.Text>
        </Link>
        <Link to="/about">
          <Navbar.Text className="navText">About</Navbar.Text>
        </Link>
        <Link to="/create">
          <Navbar.Text className="navText">Add Shelter</Navbar.Text>
        </Link>
      </Nav>
    </Navbar>
  );
};

// NavbarTop.propTypes = {};

export default NavbarTop;
