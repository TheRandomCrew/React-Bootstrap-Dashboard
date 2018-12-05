import React from 'react'

const SideBarView = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li className="nav-item"><a className="nav-link" href="#">Overview</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</a>
                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                        <li className="nav-item"><a className="nav-link" href="">Report 1</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Report 2</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Export</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Snippets</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Flexbox</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Layouts</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Templates</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Themes</a></li>
            </ul>
        </div>
    )
}

export default SideBarView
