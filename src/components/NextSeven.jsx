import React from 'react';
import photo1 from './images/NOOR-18000-D-PAKISTANI-SUITS-AT-BEST-PRICE.jpg';
import './Talor.css'; // Make sure to import your CSS file

const NextSeven = () => {
  return (
    <>
      <div className="section-seven"   
       data-aos="flip-right"
      data-aos-duration="2000"
    >
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div >
          <h1>Amina Ladies Tailor in Dubai,<br /></h1>
          <p>Whether you seek personalized fittings, intricate embellishments, or the<br /> latest fashion trends, our <br />one-stop destination ensures you leave with not<br /> just a garment, but an experience tailored exclusively for you. Elevate your<br /> style journey with the convenience and craftsmanship that define <br />our status as the ultimate one-stop ladies tailor in Dubai.</p>
          <h1>WE TRUST ON GOD</h1>
        </div>
        <img src={photo1} alt="Amina Ladies Tailor" />
        </div>
      </div>
    </>
  );
}

export default NextSeven;
