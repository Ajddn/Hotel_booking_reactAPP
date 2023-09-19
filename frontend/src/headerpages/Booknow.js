import React from "react";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import "./booknow.css";
// import { Link } from "react-router-dom";


const Booknow = () => {
  return (

    <div>
      {/* <Link to="/">Go to Home Section</Link> */}

      <h1 className="booknowheading">Secure Your Spot at the Finest Girls and Boys Hostels in Kota</h1>
      <Booking />

      <div className="bookingcontact">
        <div className="info-item">
          <HiLocationMarker size={35} />
          <div>
            <h4>LOCATION</h4>
            <p>
              A-11, Adjacent to Gaurav Tower, Bansal Classes, IPIA, Road No.1,
              Kota
            </p>
          </div>
        </div>
        <div className="info-item">
          <BsTelephoneFill size={35} />
          <div>
            <h4>PHONE</h4>
            <p>+91-91161000000</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booknow;
