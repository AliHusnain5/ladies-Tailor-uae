import React from "react";
import { FiGitCommit } from "react-icons/fi";
import { FaGripfire } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import "./Talor.css"; // Make sure to import your CSS file

const NextFive = () => {
  return (
    <>
      <div
        className="section-five"
        data-aos="zoom-in-left"
        data-aos-duration="2000"
      >
        <h1>Why choose Ladies Tailor Dubai?</h1>
        <p>
          <FiGitCommit
            style={{ height: "40px", width: "40px", marginTop: "-30px" }}
          />
        </p>
        <p style={{ opacity: "0.6", marginTop: "-20px" }}>
          We promise an unparalleled fusion of craftsmanship, personalized
          couture, and <br></br>trendsetting versatility, ensuring your style
          journey is a masterpiece of elegance.
        </p>
      </div>

      <div className="section-five-div" 
       data-aos="zoom-in-left"
        data-aos-duration="2000">
        <div className="para-five-div" >
          <div>
            <FaGripfire style={{ width: "50px", height: "50px" }} />
          </div>
          <h4>Craftsmanship Excellence</h4>
          <p>
            Ladies Tailor Dubai by Elbha Fashion Designing is distinguished by
            its unwavering commitment to craftsmanship excellence. Our skilled
            artisans meticulously handcraft each garment, ensuring precision in
            every stitch. From intricate detailing to the choice of fabrics, we
            take pride in delivering quality and sophistication, setting us
            apart as a beacon of refined tailoring in Dubai.
          </p>
        </div>
        <div className="para-five-div">
          <div>
            <IoDiamondSharp style={{ width: "50px", height: "50px" }} />
          </div>
          <h4>Personalized Couture Experience</h4>
          <p>
            What makes Ladies Tailor Dubai by Elbha Fashion Designing truly
            exceptional is our dedication to providing a personalized couture
            experience. Our ladies tailor collaborates closely with clients,
            understanding their preferences, style, and vision. This bespoke
            approach ensures that every garment is not just tailored but crafted
            to reflect the individuality and unique taste of each client,
            creating a truly one-of-a-kind fashion statement.
          </p>
        </div>
        <div className="para-five-div">
          <div>
            <BiWorld style={{ width: "50px", height: "50px" }} />
          </div>
          <h4>Versatility and Trend Integration</h4>
          <p>
            Embracing the dynamic fashion landscape of Dubai, Ladies Tailor
            Dubai by Elbha Fashion Designing effortlessly blends versatility
            with the latest trends. Our collections range from contemporary
            designs to timeless classics, offering a diverse array of options
            for every occasion. The ability to integrate global influences while
            maintaining a distinct Dubai style makes us the go-to choice for
            those who seek both trendsetting and enduring fashion choices.
          </p>
        </div>
      </div>
    </>
  );
};

export default NextFive;
