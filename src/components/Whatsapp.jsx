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
          /* Extra small devices (phones, 320px and up) */
          @media (max-width: 480px) {
            button {
              padding-left: 25px;
              background-size: 18px 18px;
              height: 35px;
              font-size: 0.85rem;
            }
          }

          /* Small devices (phones, 481px and up) */
          @media (min-width: 481px) and (max-width: 600px) {
            button {
              padding-left: 30px;
              background-size: 20px 20px;
              height: 37px;
              font-size: 0.9rem;
            }
          }

          /* Medium devices (tablets, 601px and up) */
          @media (min-width: 601px) and (max-width: 768px) {
            button {
              padding-left: 35px;
              background-size: 25px 25px;
              height: 40px;
              font-size: 1rem;
            }
          }

          /* Large devices (tablets and small laptops, 769px and up) */
          @media (min-width: 769px) and (max-width: 1024px) {
            button {
              padding-left: 38px;
              background-size: 28px 28px;
              height: 42px;
              font-size: 1.05rem;
            }
          }

          /* Extra large devices (laptops and desktops, 1025px and up) */
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
