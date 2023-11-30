import React,  { useState } from "react";
import "./Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();

  const checkLogin = () => {
    const session = localStorage.getItem('accessToken');
    console.log('Social page: ', session);
    return session ? "/social" : "/login";
  }

  const logInOut = () => {
    const session = localStorage.getItem('accessToken');
    console.log('Login status: ', session);

    return session ? "/" : "/login";
  }

  const [socialLink, setSocialLink] = useState(checkLogin());
  const [loginLink, setLogInLink] = useState(logInOut());

  const handleSocialLinkClick = () => {
    setSocialLink(checkLogin());
  };

  const handleLogInOutLinkClick = () => {
    const session = localStorage.getItem('accessToken');

    if(session){
      localStorage.removeItem('accessToken');
      setSocialLink(checkLogin());
      setLogInLink(logInOut());
      navigate('/');
    }
    
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
            <Link to="/social"><a>CURRENTLY TESTING </a></Link>
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
