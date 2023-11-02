import React from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
  padding: "5px 10px",
  fontSize: "16px",
  cursor: "pointer",
  textAlign: "center",
  textDecoration: "none",
  outline: "none",
  color: "#fff",
  backgroundColor: "#4CAF50",
  border: "none",
  borderRadius: "15px",
  boxShadow: "0 9px #999",
};

const PropertyDetailPage = () => {
  const handleAlert = () => {
  
    alert(
      `You clicked a feature that is not implemented in the backend`
    );
  };
  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <Link to="/"><button style={buttonStyle}>Back to Home</button></Link>

      {/* Main content layout */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {/* Property Images */}
        <div style={{ flex: 4, marginRight: "10px", display: "flex" }}>
          {/* Image sections */}
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ flex: 1, marginRight: i < 3 ? "10px" : "0" }}>
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Image Display
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, position: "relative" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              marginTop: "50px",
            }}
          >
            <div>Phone Number: XXX-XXX-XXXX</div>
            <button onClick={handleAlert}
              style={{
                ...buttonStyle,
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              Request Tour
            </button>
            <button onClick={handleAlert}
              style={{
                ...buttonStyle,
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              Friend Request
            </button>
          </div>

          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            1 Day Ago
          </div>

          <button onClick={handleAlert}
            style={{ ...buttonStyle, marginBottom: "10px", width: "100%" }}
          >
            Bookmark
          </button>

          <button onClick={handleAlert}
            style={{
              ...buttonStyle,
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "12px",
            }}
          >
            Next Image
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
          marginTop: "50px",
        }}
      >
        <h3>Address</h3>
        <p>1234 Elm Street, Springfield, IL</p>

        <div style={{ display: "left", marginTop: "10px" }}>
          {/* Price Section */}
          <div style={{ marginRight: "20px" }}>
            <strong>Price:</strong> <span>$300,000</span>
          </div>

          {/* Bedroom Number Section */}
          <div style={{ marginRight: "20px" }}>
            <strong>Bedrooms:</strong> <span>3</span>
          </div>

          {/* Bathroom Number Section */}
          <div style={{ marginRight: "20px" }}>
            <strong>Bathrooms:</strong> <span>2</span>
          </div>

          {/* Square Feet Section */}
          <div>
            <strong>Square Feet:</strong> <span>1,500</span>
          </div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <h3>About Property</h3>
        <p>
          Beautiful 3-bedroom home located in a prime location. Features
          hardwood flooring, a modern kitchen, and a spacious backyard.
          Transportation includes bus and train services within walking
          distance.
        </p>
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <h3>About Landlord</h3>
        <p>
          John Doe, a seasoned property owner with over 10 years in the
          industry. Interested in gardening, biking, and hiking. Always
          available for any questions or concerns.
        </p>

        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <div>University: SF State</div>
          <div>Personality Score: 7</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
