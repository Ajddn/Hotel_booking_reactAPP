import React, { useState, useEffect } from 'react';
import { logo } from '../assests'; 
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import './header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='mainheader'>
      <div className='header-content'>
        <div>
          <a href='/'>
            <img className='logoimage' src={logo} alt='logoimages' />
          </a>
        </div>
        <div className='icons'>
          {isMobile ? (
            <div className='menu-icon' onClick={toggleMenu}>
              {isMenuOpen ? (
                <GiCancel size={50} color='darkgray' />
              ) : (
                <GiHamburgerMenu size={50} color='darkgray' />
              )}
            </div>
          ) : (
            <div className='flex-container'>
              <a href='/'>Home</a>
              <a href='Contact'>Contact us</a>
              <a href='Facilities'>Rooms</a>
              <a href='Photogallery'>PhotoGallery</a>
              <a href='About'>About us</a>
              <a href='Booknow'>Book now</a>
            </div>
          )}
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href='/'>Home</a>
        <a href='Contact'>Contact us</a>
        <a href='Facilities'>Rooms</a>
        <a href='Photogallery'>PhotoGallery</a>
        <a href='About'>About us</a>
        <a href='Booknow'>Book now</a>
      </div>
      <hr />
    </div>
  );
};

export default Header;
