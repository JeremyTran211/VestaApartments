import React from "react";
import {Link} from "react-router-dom";

const PropertyDetailPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Small Back to Home button at top-left */}<Link to="/">
      <button
        style={{
          fontSize: "10px",
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000,
        }}
      >
        Back to Home
      </button></Link>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <img
          src="yourDisplayImageUrlHere"
          alt="Property 1"
          style={{ width: "32%", height: "250px", border: "1px solid black" }}
        />
        <img
          src="yourDisplayImageUrlHere"
          alt="Property 2"
          style={{ width: "32%", height: "250px", border: "1px solid black" }}
        />
        <img
          src="yourDisplayImageUrlHere"
          alt="Property 3"
          style={{ width: "32%", height: "250px", border: "1px solid black" }}
        />
        <button style={{ fontSize: "12px", marginRight: "5px" }}>
          Next Image
        </button>
      </div>

      <div
        style={{
          width: "100%",
          border: "1px solid black",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <h3 style={{ border: "1px solid black", padding: "10px" }}>
            Address
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Monthly Rent: $1200
          </div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Bed: 3
          </div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Bath: 2
          </div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Square Feet: 1500
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          border: "1px solid black",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <h3 style={{ border: "1px solid black", padding: "10px" }}>
            About Property
          </h3>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Home Features: Pool, Garage
          </div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Transportation: Near bus stop
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "65%",
            border: "1px solid black",
            padding: "20px",
            marginRight: "20px",
          }}
        >
          <h3 style={{ border: "1px solid black", padding: "10px" }}>
            About Landlord
          </h3>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Description: Friendly and responsive
          </div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Interest: Gardening
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <div>Name: University</div>
            <div>Test Score: 85</div>
          </div>
          <button
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            Request Tour
          </button>
          <button
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            Friend Request
          </button>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            Phone Number: XXX-XXX-XXXX
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: "15%", right: "20px" }}>
        <button
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          Bookmark
        </button>
        <div style={{ border: "1px solid black", padding: "10px" }}>
          1 Day Ago
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
