// Navbar.js

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BookMYStay</div>
      <ul className="nav-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/login">LOGIN</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
