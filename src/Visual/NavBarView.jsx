import React from 'react'

const NavBarView = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
            <div className="flex-row d-flex">
                <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Admin Template</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapsingNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="//www.codeply.com">Link</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBarView