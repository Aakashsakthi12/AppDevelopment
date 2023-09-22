import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
 const nav=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
       nav("/")
    }
  };

  return (
 <div className='log_for'>
    <div className="logins">
      <div className="login-box">
        <form  className="login " >
          <h1 className='header'>Login</h1>
          <div>
            <input
              type="email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <h6>{errors.email && <span>{errors.email}</span>}</h6>
          </div>
          <div>
            <input
              type="password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <h6> {errors.password && <span>{errors.password}</span>}</h6>
          </div>
          <div>
            <button className='button' onClick={handleSubmit}>Login</button>
          </div>
          <br/> 
          <br/>
      
          <Link to="/Signup">
            <p className="login-section">Signup Now</p>
          </Link>
        </form>
        </div>
        </div>
</div>
  );
}
export default Login;
