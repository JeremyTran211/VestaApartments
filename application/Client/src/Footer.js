import React from "react";
import "./Styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="footer">
      <footer>
        <ul>
          <Link to="/">
            <li class="footer-li">
              <a>Home</a>
            </li>
          </Link>
          <Link to="/listings">
            <li class="footer-li">
              <a>Find Apartments</a>
            </li>
          </Link>
          <Link to="/team-info">
            <li class="footer-li">
              <a>About</a>
            </li>
          </Link>
          {/* Add Terms File (can be a template, something to be professional) */}
          <Link to="/">
            <li class="footer-li">
              <a>Terms</a>
            </li>
          </Link>
          {/* Add Privacy Policy File (can be a template, something to also be professional) */}
          <Link to="/">
            <li class="footer-li">
              <a>Privacy Policy</a>
            </li>
          </Link>
        </ul>
        <p class="footer-copyright">NEON GATORS © 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
