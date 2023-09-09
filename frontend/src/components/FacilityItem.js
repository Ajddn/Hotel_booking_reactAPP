import React from 'react';
import './facility.css'; 

const FacilityItem = ({ icon, text }) => {
  return (
    <div className="facility-item">
    <div className="icon">
      {icon}
    </div>
    <span className="text">{text}</span>
  </div>
  );
};

export default FacilityItem;
