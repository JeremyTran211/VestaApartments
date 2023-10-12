import React from "react";

const SingleListing = ({ imageUrl, address, price, bedrooms, bathrooms }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "15px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      {/* Image Section */}
      <div style={{ marginRight: "20px" }}>
        <img
          src={imageUrl}
          alt="Apartment Thumbnail"
          style={{ width: "200px", height: "130px" }}
        />
      </div>

      {/* Details Section */}
      <div style={{ flex: 1 }}>
        {/* Address */}
        <div style={{ marginBottom: "10px" }}>{address}</div>

        {/* Price */}
        <div style={{ marginBottom: "10px", color: "green" }}>{price}</div>

        {/* Bedroom Number */}
        <div style={{ marginBottom: "10px" }}>{bedrooms} Bedrooms</div>

        {/* Bathroom Number */}
        <div style={{ marginBottom: "10px" }}>{bathrooms} Bathrooms</div>
      </div>

      {/* View Listing Button */}
      <div style={{ position: "absolute", right: "10px", bottom: "10px" }}>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Listing
        </button>
      </div>
    </div>
  );
};

const ApartmentListing = () => {
  return (
    <div>
      <SingleListing
        imageUrl="https://via.placeholder.com/200"
        address="123 Example St, Example City, EX 12345"
        price="$1,000/month"
        bedrooms="2"
        bathrooms="1"
      />
      <SingleListing
        imageUrl="https://via.placeholder.com/200"
        address="456 Sample Rd, Sample City, SC 12345"
        price="$1,200/month"
        bedrooms="3"
        bathrooms="2"
      />
      <SingleListing
        imageUrl="https://via.placeholder.com/200"
        address="789 Demo Blvd, Demo City, DM 12345"
        price="$900/month"
        bedrooms="1"
        bathrooms="1"
      />
      <SingleListing
        imageUrl="https://via.placeholder.com/200"
        address="101 Test Ave, Test City, TC 12345"
        price="$1,500/month"
        bedrooms="4"
        bathrooms="2"
      />
      <SingleListing
        imageUrl="https://via.placeholder.com/200"
        address="202 Alpha St, Alpha City, AC 12345"
        price="$1,100/month"
        bedrooms="3"
        bathrooms="1.5"
      />
    </div>
  );
};

export default ApartmentListing;
