import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

const SideBarView = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark pl-0" id="sidebar" role="navigation">
            <Nav defaultActiveKey="/home" className="flex-column" >
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav.Link href="/home">Getting Started</Nav.Link>
                <Nav.Link eventKey="Charts">Charts</Nav.Link>
                <Nav.Link eventKey="News">News</Nav.Link>
                <Nav.Link eventKey="Tables">Tables</Nav.Link>
                <Nav.Link eventKey="Menus">Menus</Nav.Link>
                <Nav.Link eventKey="Typography">Typography</Nav.Link>
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
