import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function VerificationTierTwo() {
  // State variables to store user input
  const [birth, setBirth] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Set variables: ", birth, phoneNumber);
      const response = await fetch('/verificaitonTierTwo', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },

          body: JSON.stringify({ birth, phoneNumber})
      });

      const data = await response.json();

      if(response.ok){
        navigate('./Pages/SocialPage/SocialPage');
      }else{
        throw new Error(data.message || 'Verification failed')
      }

  } catch (error) {
    window.alert('Error verifying user : ' + error.message);
    }
  }

  const handleBirthChange = (event) => {
    setBirth(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setphoneNumber(event.target.value);
  };

  return (
    <div className="MainPage">
    <main>
      <div className="form-holder">
        <div className="form-container">
          <div className="form-container__details">
            <div className="form-container__title">User Verification</div>
          </div>
          <form className="form" onSubmit={handleSubmit}> {}
    
            <div className="form__field">
              <div className="form__label">Date of Birth</div>
              <input
                className="form__input"
                type="text"
                placeholder= "22-05-1990"
                value={birth}
                onChange={handleBirthChange}
                id="school" 
              />
            </div>
            <div className="form__field">
              <div className="form__label">Phone Number</div>
              <input
                className="form__input"
                type="test"
                placeholder="14159999999" pattern="[0-9]{11}" required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                id="phoneNumber" 
              />
            </div>

           <button className="form__submit" type="submit"> {}
              Verification
            </button>
          </form>
          <div className="form-container__line-divider"></div>
        </div>
      </div>
    </main>
  </div>
  );
}
export default VerificationTierTwo;
