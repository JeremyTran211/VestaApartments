import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        margin: "10px",
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
          ${minRent} - ${maxRent}/month
        </div>
        <div style={{ fontSize: "0.85em" }}>{bedrooms} Bedrooms</div>
        <div style={{ fontSize: "0.85em" }}>{bathrooms} Bathrooms</div>
      </div>

      {/* View Listing Button to view the entire listing */}
      <div style={{ position: "absolute", right: "10px", bottom: "10px" }}>
        <button
          style={{
            padding: "4px 8px",
            fontSize: "0.85em",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <Link to="/listing-details">View Listing</Link>
        </button>
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

  const applyFilters = () => {
    // Logic to apply filters goes here
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Map Container */}
      <div
        style={{
          width: "60%",
          position: "fixed", // Fixed position to keep it static
          top: "70px",
          bottom: 0,
          borderRight: "1px solid #ccc",
        }}
      >
        {/* Placeholder for the map */}
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 20px)",
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
      <div
        className="listing-container" 
        style={{
          width: "50%",
          marginLeft: "60%", 
          overflowY: "auto", 
        }}
      >
        {/* Back to Home Button */}
        <button
          style={{
            ...buttonStyle,
            margin: "10px",
            padding: "4px 8px",
            fontSize: "0.85em",
          }}
        >
          <Link to="/">Back to Home</Link>
        </button>

        {/* Filter and Sort Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          {/* Rent Filter */}
          <div style={{ marginRight: "5px" }}>
            <strong style={{ fontSize: "0.70em" }}>Rent:</strong>
            <input
              value={filter.minRent}
              onChange={(e) =>
                setFilter({ ...filter, minRent: e.target.value })
              }
              placeholder="Min Rent"
              style={{ fontSize: "0.70em", width: "60px" }}
            />
            -
            <input
              value={filter.maxRent}
              onChange={(e) =>
                setFilter({ ...filter, maxRent: e.target.value })
              }
              placeholder="Max Rent"
              style={{ fontSize: "0.70em", width: "60px" }}
            />
          </div>

          {/* Bedroom Filter */}
          <div style={{ marginRight: "5px" }}>
            <strong style={{ fontSize: "0.85em" }}>Beds:</strong>
            <input
              value={filter.bedrooms}
              onChange={(e) =>
                setFilter({ ...filter, bedrooms: e.target.value })
              }
              placeholder="Beds"
              style={{ fontSize: "0.85em", width: "50px" }}
            />
          </div>

          {/* Bathroom Filter */}
          <div style={{ marginRight: "5px" }}>
            <strong style={{ fontSize: "0.70em" }}>Bath:</strong>
            <input
              value={filter.bathrooms}
              onChange={(e) =>
                setFilter({ ...filter, bathrooms: e.target.value })
              }
              placeholder="Baths"
              style={{ fontSize: "0.85em", width: "60px" }}
            />
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
              <option value="video">Video</option>
              <option value="3DTour">3D Tour</option>
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

        {/* Displaying the Listings */}
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="123 Example St, Example City, EX 12345"
          minRent="800"
          maxRent="1000"
          bedrooms="2"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="123 Example St, Example City, EX 12345"
          price="$1,000/month"
          bedrooms="2"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="456 Sample Rd, Sample City, SC 12345"
          price="$1,200/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="789 Demo Blvd, Demo City, DM 12345"
          price="$900/month"
          bedrooms="1"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="101 Another St, Some City, SC 67890"
          price="$1,500/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="456 Sample Rd, Sample City, SC 12345"
          price="$1,200/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="789 Demo Blvd, Demo City, DM 12345"
          price="$900/month"
          bedrooms="1"
          bathrooms="1"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="101 Another St, Some City, SC 67890"
          price="$1,500/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="456 Sample Rd, Sample City, SC 12345"
          price="$1,200/month"
          bedrooms="3"
          bathrooms="2"
        />
        <SingleListing
          imageUrl="https://via.placeholder.com/150"
          address="789 Demo Blvd, Demo City, DM 12345"
          price="$900/month"
          bedrooms="1"
          bathrooms="1"
        />
      </div>
    </div>
  );
};

export default ApartmentListing;
