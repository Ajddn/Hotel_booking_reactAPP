import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {  toast } from "react-hot-toast";
import { BiSolidCctv } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdMedicalServices } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { GiWaterBottle } from "react-icons/gi";
import { BsCupHotFill } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import MapComponent from "../components/MapComponent";

import FacilityItem from "../components/FacilityItem";
import {
  MdCleaningServices,
  MdWaterDrop,
  MdElectricBolt,
} from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../assests";
import "./home.css";
import Footer from "../components/Footer";

const Home = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current); 

    emailjs
      .sendForm(
        "service_b7d9c9q",
        "template_xpalycs",
        form.current,
        "6kMTBzQD3UT2IaBDk"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          // Reset form fields manually
        form.current.querySelector(".input1name").value = "";
        form.current.querySelector(".input2email").value = "";
        form.current.querySelector(".input3text").value = "";
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message.");
        }
      );
  };

  return (
    <div>
      <div  id="home" className="mycaurosel">
        
        <div className="carousel-div">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            //  data-bs-interval='2000'
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active imageparentdiv"
                data-bs-interval={10000}
              >
                <img src={photo1} className="d-block  myimageclass" alt="..." />
                <div className="carousel-caption d-none d-md-block ">
                  
                  <h1>Contact us at 123-456-7890.</h1>
                  
                </div>
              </div>
              <div
                className="carousel-item imageparentdiv"
                data-bs-interval={20000}
              >
                <img src={photo2} className="d-block  myimageclass" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h1>"Revitalizing and Wholesome Environment"</h1>
                  
                </div>
              </div>
              <div className="carousel-item  imageparentdiv">
                <img src={photo3} className="d-block  myimageclass" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  
                <h1 > Safe and Excellent Culinary Experience</h1>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden previousarrow">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden nextarrow">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="form-part">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="connect">Connect with us</h1>
          <div className="form">
            <div className="longbar"></div>
            <div className="onthetop">
              <input
                className="input1name"
                type="text"
                name="user_name"
                placeholder="Enter your name"
              ></input>
              <input
                className="input2email"
                type="email"
                name="user_email"
                placeholder="Enter a valid email address"
              ></input>
              <textarea
                className="input3text"
                rows={5}
                cols={44}
                name="message"
                placeholder="Enter your message"
                type="submit" 
              ></textarea>
              <button className="btnforsubmit mybuttonsubmit" type="submit">
                SUBMIT
              </button>
              
            </div>
          </div>
        </form>
      </div>

      {/* about us */}
      <div id="about" className="aboutusmain">
        <h1 className="aboutusheading">WHY CHOOSE US</h1>
      </div>
      <div>
        <div className="firstphase">
          <img src={photo4} className="aboutusimag1" alt="aboutus1" />
          <div className="firstcontent">
            <h3>"Uncover Your Second Home at Vasanti Residency!"</h3>
            <p className="pagragraph-content1">
              Divine Residency is the ultimate solution for students seeking
              exceptional boys' and girls' hostels as well as PG accommodations
              in Kota. Divine Residency is the haven that students have been
              searching for to fulfill their dreams. We offer an unparalleled
              environment that surpasses the standard of any other boys' and
              girls' hostels in Kota. Our focus is on creating a true 'home away
              from home' experience, where comfort and care blend seamlessly.
            </p>

            <p className="pagragraph-content2">
              At Divine Residency, we take pride in providing more than just
              accommodation – we provide an extraordinary living experience. Our
              commitment extends to offering high-quality food and top-notch
              facilities that cater to students' every need.
            </p>

            <p className="pagragraph-content3">
              Welcome to Divine Residency – where comfort, care, and success
              converge
            </p>
          </div>
        </div>

        <div className="secondphaseparent">
          <div className="secondcontent">
            <h3>"What Sets Us Apart?</h3>
            <p className="pagragraph-content1">
              In a sea of options, what truly distinguishes Divine Residency as
              the ultimate choice for girls' and boys' hostels in Kota or PG
              accommodations in Kota? It's not just about making claims; it's
              about delivering on promises that matter most to students and
              parents alike.
            </p>

            <p className="pagragraph-content2">
              <ul class="">
                <li>
                  Holistic Approach: We go beyond providing accommodation; we
                  curate an environment that fosters holistic growth. From
                  excellent amenities to a nurturing community, we invest in
                  your overall well-being.
                </li>
                <li>
                  Comfort Redefined: Our rooms are thoughtfully designed to
                  create a haven of comfort. Well-ventilated, insect-free spaces
                  ensure a peaceful ambiance that promotes effective studying.
                </li>

                <li>
                  Strategic Location: Situated conveniently close to premier
                  institutes, Vasanti Residency ensures your time is spent on
                  what truly matters – your studies.
                </li>
              </ul>
            </p>
          </div>
          <div className="secondphase">
            <img src={photo5} className="aboutusimag1" alt="aboutus2" />
          </div>
        </div>

        {/* rooms building with facilities */}
        <div id="rooms" className="maindivrooms">
          <h1 className="roomheading mediaheading phoneversion">
            Hostel Accommodations at Divines Residency
          </h1>
          <div className="rooms">
            <div className="hostelimageparentdiv">
              <img className="hostelimage" src={photo6} alt="img1" />
            </div>
            <div className="roomfacilities">
              <h3 className="roomheading ">
                Features and Facilities of Single Occupancy Room at Divine
                Residency:
              </h3>
              <ul class="features-list">
                <li>One Bed</li>
                <li>One Table</li>
                <li>One Study Lamp</li>
                <li>One Almirah</li>
                <li>One Refrigerator</li>
                <li>One Book Shelf</li>
                <li>One Air Conditioner</li>
                <li>One Fan</li>
                <li>One Tubelight</li>
                <li>Attached Bathroom with geyser </li>
              </ul>
            </div>
          </div>

          <div className="rooms">
            <div className="hostelimageparentdiv">
              <img className="hostelimage" src={photo7} alt="img2" />
            </div>
            <div className="roomfacilities">
              <h2 className="roomheading ">
                Facilities of Double Occupancy Room at Divine Residency:
              </h2>
              <ul class="features-list">
                <li>Two Beds</li>
                <li>Two Tables</li>
                <li>Two Almirahs</li>
                <li>Two Refrigerators</li>
                <li>Two Book Shelves</li>
                <li>One Air Conditioner</li>
                <li>One Fan</li>
                <li>Two Tubelight</li>
                <li>Attached Bathroom with geyser</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* facilitiespart start */}

      <div className="facilitiesmain">
        <div className="mainfacilities">
          <h1 className="roomheading facilitiesheading">
            Amenities Offered at Divines Residency
          </h1>

          <div className="facilities-grid">
            <FacilityItem
              icon={<BiSolidCctv className="facility-icon" size={55} />}
              text="24X7 SURVEILLANCE"
            />
            <FacilityItem
              icon={<TbAirConditioning className="facility-icon" size={55} />}
              text="AIR CONDITIONING"
            />
            <FacilityItem
              icon={<MdMedicalServices className="facility-icon" size={55} />}
              text="ROUND-THE-CLOCK MEDICAL SUPPORT"
            />
            <FacilityItem
              icon={<FaShower className="facility-icon" size={55} />}
              text="ELEGANT BATHROOMS WITH MODERN FIXTURES"
            />

            <FacilityItem
              icon={<GiWashingMachine className="facility-icon" size={55} />}
              text="LAUNDRY"
            />
            <FacilityItem
              icon={<GiWaterBottle className="facility-icon" size={55} />}
              text="Cutting-edge RO Infrastructure Ensuring 100% Pure Drinking Water"
            />
            <FacilityItem
              icon={<BsCupHotFill className="facility-icon" size={55} />}
              text="TEA & COFFEE"
            />
            <FacilityItem
              icon={<FaBrain className="facility-icon" size={55} />}
              text="Guidance Specialist"
            />

            <FacilityItem
              icon={<MdCleaningServices className="facility-icon" size={55} />}
              text="MAINTENANCE AND CLEANING SERVICE"
            />
            <FacilityItem
              icon={
                <>
                  <MdWaterDrop className="facility-icon" size={35} />
                  <MdElectricBolt className="facility-icon" size={35} />
                </>
              }
              text="Continuous Water and Electricity Availability"
            />
            <FacilityItem
              icon={<GiForkKnifeSpoon className="facility-icon" size={55} />}
              text="KITCHEN EQUIPPED WITH STATE-OF-THE-ART AUTOMATION"
            />
            <FacilityItem
              icon={<FaBath className="facility-icon" size={55} />}
              text="CENTRALIZED ELECTRIC HEATING UNIT FOR HOT WATER DISPENSATION"
            />
          </div>
        </div>
      </div>

      {/* moreinformation div */}
      <div className="moreinformation">
        <h1 className="roomheading facilitiesheading">
          Distinguishing Attributes That Set Us Apart from Other PG/Hostels in
          Kota
        </h1>
        <div className="insidemoreinformation">
          <div className="intro">
            <h4>A Conveniently Positioned Hostel in Kota's Heart</h4>
            <p>
              Discover the strategically positioned Divine Residency, nestled in
              the heart of Kota. This PG in Kota boasts an enviable location
              that's easily recognizable. The railway station and bus stand are
              within effortless reach from Divine Residency, with regular
              transportation options at your disposal.
            </p>

            <p>
              Renowned educational establishments such as Allen Career
              Institute, Bansal Classes, Vibrant Academy, and Career Point are
              all conveniently located within walking distance from Vasanti
              Residency. Additionally, we proudly accommodate young gentlemen
              and ladies from esteemed institutes like Sankalp & Sabal, Nucleus
              Institute, and Resonance Institute.
            </p>
          </div>
          <div className="intro">
            <h4 style={{ marginTop: "40px" }}> Comprehensive Health Care </h4>
            <p style={{ paddingTop: "25px" }}>
              At our establishment, we prioritize the health and safety of our
              residents. With a fully equipped First Aid kit on our premises,
              we're prepared to handle unexpected medical needs promptly. Our
              team will take swift action to transfer residents to the nearest
              hospital, all while keeping local guardians or parents informed
              every step of the way.
            </p>
            <p>
              Going beyond mere preparedness, we have established a dedicated
              medical inspection room right on our premises. Manned by qualified
              medical professionals, this room serves as a haven for addressing
              minor ailments and health concerns. Our visiting medical staff is
              adept at providing immediate care and attention, ensuring that
              residents receive the best possible treatment on-site.
            </p>
          </div>
          <div className="intro">
            <h4 style={{ marginTop: "40px" }}> Cafeteria/Mess </h4>
            <p style={{ paddingTop: "25px" }}>
              At Divine Residency, we take immense pride in offering not just
              accommodation, but a holistic experience that tantalizes your
              taste buds. Our commitment to providing the best food is as
              unwavering as our dedication to hospitality.Every dish is prepared
              with meticulous attention to detail, using the freshest
              ingredients to create flavors that linger on your palate.
            </p>

            <p>
              Savor a diverse range of culinary delights, from hearty breakfasts
              that energize your mornings to satisfying lunches and dinners that
              comfort your senses. Whether you're a connoisseur of local flavors
              or an explorer of international cuisines, you'll find your
              cravings met and exceeded at every meal. Elevate your stay at
              Divine Residency by treating yourself to a culinary journey that
              matches the excellence of our accommodations.
            </p>
          </div>
        </div>
      </div>
      {/* photogallery */}

      <div  id="gallery" className="photogallery">
        <h1 className="roomheading facilitiesheading">Visual Tour</h1>
        <p className=""> Discover the Top Girls/Boys Hostel in Kota</p>
        <div class="image-grid">
          <img src={image1} alt="Image1" />
          <img src={image2} alt="Image2" />
          <img src={image3} alt="Image3" />
          <img src={image4} alt="Image4" />
          <img src={image5} alt="Image5" />
          <img src={image6} alt="Image6" />
          <img src={image7} alt="Image7" />
          <img src={image8} alt="Image8" />
          <img src={image9} alt="Image9" />
        </div>
        <a href = '/Moreimages'><button className="btn" >SEE MORE</button></a>
      </div>
      {/* contact us information */}
      <div id="contact" className="moreinformation contactus">
        <div className="conatactinfo1">
          <MapComponent />
        </div>
        <div className="conatactinfo1">
          <h1>Contact us</h1>
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
          <div className="info-item">
            <MdEmail size={35} />
            <div>
              <h4>EMAIL</h4>
              <p>info@devineresidency.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
