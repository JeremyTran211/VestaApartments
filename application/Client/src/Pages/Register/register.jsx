import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Register() {
  // State variables to store user input
  const [isFirstRender, setIsFirstRender] = useState(true); // Used to prevent useEffect from running on first render
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [status, setStatus] = useState('');
  const [showpassword, setShowpassword] = useState('password');
  const [showpasswordicon, setShowpasswordicon] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., sending data to a server or checking credentials)
    // For simplicity, we'll just log the entered valuesconst sfsuRegex = /[A-Za-z0-9]+@sfsu\.edu/;
    const sfsuRegex = /[A-Za-z0-9]+@sfsu\.edu/;
    const mailRegex = /[A-Za-z0-9]+@mail\.sfsu\.edu/;
    if (!sfsuRegex.test(email) && !mailRegex.test(email)) {
      window.alert("Please enter a valid SFSU email address");
      return;
    }


    window.alert('Email: ' + email + ' Password:' + password + ' First Name:' + firstname + ' Last Name:' + lastname)

    // You can implement further validation and authentication steps here
  };
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


  const handleclear = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }


  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '25%', margin: "0 auto" }}>
        {status && <div>{status}</div>}
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        {email &&!status&& <div style={{ position: 'relative', display: 'inline-block' }}>
          <TextField
            required
            id="outlined-required"
            label="Password"
            type={showpassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '10px', width: '100%' }}
            InputProps={{
              endAdornment: (
                <div
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)'
                  }}
                  onClick={() => {
                    if (showpasswordicon) {
                      setShowpassword('password');
                      setShowpasswordicon(false);
                    } else {
                      setShowpassword('text');
                      setShowpasswordicon(true);
                    }
                  }}
                >
                  {showpasswordicon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              )
            }}
          />
        </div>}
        {email&&!status&&password&&<TextField
          required
          id="outlined-required"
          label="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          style={{ marginBottom: '10px' }}
        />}
        {email&&!status&&password&&firstname&&<TextField
          required
          id="outlined-required"
          label="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          style={{ marginBottom: '10px' }}
        />}
        {email&&!status&&password&&firstname&&lastname&&<div>
          <Button variant="outlined" onClick={handleclear} style={{ width: '50%', margin: "0 auto" }}>Clear</Button>
          <Button variant="contained" type='Submit' style={{ width: '50%', margin: "0 auto" }}>Submit</Button>
        </div>}
      </form>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  );
}

export default Register;