import React from 'react';

const WhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/qr/A7KCKZKKWINSN1', '_blank');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg')",
          backgroundSize: '30px 30px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          paddingLeft: '40px',
          height: '40px',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        WhatsApp
      </button>

      <style>
        {`
          @media (max-width: 600px) {
            button {
              padding-left: 30px;
              background-size: 20px 20px;
              height: 35px;
              font-size: 0.9rem;
            }
          }

          @media (min-width: 601px) and (max-width: 1024px) {
            button {
              padding-left: 35px;
              background-size: 25px 25px;
              height: 40px;
              font-size: 1rem;
            }
          }

          @media (min-width: 1025px) {
            button {
              padding-left: 40px;
              background-size: 30px 30px;
              height: 45px;
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WhatsApp;
