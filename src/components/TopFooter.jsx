import React from 'react';
import './Talor.css'; // Import the CSS file

const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="footer-section">
        <h4>Alm ladies tailor & fashion</h4>
        <p>
          At AMINA Fashion, we understand that the right attire enhances confidence
          and leaves a lasting impression. Step into a world where style meets
          precision, and let Elbha Fashion be your destination for exquisite ladies’
          tailoring in Dubai.
        </p>
      </div>

      <div className="footer-section">
        <h4>Address</h4>
        <p>
          Al Taif Building, Shop No. 8, Deira,<br />
          Next to Westzone Supermarket<br />
          near Union Metro Station.<br />
          +971585324415<br />
          elbhacloset@gmail.com<br />
          Find us on Google Map
        </p>
      </div>

      <div className="footer-section">
        <h4>Recent News</h4>
        <p>
          The Elegance of Pleated Dress: Timeless Style with a Modern Twist<br />
          <span className="news-date">January 16, 2025</span><br /><br />
          Linen Dress Stitching in Dubai: Elevate Your Style with Tailored Elegance<br />
          <span className="news-date">January 4, 2025</span><br /><br />
          Dream Wedding Gowns in Dubai: Tailored Perfection by Ladies Tailor Dubai<br />
          <span className="news-date">January 31, 2025</span>
        </p>
      </div>
    </div>
  );
}

export default TopFooter;
