import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

const NavBarView = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><i class="fa fa-tachometer-alt " ></i> RB DASHBOARD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link eventKey={1} href="#features">Features</Nav.Link>
                    <Nav.Link eventKey={2} href="#pricing">Pricing</Nav.Link>
                    <Nav.Link eventKey={3} href="#gettingStarted">
                        Getting Started
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <NavDropdown title="Components" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#components/charts">Charts</NavDropdown.Item>
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
        // <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
        //     <div className="flex-row d-flex">
        //         <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <a className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Admin Template</a>
        //     </div>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="navbar-collapse collapse" id="collapsingNavbar">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="//www.codeply.com">Link</a>
        //             </li>
        //         </ul>
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}
export default NavBarView