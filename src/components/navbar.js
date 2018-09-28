import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavCSS = {
    marginBottom: '0'
}

export default class NavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect style={NavCSS}>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#brand">Odysseus</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavDropdown eventKey={1} title="Account" id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1}>Login</MenuItem>
                    <MenuItem eventKey={1.2}>Create Account</MenuItem>
                </NavDropdown>
                <NavItem eventKey={2} href="#">
                    Logout
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
