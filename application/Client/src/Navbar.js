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
            <a href="/view-profile">CURRENTLY TESTING </a>
            <a href="/listings">FIND HOMES</a>
            <a href="/social">SOCIAL</a>
            <a href="/login">LOGIN</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
