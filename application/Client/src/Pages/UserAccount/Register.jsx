import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./testRegister.css";

const Testing = () => {
  const [isFirstRender, setIsFirstRender] = useState(true); // Used to prevent useEffect from running on first render
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const [showpassword, setShowpassword] = useState("password");
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
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      const data = await response.json();

      window.alert(data.message);
    } catch (error) {
      window.alert("Error registering user: " + error.message);
    }

    window.alert(
      "Email: " +
        email +
        " Password:" +
        password +
        " First Name:" +
        firstName +
        " Last Name:" +
        lastName
    );
  };
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (email === null || email === "") {
      setStatus("");
      return;
    }
    console.log(email);
    console.log(status);
    //const sfsuRegex = /[A-Za-z0-9]+@sfsu\.edu/;
    //const mailRegex = /[A-Za-z0-9]+@mail\.sfsu\.edu/;
    //Removed regex so there is no student email needed
    const sfsuRegex = /[A-Za-z0-9]/;
    const mailRegex = /[A-Za-z0-9]+@m\./;

    if (!sfsuRegex.test(email) && !mailRegex.test(email)) {
      setStatus("Please enter a valid SFSU email address");
    } else {
      setStatus("");
    }
  }, [email]);
  //App.use

  const handleclear = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  
  function getDetails() {
    var userName = document.getElementById("id1");
    var email = document.getElementById("id2");
    var password  = document.getElementById("id3");
    window.alert("Value = " + "'" + userName.value + "'");
    window.alert("Value = " + "'" + email.value + "'");
    window.alert("Value = " + "'" + password.value + "'");
  }
  return (
    <div className="MainPage">
      <main>
        <div class="form-holder">
          <div class="form-container">
            <div class="form-container__details">
              <div class="form-container__title">Register User</div>
            </div>
            <form class="form" onSubmit={handleSubmit}>
              <div class="form__field">
                <div class="form__label">First Name</div>
                <input
                  class="form__input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="form__field">
                <div class="form__label">Last Name</div>
                <input
                  class="form__input"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="form__field">
                <div class="form__label">Email</div>
                <input
                  class="form__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form__field">
                <div class="form__label">Password</div>
                <input
                  class="form__input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button class="form__submit" type="submit">
                Sign Up
              </button>
            </form>
            {/* WHy is clear button needed / wanted */}
            <button class="form__clear" onClick={handleclear}>
              Clear
            </button>
            <div class="form-container__line-divider"></div>
            <div class="form-container__links">
              <Link to="/login" class="form-container__link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Testing;
