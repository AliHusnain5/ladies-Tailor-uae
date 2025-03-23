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
        }}
      >
        WhatsApp
      </button>
    </div>
  );
};

export default WhatsApp;