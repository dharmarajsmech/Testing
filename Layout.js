import React from 'react';
import './Layout.css';
import { Outlet,Link } from 'react-router-dom';
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className="nav-bar">
                <li className="nav-link"><Link to="/">HOME</Link></li>
                <li className="nav-link"><Link to="/about">ABOUT</Link></li>
                <li className="nav-link"><Link to="/contact">CONTACT</Link></li>

            </ul>

        </nav>

    <Outlet/>
</div>
  )
}
