import React from "react";
import "./Styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="footer-basic">
        <footer>
            
            <ul class="list-inline">
                <Link to="/"><li class="list-inline-item"><a>Home</a></li></Link>
                <Link to="/listings"><li class="list-inline-item"><a>Find Apartments</a></li></Link>
                <Link to="/team-info"><li class="list-inline-item"><a>About</a></li></Link>
                {/* Add Terms File (can be a template, something to be professional) */}
                <Link to="/"><li class="list-inline-item"><a>Terms</a></li></Link> 
                {/* Add Privacy Policy File (can be a template, something to also be professional) */}
                <Link to="/"><li class="list-inline-item"><a>Privacy Policy</a></li></Link>
            </ul>
            <p class="copyright">NEON GATORS © 2023</p>
        </footer>
    </div>
  );
}

export default Footer;
