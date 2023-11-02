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

<<<<<<< HEAD
  } 

=======
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
>>>>>>> 6477530d461874cd7792ca5997d4ad4e3b66d2eb

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
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          style={{ marginBottom: '10px' }}
        />}
        {email&&!status&&password&&firstName&&<TextField
          required
          id="outlined-required"
          label="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          style={{ marginBottom: '10px' }}
        />}
        {email&&!status&&password&&firstName&&lastName&&<div>
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