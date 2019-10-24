import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <header>
            <div className="content-header">
                <div className="title">
                <Link to="">
                    Marc<b>Citas</b>
                </Link>
                </div>
                <div className="content-links">
                    <NavLink to="/about" className="link" activeClassName="active">About</NavLink>
                    <NavLink to="/gallery" className="link" activeClassName="active">Gallery</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;