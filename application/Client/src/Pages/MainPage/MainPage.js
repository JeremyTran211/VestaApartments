import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="MainPage">
      <header>
        <nav>
          <div className="logo">Your Logo</div>
          <div className="login">
          <Link to="/login"><button>Login</button></Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
          {/* change to whatever for the postings page /}
          {/ <Link to="/login"><button>Login</button></Link> */} 
        </div>
        <div className="map-container">
        <div className="numbered-squares">
            <Link to="/under-construction" className="square">1</Link>
            <Link to="/under-construction" className="square">2</Link>
            <Link to="/under-construction" className="square">3</Link>
            <Link to="/under-construction" className="square">4</Link>
            <Link to="/under-construction" className="square">5</Link>
            <Link to="/under-construction" className="square">6</Link>
            <Link to="/under-construction" className="square">7</Link>
            <Link to="/under-construction" className="square">8</Link>
            <Link to="/under-construction" className="square">9</Link>
            <Link to="/under-construction" className="square">10</Link>
        </div>
    </div>

      </main>
    </div>
    );
}

export default MainPage;