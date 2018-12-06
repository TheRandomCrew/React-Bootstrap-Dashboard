import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Logo from "../Assets/react-icon-0.png"

const NavBarView = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand >
                <NavLink to="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Bootstrap-Dash
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link eventKey={1} href="#features">
                        <NavLink to="/features">Features</NavLink>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#pricing">Pricing</Nav.Link>
                    <Nav.Link eventKey={3} href="#gettingStarted">
                        Getting Started
                    </Nav.Link>
                </Nav>
                <Nav>

                    <NavDropdown title="Components" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#components/charts">
                            Charts
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#components/news">News</NavDropdown.Item>
                        <NavDropdown.Item href="#components/tables">Tables</NavDropdown.Item>
                        <NavDropdown.Item href="#components/menus">Menus</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#components/typography">Typography</NavDropdown.Item>
                        <NavDropdown.Item href="#components/others">Others</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey={4} href="#about">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBarView