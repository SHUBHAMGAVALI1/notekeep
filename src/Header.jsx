import React from 'react';
import image from './images/keep-512.png'

function Header() {
  return (
    <>
    <div className='header'>
    <img src={image} alt='icon' width='70px' height="70px"/>
    <h1>Keep Note </h1>
    </div>

      
    </>
    
  );
}

export default Header;
