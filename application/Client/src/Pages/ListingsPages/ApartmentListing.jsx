import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ApartmentListing.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

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

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

// Default center coordinates for the Google Map
const center = {
  lat: 37.773972,
  lng: -122.431297,
};

// Loading Google Maps API
const ApartmentListing = () => {
  const [map, setMap] = React.useState(null);
  const [mapCenter, setMapCenter] = React.useState(null);
  const [markers, setMarkers] = React.useState([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDPi4QXNXDnR3snfSiHfhOlzo_BPc3b7jA",
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  //Retrieving data passed through React Router's location state
  const location = useLocation();
  const { searchData } = location.state || {};
  const [listings, setListings] = useState([]);

  const [filter, setFilter] = useState({
    minRent: "",
    maxRent: "",
    bedrooms: "",
    bathrooms: "",
  });

  //useEffect hook to handle component mount/update logic
  useEffect(() => {
    // If searchData is available, used to set listing, else fetch listing
    if (searchData) {
      setListings(searchData.data);
      console.log("After set:", searchData);
    } else {
      getListings();
      getMarkers();
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

  //get position of listing if address exists
  const getLatLng = async (address) => {
    console.log(address);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDPi4QXNXDnR3snfSiHfhOlzo_BPc3b7jA`
    );
    console.log(response);
    if (response === undefined) {
      return null;
    } else {
      const data = await response.json();
      return data.results[0].geometry.location;
    }
  };

  // get markers for listings to add to the map
  const getMarkers = async () => {
    const allMarks = [];
    for (const listing of listings) {
      const latLng = await getLatLng(listing.Address);
      if (latLng) {
        console.log(latLng);
        allMarks.push(latLng);
      }
    }
    setMarkers(allMarks);
  };

  // Components for rendering a single listing
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
  //Function to apply filters to the listings
  const applyFilters = async (e) => {
    // Logic to apply filters goes here
    e.preventDefault();
    // function for making the API call to get Listings
    // const GetListings = async {

    //Logic to apply filters and fetch filtered data from API
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

  //Main component render
  return isLoaded ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Filter bar Container */}
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
            onChange={(e) => setFilter({ ...filter, minRent: e.target.value })}
            placeholder="Minimum"
            style={{ fontSize: "0.70em", width: "60px" }}
          />
          -
          <input
            value={filter.maxRent}
            onChange={(e) => setFilter({ ...filter, maxRent: e.target.value })}
            placeholder="Maximum"
            style={{ fontSize: "0.70em", width: "60px" }}
          />
        </div>

        {/* Bedroom Filter */}
        <div style={{ marginRight: "5px" }}>
          <strong style={{ fontSize: "0.85em" }}>Beds:</strong>
          <select
            value={filter.bedrooms}
            onChange={(e) => setFilter({ ...filter, bedrooms: e.target.value })}
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

      {/* Map and Listings Container */}
      <div
        style={{
          display: "flex",
          height: "700px",
        }}
      >
        {/* Map Container */}
        <div className="map-container1">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onUnmount={onUnmount}
          >
            {/* Add markers to the map */}
            {markers.map((marker) => (
              <Marker position={marker} />
            ))}
          </GoogleMap>
        </div>
        {/* Listings Container */}
        <div className="listing-container" style={{ flexBias: "50%" }}>
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
    </div>
  ) : (
    <></> //Render nothing if Google Maps API is not loaded
  );
};

export default ApartmentListing;
