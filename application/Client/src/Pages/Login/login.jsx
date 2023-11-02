import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
<<<<<<< HEAD

function GetAPIhook(email, password) {

  useEffect(() => {
    fetch("http:/login?" + email+"&"+ password)
          .then(response => response.json)
          .then(data => data[0])
          .catch(error => console.error(error));
    },[email, password]);

}
    // function to call register API which is stored in backend folder
    /*async function CallAPI() {
    // invoke API call 
      console.log ("http:/login?"+this.email+"&"+this.password)


      // const response = await fetch("http:/login?"+this.email+"&"+this.password);
      /* useEffect(() => {
      fetch("http://localhost:3000/login?"+Email+"&"+Password)
            .then(response => response.json)
            .then(data => data[0])
            .catch(error => console.error(error));
      },[Email, Password]);
      
     return response
     };
     */
=======
import { Link, useNavigate } from "react-router-dom";

>>>>>>> 6477530d461874cd7792ca5997d4ad4e3b66d2eb
function LoginPage() {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


};

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

    GetAPIhook(email, password);
    window.alert('API reponse = ' );

    
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
        <Link to="/"><button style={{width:'50%',margin:"0 auto"}}>Login</button></Link>
        </div>
        
      </form>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  );
}

export default LoginPage;
// export {GetAPIhook};