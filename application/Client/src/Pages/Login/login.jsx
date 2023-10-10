import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function LoginPage() {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here 
    
    window.alert('Email: ' + email + ' Password:' + password);

    
  };
  const handleclear = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center',flexDirection:'column',width:'25%',margin:"0 auto"}} >
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{marginBottom:'10px'}}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{marginBottom:'10px'}}

        />
        <div>
        <Button variant="outlined" onClick={handleclear} style={{width:'50%',margin:"0 auto"}}>Clear</Button>
        <Button variant="contained" type='Submit' style={{width:'50%',margin:"0 auto"}}>Submit</Button>
        </div>
      </form>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  );
}

export default LoginPage;