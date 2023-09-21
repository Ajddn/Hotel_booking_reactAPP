import React from "react";
import "./map.css"
const MapComponent = () => {
  const screenWidth = window.innerWidth;

  let iframeWidth = "700px";
  let iframeHeight = "500px";

  if (screenWidth <= 480) {
    iframeWidth = "400px";
    iframeHeight = "300px";
  }

  return (
    <div className="contactinfo1">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.2406711087797!2d75.82973304029119!3d25.201879862384484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b72d59e243f%3A0x553cc9693a189826!2sDivine%20Residency%20Girls%20Hostel%20in%20landmark%20city%20kota!5e0!3m2!1sen!2sin!4v1693064440487!5m2!1sen!2sin"
        width={iframeWidth}
        height={iframeHeight}
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
