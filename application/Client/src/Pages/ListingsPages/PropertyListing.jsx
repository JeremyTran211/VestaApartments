 import React, { useState } from "react";

const PropertyDetailPage = () => {

  const [imageSet, setImageSet] = useState(1);


  // cost calculator
  const [cost, setCost] = useState(0);
  /*
  cost = pge+water+garbage+internet+price/rooms
  
  database missing utilites in rental_listing table
  Property has no api call to gather listing info
  and no variable declariations for listing info 
   */
  
  const percent = 11 * 0.3;
  async function calculator() {
    setCost(percent);
  };

  const handlePrevImages = () => {
    setImageSet(1);
  };

  const handleNextImages = () => {
    setImageSet(2);
  };

  const handleAlert = () => {
    alert("You clicked a feature that is not implemented in the backend");
  };

  // CSS-in-JS Styles
  const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px",
      maxWidth: "1400px",
      margin: "0 auto",
      marginTop: "60px",
      backgroundColor: "#f8f8f8",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    imageAndMapContainer: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      marginBottom: "30px",
    },
    imageNavigationSection: {
      display: "flex",
      justifyContent: "center",
      marginRight: "20px",
    },
    imageSection: {
      height: "300px",
      width: "300px",
      display: "inline-block",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #ddd",
      borderRadius: "6px",
      marginRight: "15px",
    },
    mapPlaceholder: {
      height: "300px",
      width: "300px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1em",
      color: "#666",
      minWidth: "300px",
    },
    detailsContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "30px",
    },
    propertyDetails: {
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "25px",
      flex: "1",
      marginRight: "30px",
    },
    contactDetails: {
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "15px",
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    contactButton: {
      padding: "5px 10px",
      fontSize: "16px",
      marginTop: "10px",
      marginBottom: "10px",
      color: "#fff",
      backgroundColor: "#4CAF50",
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 5px #999",
      cursor: "pointer",
      width: "80%",
      height: "40px",
    },
    navButton: {
      padding: "10px 15px",
      fontSize: "18px",
      margin: "5px",
      color: "#fff",
      backgroundColor: "#4CAF50",
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 9px #999",
      cursor: "pointer",
    },
    aboutSection: {
      marginTop: "40px",
      padding: "20px",
      backgroundColor: "#fafafa",
    },
    calculatorContainer: {
      width: "30%",
      margin: "0 auto",
      border: "1px solid black",
      padding: "10px",
    },
    calculatorText: {
      fontSize: "18px",
      display: "inline-block",
      marginLeft: "20px",
    },
    calculatorValue: {
      fontSize: "18px",
      display: "inline-block",
      marginLeft: "20px",
      fontWeight: "bold",
    },
    calculatorHeader: {
      textAlign: "center",
      fontAize: "24px",
      fontWeight: "bold",
      color: "black",
    },
    // ... other styles
  };

  // JSX
  return (
    <div style={styles.pageContainer}>
      <div style={styles.imageAndMapContainer}>
        {/* Image Navigation Section */}
        <div style={styles.imageNavigationSection}>
          {/* Prev Image Button */}
          {imageSet === 2 && (
            <button onClick={handlePrevImages} style={styles.navButton}>
              Prev
            </button>
          )}
          {/* Image Sections */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.imageSection,
                display:
                  (i < 3 && imageSet === 1) || (i >= 3 && imageSet === 2)
                    ? "inline-block"
                    : "none",
              }}
            >
              {/* Image Placeholder */}
              <img
                src={`path/to/image${i + 1}.jpg`} // Replace with actual image paths
                alt={`Property ${i + 1}`}
                style={styles.image}
              />
            </div>
          ))}
          {/* Next Image Button */}
          {imageSet === 1 && (
            <button onClick={handleNextImages} style={styles.navButton}>
              Next
            </button>
          )}
        </div>

        {/* Map Placeholder */}
        <div style={styles.mapPlaceholder}>Map Placeholder</div>
      </div>

      {/* Details Container */}
      <div style={styles.detailsContainer}>
        {/* Property Details */}
        <div style={styles.propertyDetails}>
          <h3 style={styles.detailsHeader}>Address</h3>
          <p style={styles.detailsText}>1234 Elm Street, Springfield, IL</p>
          <p style={styles.detailsText}>
            <strong>Price:</strong> $300,000
          </p>
          <p style={styles.detailsText}>
            <strong>Bedrooms:</strong> 3
          </p>
          <p style={styles.detailsText}>
            <strong>Bathrooms:</strong> 2
          </p>
          <p style={styles.detailsText}>
            <strong>Square Feet:</strong> 1,500
          </p>
        </div>

{/* Cost calculator or rent to income ratio */}
<div style={styles.calculatorContainer}>
            <h1 style={styles.calculatorHeader}>Cost Calculator</h1>
            <p style={styles.calculatorText}>Rent per person = </p>
            <p style={styles.calculatorValue}>{"$"+Math.round(percent)}</p>
        </div>

        {/* Contact Details */}
        <div style={styles.contactDetails}>
          <div>Phone Number: XXX-XXX-XXXX</div>
          <button onClick={handleAlert} style={styles.contactButton}>
            Request Tour
          </button>
          <button onClick={handleAlert} style={styles.contactButton}>
            Friend Request
          </button>
          <button onClick={handleAlert} style={styles.contactButton}>
            Bookmark
          </button>
        </div>
      </div>

      {/* About Property Section */}
      <div style={styles.aboutSection}>
        <h3 style={styles.detailsHeader}>About Property</h3>
        <p style={styles.detailsText}>
          This beautiful 3-bedroom home, located in a prime residential area,
          offers a perfect blend of comfort and convenience. The property
          features hardwood flooring throughout, adding warmth and elegance to
          the space. A modern kitchen equipped with state-of-the-art appliances
          makes it ideal for those who love cooking. The spacious backyard
          serves as a serene retreat for relaxation or a delightful space for
          gatherings. The home's proximity to essential amenities like shopping
          centers, parks, and top-rated schools makes it an excellent choice for
          families. Efficient public transportation, including bus and train
          services, is within walking distance, ensuring easy commuting.
        </p>
        <ul style={styles.detailsText}>
          <li>Furnished/Unfurnished: Unfurnished</li>
          <li>Pet Policy: No Pets</li>
        </ul>
      </div>

      {/* About Landlord Section */}
      <div style={styles.aboutSection}>
        <h3 style={styles.detailsHeader}>About Landlord</h3>
        <p style={styles.detailsText}>
          John Doe has been a dedicated property owner for over a decade, known
          for his attention to detail and commitment to maintaining high-quality
          living standards. With a background in architecture, John brings a
          unique perspective to property management, ensuring that each home is
          not only aesthetically pleasing but also functional and comfortable.
          An avid community supporter, he actively participates in local events
          and initiatives to improve the neighborhood. His hobbies include
          gardening, which is evident in the well-kept landscapes of his
          properties, biking along the city's scenic routes, and hiking in the
          nearby mountains. John prides himself on being approachable and
          responsive, always available to address tenants' needs and concerns.
        </p>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
