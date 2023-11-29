import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ApartmentListing.css";

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontWeight: "bold",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#4CAF50",
  color: "#fff",
  boxShadow: "0 4px #999",
};



const ApartmentListing = () => {
  const [listings, setListings] = useState([]); 
  const [filter, setFilter] = useState({
    minRent: "",
    maxRent: "",
    bedrooms: "",
    bathrooms: "",
  });

const [sort, setSort] = useState("");

useEffect(() => {
  getListings();
}, []);

// Function for getting the Listings data
const getListings = async (e) => {
  // function for making the API call to get Listings
  try {
    const response = await fetch("/listings", {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      }
      
    });
    const data = await response.json();
    console.log("Before: ", data);
    setListings(data.data);
    console.log(data);
    } catch (error) {
    console.log ("Error occured when fetching from API")
  }

/* END: For making the getListing API class from backened */
}
const SingleListing = ({
  imageUrl,
  address,
  minRent,
  maxRent,
  bedrooms,
  bathrooms,
}) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      {/* Image Section for Listing */}
      <div style={{ marginRight: "10px" }}>
        <img
          src={imageUrl}
          alt="Apartment Thumbnail"
          style={{ width: "150px", height: "100px" }}
        />
      </div>

      {/* Details Section for Listing */}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "bold", fontSize: "0.9em" }}>{address}</div>
        <div style={{ color: "green", fontWeight: "bold", fontSize: "0.9em" }}>
          ${minRent} - ${maxRent}/monthcd
        </div>
        <div style={{ fontSize: "0.85em" }}>{bedrooms} Bedrooms</div>
        <div style={{ fontSize: "0.85em" }}>{bathrooms} Bathrooms</div>
      </div>

      {/* View Listing Button to view the entire listing */}
      <div style={{ position: "absolute", right: "10px", bottom: "10px" }}>
        <Link to="/listing-details">
          <button
            style={{
              padding: "4px 8px",
              fontSize: "0.85em",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            // onClick={getListings}
          >
            View Listing
          </button>
        </Link>
      </div>
    </div>
  );
};

  // http://localhost:3000/search?Rooms=1&Bathrooms=1&Price=12500&Property_Type=House
  const applyFilters = async (e) => {
    // Logic to apply filters goes here
    e.preventDefault();
// function for making the API call to get Listings
// const GetListings = async {
      
try {
  window.alert ("Calling to apply search based on filters: filter bedrooms value is"+ filter.bedrooms)
// const [Listing, setListing] = useState("");
  const bedrooms = filter.bedrooms;
  const bathrooms = filter.bathrooms;
  // const maxPrice = filter.maxRent;
  const maxPrice = filter.maxRent;
  const minPrice = filter.minRent;
  const propertyType = "House";
  const fetchURL = "/search?Rooms=" + bedrooms + "&Bathrooms=" + bathrooms + "&Min_Price=" + minPrice + "&Max_Price=" + maxPrice + "&Property_Type=" + propertyType;
  window.alert ("Logging values for paramters in api calls "+ fetchURL)
  const response = await fetch(fetchURL, {
  method: "GET",
  headers: {
  "Content-Type": "application/json",
  }
  //,body: JSON.stringify({ Listing }),
});

const data = await response.json();
  window.alert("API returned data length is: "+ JSON.stringify(data));
  setListings(data.data);
// window.alert(data.message);

} catch (error) {
  console.log ("Error occured when applying the search")
  window.alert("Error when applying the search: " + error.message);
}

{/* END: For getting the Search API from backened */}
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Map Container */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          top: "70px",
          bottom: 0,
          borderRight: "1px solid #ccc",
        }}
      >
        {/* Placeholder for the map */}
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 70px)",
            backgroundColor: "#e0e0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>Map Placeholder</span>
        </div>
      </div>

      {/* Listings Container */}
      <div className="listing-container">
        {/* Filter and Sort Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "15px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          {/* Rent Filter */}
          <div style={{ marginRight: "5px" }}>
            <strong style={{ fontSize: "0.70em" }}>Price:</strong>
            <input
              value={filter.minRent}
              onChange={(e) =>
                setFilter({ ...filter, minRent: e.target.value })
              }
              placeholder="Minimum"
              style={{ fontSize: "0.70em", width: "60px" }}
            />
            -
            <input
              value={filter.maxRent}
              onChange={(e) =>
                setFilter({ ...filter, maxRent: e.target.value })
              }
              placeholder="Maximum"
              style={{ fontSize: "0.70em", width: "60px" }}
            />
          </div>

          {/* Bedroom Filter */}
          <div style={{ marginRight: "5px" }}>
            <strong style={{ fontSize: "0.85em" }}>Beds:</strong>
            <select
              value={filter.bedrooms}
              onChange={(e) =>
                setFilter({ ...filter, bedrooms: e.target.value })
              }
              style={{ fontSize: "0.85em", width: "60px" }} // Set the width to control dropdown width
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Bathroom Filter */}
          <div style={{ marginRight: "5px" }}>
            <strong style={{ fontSize: "0.70em" }}>Bath:</strong>
            <select
              value={filter.bathrooms}
              onChange={(e) =>
                setFilter({ ...filter, bathrooms: e.target.value })
              }
              style={{ fontSize: "0.85em", width: "60px" }} // Set the width to control dropdown width
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Sort Section for the Listings */}
          <div style={{ marginLeft: "auto", marginRight: "10px" }}>
            <strong style={{ fontSize: "0.70em" }}>Sort:</strong>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{ fontSize: "0.85em" }}
            >
              <option value="">Select</option>
              <option value="lowHigh">Low to High</option>
              <option value="highLow">High to Low</option>
            </select>
          </div>

          {/* Main Apply Button */}
          <button
            style={{ ...buttonStyle, padding: "4px 8px", fontSize: "0.85em" }}
            onClick={applyFilters}
            
          >
            Apply
          </button>
        </div>
          {Array.isArray(listings) && listings.map((listing) => (
          <SingleListing
           key = {listing.Listing_ID}
           imageURL = {listing.Image_Path}
           address = {listing.Address}
           price = {listing.Price}
           bedrooms = {listing.Rooms}
           bathrooms = {listing.Bathrooms}
          />
        ))} 
        <SingleListing></SingleListing>
      </div>
    </div>
  );
};

export default ApartmentListing;
