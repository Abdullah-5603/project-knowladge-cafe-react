import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
        <nav className='header'>
            <div className='nav-title'>
                <h6 className='nav-title-text'>Knowledge Cafe</h6>
            </div>
            
            <div className='header-link'>
                <a href="" herf="/blog">Blog</a>
                <a href="" herf="/courses">Courses</a>
                <a href="" herf="/contact-us">Contact Us</a>
                <a href="" herf="/login">Login</a>
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