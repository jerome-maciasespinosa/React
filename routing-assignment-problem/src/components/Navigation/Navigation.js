import React from 'react';
import './Navigation.css';

import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div id="nav">
            <div className="ItemLink Home">
                <NavLink className="navLink" activeClassName='IsActive' to="/" exact>My react app</NavLink>
            </div>
            <div className="ItemLink Courses">
                <NavLink className="navLink" activeClassName='IsActive' to="/courses">Courses</NavLink>
            </div>
            <div className="ItemLink Users">
                <NavLink className="navLink" activeClassName='IsActive' to="/users">Users</NavLink>
            </div>
        </div>
    );
}

export default Navigation;