import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <h6 className='nav-title'>Knowledge Cafe</h6>
            
            <div>
                <img className='header-img' src="../../../Image/avatar.png" alt="" />
            </div>
        </nav>
    );
};

export default Header;