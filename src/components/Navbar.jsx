import React from 'react';
import '../css/navbar.css';

function Navbar({children}) {
    return (
        <div className='navbar-container'>
            {children}
        </div>
    );
}

export default Navbar;