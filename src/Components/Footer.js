import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <footer className="footer" style={{position:'relative'}}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>39,kayan street<br />Coimbatore, Tamil Nadu<br />641042</p>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: bookmystay@gmail.com<br />Phone: +81 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3></h3>
          <div className="social-icons">
            
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer