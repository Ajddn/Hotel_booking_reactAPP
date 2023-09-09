import React from 'react';

const Footer = () => {
  return (
    <div style={{marginTop : "90px" }}>
      <div style={{ flex: '1' }}>
        <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, textAlign: 'center', padding: '25px', backgroundColor: '#EEEEEE' , borderTop: '0.5px solid #CCCCCC'}}>
          {/* Footer content */}
          © 2023 Copyright:
          <a style={{ color: 'black'}} href="/">
            DivineResidency.com
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
