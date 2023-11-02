import React from 'react';
import { Link } from 'react-router-dom';


const UnderConstruction = () => {
    return (
        <div className="MainPage">
      
      <main>
      <p>HELLO. The page you clicked is currently under construction!<br></br>Click Home to go Home</p>
        <div className="search-container">
          <Link to="/"><button type="submit">HOME</button></Link>
          {/* change to whatever for the postings page /}
          {/ <Link to="/login"><button>Login</button></Link> */} 
        </div>
      </main>
    </div>
    );
}

export default UnderConstruction;