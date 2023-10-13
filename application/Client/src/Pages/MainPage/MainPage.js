import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainPage.css';
import { useState } from 'react';


const MainPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate(); 

  const handleSearchClick = () => {
    console.log("Search button was clicked with query:", searchInput);

  if (searchInput) {
    navigate('/listings', { state: { searchQuery: searchInput } });
  }
};
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
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
           <button type="submit" onClick={handleSearchClick}>Search</button>
  
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