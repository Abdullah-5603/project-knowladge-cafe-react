import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    return (
        <div className='bookmark'>
            <p className='bookmark-text'>{props}</p>
        </div>
    );
};

export default Bookmark;