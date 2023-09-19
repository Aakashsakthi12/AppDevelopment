import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="sign-boxing">
      <form className="sign">
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account with your email.</span>
        <div className="sign-container">
          <input type="text" className="input" placeholder="First Name" />
          <input type="text" className="input" placeholder="Last Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <input type="password" className="input" placeholder="confirm password" />
        </div>
        <button>Sign up</button>
      </form>
      <div className="sign-section">
        <p>Have an account? <Link to="/">Log in</Link></p>
      </div>
    </div>
  );
}
export default Signup;
