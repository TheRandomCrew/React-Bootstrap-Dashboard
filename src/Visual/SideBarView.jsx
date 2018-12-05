import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'

const SideBarView = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark pl-0" id="sidebar" role="navigation">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Getting Started</Nav.Link>
                <Nav.Link eventKey="link-1">Charts</Nav.Link>
                <Nav.Link eventKey="link-2">News</Nav.Link>
                <Nav.Link eventKey="link-2">Tables</Nav.Link>
                <Nav.Link eventKey="link-2">Menus</Nav.Link>
                <Nav.Link eventKey="link-2">Typography</Nav.Link>
                {/* <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link> */}
                <NavDropdown title="Others" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
}

export default SideBarView
