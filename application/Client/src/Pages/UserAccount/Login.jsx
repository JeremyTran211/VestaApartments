import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },

          body: JSON.stringify({ email, password})
      });

      const data = await response.json();

      if(response.ok){
        
        localStorage.setItem('accessToken', data.accessToken);
        console.log('Localstorage', localStorage.getItem('accessToken'));
        navigate('/');

      }else{
        throw new Error(data.message || 'Login Failed')
      }

  } catch (error) {
    window.alert('Error logging in: ' + error.message);
    }
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function getDetails() {
    var email = document.getElementById("id1");
    var password  = document.getElementById("id2");
    window.alert("Value = " + "'" + email.value + "'");
    window.alert("Value = " + "'" + password.value + "'");
  }
  return (
    <div className="MainPage">
    <main>
      <div className="form-holder">
        <div className="form-container">
          <div className="form-container__details">
            <div className="form-container__title">Login</div>
          </div>
          <form className="form" onSubmit={handleSubmit}> {}
            <div className="form__field">
              <div className="form__label">Email</div>
              <input
                className="form__input"
                type="email"
                placeholder="JoeIsCool@sfsu.edu"
                value={email}
                onChange={handleEmailChange} 
                id="email" 
              />
            </div>
           
            <div className="form__field">
              <div className="form__label">Password</div>
              <input
                className="form__input"
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                id="password" 
              />
            </div>
            <button className="form__submit" type="submit"> {}
              Login
            </button>
          </form>
          <div className="form-container__line-divider"></div>
          <div className="form-container__links">
            <Link to="/register" className="form-container__link">
              Sign Up
            </Link>
            <Link to="/forgot-password" className="form-container__link">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}
export default LoginPage;
