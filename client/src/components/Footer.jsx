import React from 'react';
import AboutUs from '../pages/AboutUs';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Laptop Bazaar. All rights reserved.</p>
                <p><a href="/about">About Us</a></p>
            </div>
        </footer>
    );
}

export default Footer;
