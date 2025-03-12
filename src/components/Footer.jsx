import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Talor.css'; // Import the CSS file

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => navigate(path);

  return (
    <div className="footer-div">
      <div className="footer-left">
        <p>© 2025 Ladies Tailor Dubai by Amina Fashion Designing</p>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <a style={{color:"white"}} href="#Home" className="hover">Home</a>
          <a style={{color:"white"}} href="#About" className="hover">About Us</a>
          <div className="button" onClick={handleNavigation("/Services")}>Services</div>
          <a style={{color:"white"}} href="#Shop" className="hover">Shop</a>
          <a style={{color:"white"}} href="#Blog" className="hover">Blog</a>
          <a style={{color:"white"}} href="#Contact" className="hover">Contacts</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
