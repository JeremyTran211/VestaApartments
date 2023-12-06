import React, { useState, useEffect } from "react";
import "./PropertyListing.css";
import { useLocation } from "react-router-dom";

const PropertyDetailPage = () => {
  //Using useLocation to access the router's location object
  const location = useLocation();
  const { address, description, title, price } = location.state || {};
 
  console.log("Passed in:", address, description, title, price);
  //console.log(address);
  
  const [imageSet, setImageSet] = useState(1);

  // cost calculator
  //State for calculating cost (currently placeholder object)
  const [cost, setCost] = useState(0);
  /*
  cost = pge+water+garbage+internet+price/rooms
  
  database missing utilites in rental_listing table
  Property has no api call to gather listing info
  and no variable declariations for listing info 
   */

  const percent = 11 * 0.3;
  //Function for calculating costs (currently placeholder)
  async function calculator() {
    setCost(percent);
  }

  // Handler for unimplemented features
  const handleAlert = () => {
    alert("You clicked a feature that is not implemented in the backend");
  };

  // Image display logic
  const totalImages = 6;
  const imagesPerSet = 3;
  const totalSets = Math.ceil(totalImages / imagesPerSet); // Calculate total sets

  const handlePrevImages = () => {
    setImageSet((prev) => Math.max(prev - 1, 1)); // Decrease imageSet, minimum 1
  };

  const handleNextImages = () => {
    setImageSet((prev) => Math.min(prev + 1, totalSets)); // Increase imageSet, maximum totalSets
  };

  //Function to get the embed URL for Google Maps based on the address
  const getMapEmbed = (address) => {
    return `https://www.google.com/maps?q=${address}&output=embed`;
  };
  return (
    //<div><h1>{title}</h1>
    <div className="page-container">
      <div className="image-and-map-container">
        <div className="image-navigation-section">
          {/* Previous Image Set Button */}
          {imageSet > 1 && (
            <button onClick={handlePrevImages} className="nav-button">
              Prev
            </button>
          )}

          {/* Image placeholders */}
          {[...Array(totalImages)].map((_, i) => (
            <div
              key={i}
              className={`image-section${
                Math.ceil((i + 1) / imagesPerSet) === imageSet ? "" : " hidden"
              }`}
            >
              <div className="address-section">
                <img
                  src={`https://picsum.photos/id/${Math.floor(
                    Math.random() * 100
                  )}/200`} // Replace with actual image paths
                  alt={`Property ${i + 1}`}
                />
              </div>
            </div>
          ))}
          {/* 123 Main St, South San Francisco, CA 94080 */}
          {/*<p className="Address">
            The address is {addressWord}
          </p>
          */}
          {/* Next Image Set Button */}
          {imageSet < totalSets && (
            <button onClick={handleNextImages} className="nav-button">
              Next
            </button>
          )}
        </div>

        {/* Map placeholder */}
        <div className="map-placeholder"  >
          <iframe src={getMapEmbed(address)} width={300} height={300} >
        </iframe>
        </div>
      </div>
    

      <div className="details-container">
        <div className="property-details card-box">
          <h3>Address</h3>
          <p>{ address }</p>
        </div>

        {/* Cost calculator */}
        <div className="calculator-container card-box">
          <h1>Cost Calculator</h1>
          <p className="calculator-text"> Estimated Yearly Salary = </p>
          <p className="calculator-value">
             {"$" + ((price / 0.3) * 12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>

        </div>

        <div className="contact-details card-box">
          <div>Phone Number: XXX-XXX-XXXX</div>
          <button onClick={handleAlert} className="contact-button">
            Request Tour
          </button>
          <button onClick={handleAlert} className="contact-button">
            Bookmark
          </button>
        </div>
      </div>

      <div className="abouts-section">
        {/* About Property Section */}
        <div className="about-section">
          <h3>About Property</h3>
          <p className="details-text">
            { description }
          </p>
        </div>

        {/* About Landlord Section */}
        <div className="about-section">
          <h3>About Landlord</h3>
          <p className="details-text">
            John Doe has been a dedicated property owner for over a decade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
