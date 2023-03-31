import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
        <nav className='header'>
            <div className='nav-title'>
                <h6 className='nav-title-text'>Knowledge Cafe</h6>
            </div>
            <div>
                <img className='header-img' src="../../../Image/avatar.png" alt="" />
            </div>
        </nav>
        <hr />
        </>
    );
};

export default Header;