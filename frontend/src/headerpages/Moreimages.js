import React, { useState } from 'react';
import './moreimage.css';

import Footer from '../components/Footer';

import {
  photo1,
  photo2,
  photo3,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from '../assests';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, photo1, photo2, photo3];

export const Moreimages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };
  

  return (
    <div>
      <div className="headingparent" style={{ marginBottom: '10px' }}>
        <h1>Step into the Enchanting World of Kota's Premier Hostel: A Visual Journey</h1>
      </div>

      <div
        style={{
          width: '100%',
          height: 'fit-content',
          backgroundColor: 'lightgray',
          paddingTop: '50px',
        }}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => openLightbox(index)}
              className="clickable-image"
            />
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox-overlay">
            <span className="close" onClick={closeLightbox}>
              &times;
            </span>
            <img src={selectedImage} alt="lightbox" className="lightbox-image" />
            <button className="nav-button prev-button" onClick={goToPrevious}>
              Previous
            </button>
            <button className="nav-button next-button" onClick={goToNext}>
              Next
            </button>
          </div>
        )}

        {selectedImage === null && ( // Conditionally render the "GO BACK" button
          <a href="/">
            <button className="btn moreseebtn" style={{ marginBottom: '40px' }}>
              GO BACK
            </button>
          </a>
        )}
        
      </div>

      <Footer />
    </div>
  );
};

export default Moreimages;
