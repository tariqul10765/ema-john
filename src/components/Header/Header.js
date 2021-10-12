import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, userSignOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email ? (
                        <span style={{color: 'white'}}>
                            <span>{user.displayName}</span>
                            <button onClick={userSignOut}>logout</button>
                        </span>
                    ):(<NavLink to="/login">Login</NavLink>)
                }
            </nav>
        </div>
    );
};

export default Header;