import React from "react";
import photo1 from './images/OIP (4).jpeg';
import photo2 from './images/R (3).jpeg';
import photo3 from './images/OIP (5).jpeg';
import { FiGitCommit } from "react-icons/fi";
import './Talor.css'; // Import the CSS file

const NextFour = () => {
  return (
    <div className="section-four" 
      
    >
      <div className="section-four-div">
        <h1 style={{marginTop:"-10px"}}>Our Works</h1>
           <p><FiGitCommit style={{height:"40px",width:"40px",marginTop:"-40px"}} /></p>
        <p className="subtitle">
          Artistry in every stitch, creating bespoke masterpieces that epitomize elegance at<br></br>
          Ladies Tailor by Elbha Fashion Designing.
        </p>
      </div>
      <div className="images-container">
        <img src={photo1} alt="Work 1" className="work-image" />
        <img src={photo2} alt="Work 2" className="work-image" />
        <img src={photo3} alt="Work 3" className="work-image" />
      </div>
    </div>
  );
};

export default NextFour;
