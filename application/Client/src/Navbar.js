import React,  { useState } from "react";
import "./Styles/Navbar.css";
import { Link} from "react-router-dom";
const session = true;
function checkLogin() {

  //For live
  //const session = localStorage.getItem('accessToken');
  //For console
  
  console.log('Social page:', localStorage.getItem('accessToken'));
  
  if (session){
    return "/social";
  }
  else if (!session){
    // window.alert("Case Not logged");
    return "/login";
  }
  
}

function logInOut() {

  //For live
  //const session = localStorage.getItem('accessToken');
  //For console
  
  console.log('Social page:', localStorage.getItem('accessToken'));
  
  if (session){
    return "/";
  }
  else if (!session){
    // window.alert("Case Not logged");
    return "/login";
  }
  
}
function Navbar() {
  const [socialLink, setSocialLink] = useState(checkLogin());
  const [loginLink, setLogInLink] = useState(logInOut());

  const handleSocialLinkClick = () => {
    setSocialLink(checkLogin());
  };
  const handleLogInOutLinkClick = () => {
    setLogInLink(logInOut());
  };
  const TierStatus = logInOut();
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
            <Link to="/listing-details"><a>CURRENTLY TESTING </a></Link>
            <Link to="/listings"><a>FIND HOMES</a></Link>
            <Link to ={socialLink} onClick={handleSocialLinkClick}><a>SOCIAL</a></Link>
            <Link to={loginLink} onClick={handleLogInOutLinkClick}><a>{TierStatus === "/" ? "LOGOUT" : "LOGIN"}</a></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
