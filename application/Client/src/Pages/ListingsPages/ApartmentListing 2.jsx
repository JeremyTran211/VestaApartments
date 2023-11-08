import React, { useState } from "react";

const SingleListing = ({ imageUrl, address, price, bedrooms, bathrooms }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "21px",
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
        <div style={{ fontWeight: "bold" }}>{address}</div>
        <div style={{ color: "green", fontWeight: "bold" }}>{price}</div>
        <div>{bedrooms} Bedrooms</div>
        <div>{bathrooms} Bathrooms</div>
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
  const [filter, setFilter] = useState({
    rent: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [sort, setSort] = useState(""); // default sorting

  return (
    <div>
      {/* Back to Home Button */}
      <button
        style={{
          margin: "20px",
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>

      {/* Filter and Sort Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        {/* Rent Filter */}
        <div style={{ marginRight: "10px" }}>
          <strong>Rent:</strong>
          <input
            value={filter.rent}
            onChange={(e) => setFilter({ ...filter, rent: e.target.value })}
            placeholder="Rent"
          />
          <button>Apply</button>
        </div>

        {/* Bedroom Filter */}
        <div style={{ marginRight: "10px" }}>
          <strong>Bedrooms:</strong>
          <input
            value={filter.bedrooms}
            onChange={(e) => setFilter({ ...filter, bedrooms: e.target.value })}
            placeholder="Bedrooms"
          />
          <button>Apply</button>
        </div>

        {/* Bathroom Filter */}
        <div style={{ marginRight: "10px" }}>
          <strong>Bathrooms:</strong>
          <input
            value={filter.bathrooms}
            onChange={(e) =>
              setFilter({ ...filter, bathrooms: e.target.value })
            }
            placeholder="Bathrooms"
          />
          <button>Apply</button>
        </div>

        {/* Sort Section */}
        <div style={{ marginLeft: "auto" }}>
          <strong>Sort:</strong>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Select</option>
            <option value="lowHigh">Low to High</option>
            <option value="highLow">High to Low</option>
            <option value="video">Video</option>
            <option value="3DTour">3D Tour</option>
          </select>
        </div>
      </div>

      {/* Listings */}
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
        address="101 Another St, Some City, SC 67890"
        price="$1,500/month"
        bedrooms="3"
        bathrooms="2"
      />
    </div>
  );
};

export default ApartmentListing;
