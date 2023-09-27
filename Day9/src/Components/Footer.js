import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine} from 'react-icons/ri';
import './Footer.css'
import { Padding } from '@mui/icons-material';
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
        <div className="social-icons">
        <h3>Social media</h3>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FiInstagram className="insta" />
      </a>
  
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <RiTwitterXLine className="twitter" /> 
    </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer