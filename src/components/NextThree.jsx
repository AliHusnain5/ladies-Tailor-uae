import React from "react";
import Button from '@mui/material/Button';
import './Talor.css'; // Import the CSS file

const NextThree = () => {
  return (
    <div className="next-three-container" 
    data-aos="zoom-in"
    data-aos-duration="2000" 
    >
      <div className="three" style={{background: "radial-gradient(50% 50% at 50% 0%, #0038A7 0%, #141652 100%)"}}>
        <h1 className="title">ARE YOU LOOKING FOR TAILOR SHOP NEAR ME</h1>
        <p className="description">
          Looking for premium clothing alteration and suit alteration services in Dubai? Visit our nearby tailor shop for expert solutions designed just for you! Whether you want a custom fit or have your own fabric ready for stitching, contact us today!
        </p>
        <div className="buttons-container">
          <Button variant="contained" className="custom-button">
            TALK WITH TAILOR
          </Button>
          <Button variant="contained" className="custom-button secondary">
            TAILOR SHOP FOR WOMEN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextThree;
