import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Laptop Bazaar. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
