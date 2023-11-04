import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', { 
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },

          body: JSON.stringify({ email, password})
      });

      const data = await response.json();

      window.alert(data.message);

  } catch (error) {
      window.alert('Error registering user: ' + error.message);
    // Perform authentication logic here 
    window.alert('Email: ' + email + ' Password:' + password);
    //const response=this.CallAPI()
    //const data = response.json();
    //console.log("Data returned by API call:" + response)
    //this.callAPI(email, password );
    //const response =  fetch("http://localhost:3000/login?" + email+"&"+ password);

    //GetAPIhook(email, password);
    //window.alert('API reponse = ' );

    
    }
}
  const handleclear = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  }

  function getDetails() {
    var userName = document.getElementById("id1");
    var password  = document.getElementById("id2");
    window.alert("Value = " + "'" + userName.value + "'");
    window.alert("Value = " + "'" + password.value + "'");
  }
  return (
    <div className="MainPage">
    <main>
      <div class="form-holder">
        <div class="form-container">
          <div class="form-container__details">
            <div class="form-container__title">Reset Password</div>
          </div>
          <form class="form">
          <div class="form__field">
              <div class="form__label">New Password</div>
              <input
                class="form__input"
                type="password"
                placeholder="new password" id="id1"
              />
            </div>
            <div class="form__field">
              <div class="form__label">New Password</div>
              <input
                class="form__input"
                type="password"
                placeholder="repeat password" id="id2"
              />
            </div>
            <button class="form__submit" onClick={getDetails}>
              Change Password
            </button>
          </form>
          <div class="form-container__line-divider"></div>
          
        </div>
      </div>
    </main>
  </div>
  );
}
export default ResetPasswordPage;
// export {GetAPIhook};