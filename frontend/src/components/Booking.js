import React from "react";
import "./booking.css"
import {
    photo1,
    photo2,
    photo3,
    photo4
  } from "../assests";
const Booking = () => {
  return (
    <div className="grid-container">
    <div className="booking-container">
      <img className="booking-image" src={photo1} alt="BookingTemplate1" />
      <h3>Location</h3>
      <p>Type</p>
      <p>Price ₹</p>
      
    </div>
    <div className="booking-container">
      <img className="booking-image" src={photo2} alt="BookingTemplate2" />
      <h3>Location</h3>
      <p>Type</p>
      <p>Price ₹</p>
      
    </div>
    <div className="booking-container">
      <img className="booking-image" src={photo3} alt="BookingTemplate3" />
      <h3>Location</h3>
      <p>Type</p>
      <p>Price ₹</p>
     
    </div>
    <div className="booking-container">
      <img className="booking-image" src={photo4} alt="BookingTemplate4" />
      <h3>Location</h3>
      <p>Type</p>
      <p>Price ₹</p>
      
    </div>
  </div>
  );
};

export default Booking;
