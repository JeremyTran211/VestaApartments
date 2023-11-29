import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditListing.css";

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

  const handleUploadButtonClick = () => {
    // Trigger the file dialog when the button is clicked
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
      imageInput.click();
    }
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

  return (
    <div className="form-container1">
      <div className="form-center-container">
        <div className="form-style" style={{ textAlign: "relative" }}>
          <form onSubmit={handleSubmit}>
            <div className="input-field-container">
              <input
                type="text"
                placeholder="Name your property"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Street"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Street"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Monthly Rent"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Bed"
                value={formData.bed}
                onChange={(e) =>
                  setFormData({ ...formData, bed: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Bath"
                value={formData.bath}
                onChange={(e) =>
                  setFormData({ ...formData, bath: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Square Feet"
                value={formData.squareFeet}
                onChange={(e) =>
                  setFormData({ ...formData, squareFeet: e.target.value })
                }
                className="input-field"
              />

              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="textarea-field"
              />
              <div className="file-upload">
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  id="imageInput"
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  onClick={handleUploadButtonClick}
                  className="button"
                >
                  Upload Images
                </button>
              </div>
              <div className="image-preview-container">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="image-preview">
                    {images[index] ? (
                      <img
                        src={URL.createObjectURL(images[index])}
                        alt={`Uploaded preview ${index}`}
                      />
                    ) : (
                      "No Image"
                    )}
                  </div>
                ))}
              </div>
              <div className="open-house-container">
                <div>
                  <h4>Open House:</h4>
                  <label>
                    Date: <input type="date" className="input-field" />
                  </label>
                  <label>
                    Start Time: <input type="time" className="input-field" />
                  </label>
                  <label>
                    End Time: <input type="time" className="input-field" />
                  </label>
                </div>
                <button
                  type="submit"
                  className="button"
                  style={{ backgroundColor: "#4caf50", color: "#fff" }}
                >
                  Publish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditApartmentListing;
