import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditApartmentListing = () => {
  const [formData, setFormData] = useState({
    street: "",
    description: "",
    bed: "",
    bath: "",
    price: "",
  });
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages([...images, ...uploadedImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <button
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          fontSize: "16px",
          padding: "10px 1px",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "#fff",
          boxShadow: "0 4px #999",
        }}
      >
        Back to Home
      </button>

      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingBottom: "30px",
            }}
          >
            <input
              type="text"
              placeholder="Street"
              value={formData.street}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, street: e.target.value }))
              }
              style={{ width: "100%" }}
            />
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <input
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, price: e.target.value }))
                }
                style={{ flex: 1 }}
              />
              <input
                type="text"
                placeholder="Bed"
                value={formData.bed}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bed: e.target.value }))
                }
                style={{ flex: 1 }}
              />
              <input
                type="text"
                placeholder="Bath"
                value={formData.bath}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bath: e.target.value }))
                }
                style={{ flex: 1 }}
              />
            </div>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              style={{
                width: "100%",
                height: "100px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "20px",
                marginBottom: "20px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              paddingBottom: "30px",
            }}
          >
            <label>Upload Images: </label>
            <input type="file" multiple onChange={handleImageUpload} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid gray",
                    width: "150px",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {images[index] ? (
                    <img
                      src={URL.createObjectURL(images[index])}
                      alt={`Uploaded preview ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    "No Image"
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div>
              <h4>Open House:</h4>
              <label>
                Date: <input type="date" />
              </label>
              <label>
                Start Time: <input type="time" />
              </label>
              <label>
                End Time: <input type="time" />
              </label>
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
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
                marginTop: "20px",
                alignSelf: "flex-end",
              }}
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditApartmentListing;
