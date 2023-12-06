import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./EditListing.css";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditApartmentListing = () => {
  //State the store form data
  const [formData, setFormData] = useState({
    User_ID: "",
    Address: "",
    ZipCode: "",
    Description: "",
    Rooms: "",
    Bathrooms: "",
    Square_Feet: "",
    Price: "",
  });

  //State to manage uploaded images and navigate to other routes
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  //Effect to decode JWT token from localStorage and update User_ID in form data
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userID = decodedToken.id;

      if (userID && formData.User_ID !== userID) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          User_ID: userID,
        }));
      }
    }
  }, []);

  //Handler for file input change (image upload)
  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages([...images, ...uploadedImages]);
  };

  //Handler for file input change (image upload)
  const handleUploadButtonClick = () => {
    // Trigger the file dialog when the button is clicked
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
      imageInput.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    //Validate that all fields are filled
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (!allFieldsFilled) {
      alert("Please fill in all the fields.");
      return;
    }

    //API call to submit form data
    try {
      const response = await fetch("/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Submission successful", data);
        navigate("/listings");
      } else {
        console.error("Submission failed", await response.text());
      }
    } catch (error) {
      console.error("Problem with fetching:", error.message);
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
                placeholder="Title"
                value={formData.Title}
                onChange={(e) =>
                  setFormData({ ...formData, Title: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, Address: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Zip-Code"
                value={formData.ZipCode}
                onChange={(e) =>
                  setFormData({ ...formData, ZipCode: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Monthly Rent"
                value={formData.Price}
                onChange={(e) =>
                  setFormData({ ...formData, Price: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Bed"
                value={formData.Rooms}
                onChange={(e) =>
                  setFormData({ ...formData, Rooms: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Bath"
                value={formData.Bathrooms}
                onChange={(e) =>
                  setFormData({ ...formData, Bathrooms: e.target.value })
                }
                className="input-field"
              />
              <input
                type="text"
                placeholder="Square Feet"
                value={formData.Square_Feet}
                onChange={(e) =>
                  setFormData({ ...formData, Square_Feet: e.target.value })
                }
                className="input-field"
              />

              <textarea
                placeholder="Description"
                value={formData.Description}
                onChange={(e) =>
                  setFormData({ ...formData, Description: e.target.value })
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
