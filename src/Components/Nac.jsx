import { Link } from "react-router-dom";
import React from "react";
import './Nav.css'

const Nav=() => {
    return (
        <div>
            <div className="navbar">
                <Link className="navbarMenu" to={'/'}>Main</Link>
                <Link className="navbarMenu" to={'/about'}>about</Link>
                <Link className="navbarMenu" to={'/contact'}>Contact</Link>

            </div>
        </div>
    )
}

export default Nav