import React from "react";
import "./ImageModal.css";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img src={imageUrl} alt="Full Screen" />
    </div>
  );
};

export default ImageModal;
