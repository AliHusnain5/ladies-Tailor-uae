import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import './Talor.css'; // Import the CSS file

const Text = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstDiv((prevShowFirstDiv) => !prevShowFirstDiv);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <center>
      <div className="text-div">
        {showFirstDiv ? (
          <div>
            <h1 className="title">One Stop Ladies Tailor</h1>
            <p className="description">
              Discover the convenience and elegance at our one stop ladies tailor in Dubai. At Amina ladies
              tailor, we redefine the shopping experience by offering a comprehensive range of tailored solutions
              under one roof. From casual chic to bespoke evening wear and bridal elegance, our skilled artisans
              cater to every aspect of a woman's wardrobe.
            </p>
            <Button
              variant="contained"
              color="success"
              className="cta-button"
            >
              Visit Now
            </Button>
          </div>
        ) : (
          <div>
            <h1 className="title">Hand Crafted Gowns</h1>
            <p className="description">
              Meticulously designed and delicately tailored by our skilled tailor, each gown is a masterpiece that
              transcends <br></br>trends, promising a wedding ensemble that is as<br></br> unique as your story.
            </p>
            <Button
              variant="contained"
              color="success"
              className="cta-button"
            >
              Make Appointment
            </Button>
          </div>
        )}
      </div>
    </center>
  );
};

export default Text;
