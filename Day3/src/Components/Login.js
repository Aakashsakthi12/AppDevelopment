import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-box">
      <form className="form">
        <span className="title">Login</span>
        {/* You can add a subtitle here if needed */}
        <div className="form-container">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="form-section">
        {/* Use the Link component to navigate to the "Signup" page */}
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );
}

export default Login;
