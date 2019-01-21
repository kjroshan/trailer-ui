import React from 'react';
import { NavLink } from 'react-router-dom';

export default function header() {
    const linkLabel = 'Home';

    const BackLink = (
        <div className="link-wrapper">
            <NavLink to="/pc-se/film" className="link">
                {linkLabel}
            </NavLink>
        </div>
    );


    return (
        <div id="page-header">
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="hidden-md-down">
                    <img className="logo" alt="Logo" src="/images/logo.png" />
                    { BackLink }
                </div>
            </nav>
        </div>
    );
}
