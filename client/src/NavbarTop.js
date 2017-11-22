import React from "react";
import PropTypes from "prop-types";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarTop = (props) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <Link to="/">
            <Navbar.Text className="text-uppercase">Home</Navbar.Text>
          </Link>
          <Link to="/state">
            <Navbar.Text className="text-uppercase">Browse by State</Navbar.Text>
          </Link>
          <Link to="/about">
            <Navbar.Text className="text-uppercase">About</Navbar.Text>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarTop.propTypes = {
};

export default NavbarTop;
