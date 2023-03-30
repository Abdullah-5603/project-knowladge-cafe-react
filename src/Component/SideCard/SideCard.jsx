import React, { useEffect, useState } from 'react';
import './SideCard.css';

const SideCard = ({readTimes, bookmarks}) => {      

  return (
    <div>
      <div className='spent-time-container'>
        <p className='spent-time'>Spent time on read: {readTimes} min</p>
      </div>
      <div className="bookmarked mt-3">
        <p className='bookmarked-text py-3'>Bookmarked blogs:</p>
        <p>{bookmarks.join(',')}</p>
      </div>
    </div>
  );
};

export default SideCard;
