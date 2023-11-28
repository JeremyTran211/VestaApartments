import React, { useState, Component } from "react";
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
// Function for getting the Listings data
const getListings = async (e) => {
  e.preventDefault();
// function for making the API call to get Listings
// const GetListings = async {
      
try {
window.alert ("Calling to fetch Listings from API")
// const [Listing, setListing] = useState("");
const response = await fetch("/listings", {
  method: "GET",
  headers: {
  "Content-Type": "application/json",
  }
  //,body: JSON.stringify({ Listing }),
});

const data = await response.json();
window.alert("API returned data length is: "+ JSON.stringify(data));
// window.alert(data.message);

} catch (error) {
console.log ("Error occured when fetching from API")
window.alert("Error when getting Rental Listings: " + error.message);
}

{/* END: For making the getListing API class from backened */}
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
            onClick={getListings}
          >
            View Listing
          </button>
        </Link>
      </div>
    </div>
  );
};

const ApartmentListing = () => {
  const [filter, setFilter] = useState({
    minRent: "",
    maxRent: "",
    bedrooms: "",
    bathrooms: "",
  });

  const [sort, setSort] = useState("");

  const applyFilters = () => {};

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

        <SingleListing
          imageUrl="./Apartmentview1.jpg"
          address="123 Example St, Example City, EX 12345"
          minRent="800"
          maxRent="1000"
          bedrooms="2"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="./Apartment2.jpg"
          address="123 Example St, Example City, EX 12345"
          price="$1,000/month"
          bedrooms="2"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="./Apartment3.jpg"
          address="456 Sample Rd, Sample City, SC 12345"
          price="$1,200/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="./Apartment4.jpg"
          address="789 Demo Blvd, Demo City, DM 12345"
          price="$900/month"
          bedrooms="1"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="./Apartment5.jpg"
          address="101 Another St, Some City, SC 67890"
          price="$1,500/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="./Apartment6.jpg"
          address="456 Sample Rd, Sample City, SC 12345"
          price="$1,200/month"
          bedrooms="3"
          bathrooms="2"
        />
      </div>
    </div>
  );
};

export default ApartmentListing;
