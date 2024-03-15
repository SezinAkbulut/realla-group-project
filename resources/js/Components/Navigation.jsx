import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navigation">
            <img src="./images/realla_logo.png" className="logo" alt="Logo"/>

            {/* Hamburger menu */}
            <div className={`hamburger-menu ${isOpen ? 'change' : ''}`} onClick={toggleMenu}>
                <div className="bar "></div>
                <div className="bar"></div>
                <div className="bar"></div>
                {/* Navigation links */}
                <nav className={`navbar ${isOpen ? 'change' : ''}`}>
                    <Link href="/" className="active">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                {isOpen && <div className="dark-overlay"></div>}
            </div>

            <div className="buttons">
                <Link href="/login" className="login">Login</Link>
                <Link href="/register" className="register">Register</Link>
            </div>

            {/* Search button */}
            <Link href="#" className="search-btn">
                <i className='bx bx-search-alt' style={{color: '#ecaa16'}}></i>
            </Link>
        </div>
    );
}

export default Navigation;