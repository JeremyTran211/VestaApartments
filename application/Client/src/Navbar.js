import React from "react";
import "./Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav>
        <div class="nav">
          <div class="nav-header">
            <div class="nav-title">
              <a class="logo"href="/">NEON</a>
            </div>
          </div>
          {/* Responsive hamburger */}
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div class="nav-links">
            <Link to="/testing"><a>CURRENTLY TESTING </a></Link>
            <Link to="/listings"><a>FIND HOMES</a></Link>
            <Link to="/social"><a>SOCIAL</a></Link>
            <Link to="/login"><a>LOGIN</a></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
