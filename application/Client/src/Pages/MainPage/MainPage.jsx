import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainPage.css";
import { useState } from "react";
import SVGComponent from "./Map";

const MainPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    console.log("Search button was clicked with query:", searchInput);

    if (searchInput) {
      navigate("/listings", { state: { searchQuery: searchInput } });
    }
    navigate("/listings");
  };
  return (
    <div className="MainPage">
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by address or area"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        <div className="map-container">
          <SVGComponent width="400" height="400" />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
