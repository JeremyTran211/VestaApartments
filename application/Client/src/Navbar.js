import React,  { useState } from "react";
import "./Styles/Navbar.css";
import { Link} from "react-router-dom";
function getDetails() {

  //For live
  //const session = localStorage.getItem('accessToken');
  //For console
  const session = true;
  console.log('Social page:', localStorage.getItem('accessToken'));
  
  if (session != null){
    return "/social";
  }
  else if (!session){
    // window.alert("Case Not logged");
    return "/login";
  }
  
}
function Navbar() {
  const [socialLink, setSocialLink] = useState(getDetails());

  const handleSocialLinkClick = () => {
    setSocialLink(getDetails());
  };

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
            <Link to="/edit-properties"><a>CURRENTLY TESTING </a></Link>
            <Link to="/listings"><a>FIND HOMES</a></Link>
            <Link to ={socialLink} onClick={handleSocialLinkClick}><a>SOCIAL</a></Link>
            <Link to="/login"><a>LOGIN</a></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
