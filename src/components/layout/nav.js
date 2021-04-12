import React, { Component } from 'react';
import { IndexLink, Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="brand" href="/">Impressions Hair Design</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={3} href="/">
              Home
            </NavItem>
            <NavItem eventKey={1} href="contact">
              Contact
            </NavItem>
            <NavItem eventKey={2} href="about-us">
              About Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
