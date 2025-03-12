import React, { useState, useEffect } from 'react';
import photo1 from './images/R (1).jpeg';
import photo2 from './images/www.ladiestailor.ae_-1024x576.jpg';
import './Talor.css'; // Import the CSS file

const photos = [photo1, photo2];

const MatirlaUi = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="photo-container">
      <img 
        src={photos[currentPhotoIndex]} 
        alt="Rotating photo" 
        className="responsive-photo" 
      />
    </div>
  );
};

export default MatirlaUi;
