import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Testing = () => {
    const [isFirstRender, setIsFirstRender] = useState(true); // Used to prevent useEffect from running on first render
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [status, setStatus] = useState('');
  const [showpassword, setShowpassword] = useState('password');
  const [showpasswordicon, setShowpasswordicon] = useState(false);



  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., sending data to a server or checking credentials)
    // For simplicity, we'll just log the entered valuesconst sfsuRegex = /[A-Za-z0-9]+@sfsu\.edu/;
    const sfsuRegex = /[A-Za-z0-9]+@sfsu\.edu/;
    const mailRegex = /[A-Za-z0-9]+@mail\.sfsu\.edu/;
    if (!sfsuRegex.test(email) && !mailRegex.test(email)) {
      window.alert("Please enter a valid SFSU email address");

      return;
    }

    try {
      const response = await fetch('/register', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({ email, password, firstName, lastName })
      });

      const data = await response.json();  

      window.alert(data.message);

  } catch (error) {
      window.alert('Error registering user: ' + error.message);
  }
  
    window.alert('Email: ' + email + ' Password:' + password + ' First Name:' + firstName + ' Last Name:' + lastName)
}
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (email === null || email === '') {
      setStatus('');
      return;
    }
    console.log(email);
    console.log(status)
    //const sfsuRegex = /[A-Za-z0-9]+@sfsu\.edu/;
    //const mailRegex = /[A-Za-z0-9]+@mail\.sfsu\.edu/;
    //Removed regex so there is no student email needed 
    const sfsuRegex = /[A-Za-z0-9]/;
    const mailRegex = /[A-Za-z0-9]+@m\./;

    if (!sfsuRegex.test(email) && !mailRegex.test(email)) {
      setStatus("Please enter a valid SFSU email address");
    } else {
      setStatus('');
    }
  }, [email]);
  //App.use 

  const handleclear = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setfirstName('');
    setlastName('');
  }
  return (
    <div className="MainPage">
      <main>
        <div class="form-holder">
        <div class="form-container">
          <div class="form-container__details">
            <div class="form-container__title">Register User</div>
          </div>
          <form class="form" >
            <div class="form__field">
              <div class="form__label" >UserName</div>
              <input class="form__input" placeholder="JoeIsCool"/>
            </div>
            <div class="form__field">
              <div class="form__label">Email</div>
              <input class="form__input" placeholder="joeiscool@sfsu.edu"/>
            </div>
            <div class="form__field">
              <div class="form__label">Password</div>
              <input class="form__input" type="password" placeholder="password" />
            </div>
            <button class="form__submit">Sign Up</button>
          </form>
          <div class="form-container__line-divider"></div>
          <div class="form-container__links">
            <Link to="/login"><a href="#" class="form-container__link">
              Login
            </a></Link>
            <Link to="/under-construction"><a href="#" class="form-container__link">
              Forgot password
            </a></Link>
          </div>
        </div>
        </div>
      </main>
    </div>
    
  );
};

export default Testing;
