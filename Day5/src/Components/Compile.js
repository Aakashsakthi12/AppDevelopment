// MyComponent.jsx
import React from 'react';
import'./compile.css'
import Navbar from './Navbar';

const MyComponent = () => {
  return (
    <div>
    <Navbar/>
    <div className="container px-3">
      <img
        src="https://img.freepik.com/free-photo/cheerful-couple-video-chatting-tablet_23-2147826822.jpg?size=626&ext=jpg&ga=GA1.1.568427067.1695318258&semt=ais"
        alt="Placeholder"
        className="img"
      />
      <div className="content">
        <div className="section">
          <div className="title">
            Book Your 
            <br />
            Dream Room
          </div>
          <div className="description">
          At bookmystay, we believe that travel is not just about reaching a destination; it's about the journey and the moments you create along the way. That's why we've dedicated ourselves to providing you with the perfect setting for your travels.
          </div>
          <div className="button-container">
          </div>
        </div>
        <div className="section">
          <div className="subsection">
            <div className="subtitle">01</div>
            <div className="sub-description">
            At BookMYStay, we believe that travel is not just about reaching a destination; it's about the journey and the moments you create along the way. That's why we've dedicated ourselves to providing you with the perfect setting for your travels.
            </div>
          </div>
          <div className="subsection">
            <div className="subtitle">02</div>
            <div className="sub-description">
            BookMYStay was founded on the idea of creating a home away from home for our guests. Our journey began 2003 when we opened our doors to travelers from around the world. Since then, we've been committed to delivering unparalleled hospitality and service excellence.
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyComponent;
