import React, { useState, useEffect } from "react";
import { logo } from "../assests";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const isBookNowPage = location.pathname === "/Booknow";
  const isMoreImagesPage = location.pathname === "/Moreimages";
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const redirectToHome = () => {
    navigate("/");
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mainheader">
      <div className="header-content">
        <div>
          <a href="/">
            <img className="logoimage" src={logo} alt="logoimages" />
          </a>
        </div>
        <div className="icons">
          {isMobile ? (
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <ImCross size={40} color="darkgray" />
              ) : (
                <GiHamburgerMenu size={50} color="darkgray" />
              )}
            </div>
          ) : (
            <div className="flex-container">
              {(!isBookNowPage && !isMoreImagesPage) && (
                // <Link to="#home" onClick={() => redirectToHome()}>
                //   Home
                // </Link>
                <a href="#home">Home</a>

              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                <a href="#contact">Contact us</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                 <a href="#rooms">Rooms</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                <a href="#gallery">PhotoGallery</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                 <a href="#about">About us</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                <a href="Booknow">Booknow</a>
              )}
                    
                {(isBookNowPage || isMoreImagesPage) && (
                <Link to="/" onClick={() => redirectToHome()}>
                  Go to Home
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>

      {(!isBookNowPage && !isMoreImagesPage) && (
          // <Link to="#home" onClick={() => { redirectToHome(); closeMenu(); }}></Link>
          <a href="#home">Home</a>
        )}
        
        {(!isBookNowPage && !isMoreImagesPage) && (
                <a href="#contact" onClick={closeMenu}>Contact us</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                 <a href="#rooms" onClick={closeMenu}>Rooms</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                <a href="#gallery" onClick={closeMenu}>PhotoGallery</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                 <a href="#about" onClick={closeMenu}>About us</a>
              )}
              {(!isBookNowPage && !isMoreImagesPage)  && (
                <a href="Booknow" onClick={closeMenu}>Booknow</a>
              )}
        {(isBookNowPage || isMoreImagesPage)&& (
           <Link to="/" onClick={() => { redirectToHome(); closeMenu(); }}>
           Go to Home
         </Link>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Header;
