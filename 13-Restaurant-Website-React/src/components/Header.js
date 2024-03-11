import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div id="navbar">
            <header id="content" className={`navbar navbar-expand-sm fixed-top ${isMenuOpen ? 'show' : ''}`}>

                <button className='navbar-toggler' onClick={toggleMenu}>
                    <span className='navbar-toggler-icon' id="myicon1"></span><br />
                    <span className='navbar-toggler-icon' id="myicon2"></span><br />
                    <span className='navbar-toggler-icon' id="myicon3"></span>
                </button>

                <div id="logo">
                    <NavLink to="/" onClick={closeMenu}><img src={logo} alt="logo" height="84px" className="pic" /></NavLink>
                </div>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id='list'>
                    <ul id="navBar">
                        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
                        <li><NavLink to="/menu" onClick={closeMenu}>Menu</NavLink></li>
                        <li><NavLink to="/team" onClick={closeMenu}>Team</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                    </ul>
                </div>

            </header>
        </div>
    );
}

export default Header;
