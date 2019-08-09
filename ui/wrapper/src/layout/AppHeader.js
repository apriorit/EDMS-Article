import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/react">React</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/angular">Angular</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default AppHeader;
