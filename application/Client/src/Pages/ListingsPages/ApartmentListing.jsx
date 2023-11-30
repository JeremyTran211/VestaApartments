import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ApartmentListing.css";

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "0.85em",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  flexShrink: 0,
};

const ApartmentListing = () => {
  const location = useLocation();
  const { searchData } = location.state || {};
  const [listings, setListings] = useState([]);

  const [filter, setFilter] = useState({
    minRent: "",
    maxRent: "",
    bedrooms: "",
    bathrooms: "",
  });

  useEffect(() => {
    if (searchData) {
      setListings(searchData.data);
      console.log("After set:", searchData);
    } else {
      getListings();
    }
  }, [searchData]);

  const [sort, setSort] = useState("");

  // Function for getting the Listings data
  const getListings = async (e) => {
    // function for making the API call to get Listings
    try {
      const response = await fetch("/listings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setListings(data.data);
    } catch (error) {
      console.log("Error occured when fetching from API");
    }
  };

  const SingleListing = ({ imageUrl, address, price, bedrooms, bathrooms }) => {
    return (
      <div
        style={{
          display: "flex",
          margin: "30px",
          border: "1px solid #ccc",
          padding: "40px",
          borderRadius: "5px",
          position: "relative",
          backgroundColor: "#fff",
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
          <div
            style={{ color: "green", fontWeight: "bold", fontSize: "0.9em" }}
          >
            ${price}/month
          </div>
          <div style={{ fontSize: "0.85em" }}>{bedrooms} Bedrooms</div>
          <div style={{ fontSize: "0.85em" }}>{bathrooms} Bathrooms</div>
        </div>

        {/* View Listing Button to view the entire listing */}
        <div style={{ position: "absolute", right: "10px", bottom: "10px" }}>
          <Link to="/listing-details" state={{ address }}>
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
      window.alert(
        "Calling to apply search based on filters: filter bedrooms value is" +
          filter.bedrooms
      );
      // const [Listing, setListing] = useState("");
      const bedrooms = filter.bedrooms;
      const bathrooms = filter.bathrooms;
      // const maxPrice = filter.maxRent;
      const maxPrice = filter.maxRent;
      const minPrice = filter.minRent;
      const propertyType = "House";
      const fetchURL =
        "/search?Rooms=" +
        bedrooms +
        "&Bathrooms=" +
        bathrooms +
        "&Min_Price=" +
        minPrice +
        "&Max_Price=" +
        maxPrice +
        "&Property_Type=" +
        propertyType;
      window.alert("Logging values for paramters in api calls " + fetchURL);
      const response = await fetch(fetchURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        //,body: JSON.stringify({ Listing }),
      });

      const data = await response.json();
      window.alert("API returned data length is: " + JSON.stringify(data));
      setListings(data.data);
      // window.alert(data.message);
    } catch (error) {
      console.log("Error occured when applying the search");
      window.alert("Error when applying the search: " + error.message);
    }
  };

  // Map location and API key
  const mapLocation = "San Francisco, CA";
  const googleMapsEmbedApiKey = "AIzaSyDPi4QXNXDnR3snfSiHfhOlzo_BPc3b7jA";

  // Google Maps embed URL
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsEmbedApiKey}&q=${encodeURIComponent(
    mapLocation
  )}`;

  return (
    <div style={{ display: "flex" }}>
      {/* Map Container */}
      <div
        style={{
          flexBasis: "60%",
          height: "100%",
          borderRight: "1px solid #ccc",
        }}
      >
        <iframe
          title="Google Map"
          src={googleMapsEmbedUrl}
          width="100%"
          height="600px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Listings Container */}
      <div className="listing-container" style={{ flexBias: "50%" }}>
        {/* Filter and Sort Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "nowrap",
            overflowX: "auto",
            border: "1px solid #ccc",
            margin: "0 auto",
            padding: "10px",
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
        {Array.isArray(listings) &&
          listings.map((listing) => (
            <SingleListing
              key={listing.Listing_ID}
              imageURL={listing.Image_Path}
              address={listing.Address}
              price={listing.Price}
              bedrooms={listing.Rooms}
              bathrooms={listing.Bathrooms}
            />
          ))}
      </div>
    </div>
  );
};

export default ApartmentListing;
