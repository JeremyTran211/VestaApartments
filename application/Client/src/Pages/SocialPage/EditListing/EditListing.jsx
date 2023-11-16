import React, { useState } from "react";

const EditApartmentListing = () => {
  const [formData, setFormData] = useState({
    street: "",
    description: "",
    bed: "",
    bath: "",
    squareFeet: "",
    furnished: "Unfurnished",
    petPolicy: "No Pet",
    neighborhood: "",
    price: "",
  });

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages([...images, ...uploadedImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (!allFieldsFilled) {
      alert("Please fill in all the fields.");
      return;
    }
  };

  // Styles
  const formStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    margin: "20px 0",
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "calc(100% - 20px)",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    margin: "10px 0",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <button
        style={{ ...buttonStyle, position: "fixed", top: "20px", left: "20px" }}
      >
        Back to Home
      </button>

      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="text"
              placeholder="Street"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Monthly Rent"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Bed"
              value={formData.bed}
              onChange={(e) =>
                setFormData({ ...formData, bed: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Bath"
              value={formData.bath}
              onChange={(e) =>
                setFormData({ ...formData, bath: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Square Feet"
              value={formData.squareFeet}
              onChange={(e) =>
                setFormData({ ...formData, squareFeet: e.target.value })
              }
              style={inputStyle}
            />

            <select
              value={formData.furnished}
              onChange={(e) =>
                setFormData({ ...formData, furnished: e.target.value })
              }
              style={inputStyle}
            >
              <option value="Furnished">Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
            <select
              value={formData.petPolicy}
              onChange={(e) =>
                setFormData({ ...formData, petPolicy: e.target.value })
              }
              style={inputStyle}
            >
              <option value="Pet">Pet</option>
              <option value="No Pet">No Pet</option>
            </select>

            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              style={{ ...inputStyle, height: "100px" }}
            />
            <textarea
              placeholder="Neighborhood Description"
              value={formData.neighborhood}
              onChange={(e) =>
                setFormData({ ...formData, neighborhood: e.target.value })
              }
              style={{ ...inputStyle, height: "100px" }}
            />

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
              <button type="submit" style={buttonStyle}>
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditApartmentListing;
