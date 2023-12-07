import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./VerificationPage.css";
function checkTier() {
  const session = true;
  
  if (session ){
    return "Verify";
  }
  else if (!session){
  
    return "Locked";
  }
  
}
function VerificationPage() {
  // State variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        console.log("Localstorage", localStorage.getItem("accessToken"));
        navigate("/");
      } else {
        throw new Error(data.message || "Login Failed");
      }
    } catch (error) {
      window.alert("Error logging in: " + error.message);
    }
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function getDetails() {
    var email = document.getElementById("id1");
    var password = document.getElementById("id2");
    window.alert("Value = " + "'" + email.value + "'");
    window.alert("Value = " + "'" + password.value + "'");
  }
  const TierStatus = checkTier();
  return (
    <div className="MainPage">
      <main>
        <div className="verifications-container">
          <div className="flex-container">

              <div className="tier-two-container">
                <div className="tier-two-container_title">Background Check</div>
                <div className="tier-two-container_info">Fill out identification form</div>
              <div className="tier-two-button-container"> 
              <Link to="/verification-tier-two">
                <button className="tier-two_button">
                Verify
              </button>
              </Link>
              </div>

              </div>

            
          </div>
        </div>
      </main>
    </div>
  );
}
export default VerificationPage;
