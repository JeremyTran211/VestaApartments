import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditProperties.css";

//Hardcoded data for properties to be edited
const editedPropertiesData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150?text=The+Cottage.png",
    title: "Apartments",
    address: "123 Maple Drive, Lakeview",
    price: "$1,500/Month",
    beds: 4,
    baths: 1.5,
    status: "Hidden",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150?text=Orchard+Valley.png",
    title: "Apartments",
    address: "456 Oak Lane, Rivertown",
    price: "$700/Month",
    beds: 1,
    baths: 1,
    status: "Active",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150?text=The+White+House.png",
    title: "Condo",
    address: "789 Pine Street, Hilltop",
    price: "$1,000/Month",
    beds: 2,
    baths: 2,
    status: "Active",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150?text=The+Old+Post+Office.png",
    title: "Family Home",
    address: "321 Birch Road, Oldtown",
    price: "$1,200/Month",
    beds: 1,
    baths: 2,
    status: "Active",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150?text=The+Nook.png",
    title: "Shared Home",
    address: "654 Cedar Ave, Westwood",
    price: "$1,115/Month",
    beds: 3,
    baths: 1.5,
    status: "Active",
  },
];

const EditedPropertiesPage = () => {
  //State to manage the properties and selected properties for editing
  const [editedProperties, setEditedProperties] =
    useState(editedPropertiesData);
  const [selectedProperties, setSelectedProperties] = useState({});

  //State for managing the visibility of confirmation modals
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showHideConfirmation, setShowHideConfirmation] = useState(false);

  //Handler to toggle selection of properties
  const handleCheckboxChange = (id) => {
    setSelectedProperties((prevSelectedProperties) => ({
      ...prevSelectedProperties,
      [id]: !prevSelectedProperties[id],
    }));
  };

  //Handlers for showing confirmation modals
  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  //Confirm and cancel handlers for deletion
  const confirmDeletion = () => {
    const newEditedProperties = editedProperties.filter(
      (property) => !selectedProperties[property.id]
    );
    setEditedProperties(newEditedProperties);
    setSelectedProperties({});
    setShowDeleteConfirmation(false);
  };

  const cancelDeletion = () => {
    setShowDeleteConfirmation(false);
  };

  const handleHideClick = () => {
    setShowHideConfirmation(true);
  };

  //Confirm and cancel handlers for hiding properties
  const confirmHide = () => {
    const newEditedProperties = editedProperties.map((property) => {
      if (selectedProperties[property.id]) {
        return { ...property, status: "Not Active" };
      }
      return property;
    });
    setEditedProperties(newEditedProperties);
    setSelectedProperties({});
    setShowHideConfirmation(false);
  };

  const cancelHide = () => {
    setShowHideConfirmation(false);
  };

  return (
    <div className="bookmarkPage">
      <h1 className="header">Properties</h1>
      <h2>
          <Link to="/edit-listing">
            <button className="addListingButton">Add Listing</button>
          </Link>
        </h2>
      <table className="table">
        {/* Table headers and body */}
        <thead>
          <tr>
            <th className="th"></th>
            <th className="th">Image</th>
            <th className="th">Title</th>
            <th className="th">Address</th>
            <th className="th">Price</th>
            <th className="th">Beds</th>
            <th className="th">Baths</th>
            <th className="th">Status</th>
            <th className="th"></th>
          </tr>
        </thead>
        <tbody>
          {editedProperties.map((property) => (
            <tr key={property.id}>
              <td className="td">
                <input
                  type="checkbox"
                  checked={!!selectedProperties[property.id]}
                  onChange={() => handleCheckboxChange(property.id)}
                />
              </td>
              <td className="td">
                <img
                  src={property.image}
                  alt={`${property.title} thumbnail`}
                  className="image"
                />
              </td>
              <td className="td">{property.title}</td>
              <td className="td">{property.address}</td>
              <td className="td">{property.price}</td>
              <td className="td">{property.beds}</td>
              <td className="td">{property.baths}</td>
              <td className="td">{property.status}</td>
              <td className="td">
                <Link to="/edit-listing">
                  <button className="viewButton">Edit Property</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Listing Button (initial position) */}
      {!Object.values(selectedProperties).some((isSelected) => isSelected) && (
        <div className="addListingButtonContainer">
          <Link to="/add-listing">
           {/* <button className="addListingButton">Add Listing</button>*/}
          </Link>
        </div>
      )}

      <div className="actions">
        {Object.values(selectedProperties).some((isSelected) => isSelected) && (
          <>
            {/* Add Listing Button (shifted position) */}
            <Link to="/add-listing">
              <button className="addListingButton">Add Listing</button>
            </Link>
            <button className="deleteButton" onClick={handleDeleteClick}>
              Delete Listing
            </button>
            <button className="hideButton" onClick={handleHideClick}>
              Hide Listing
            </button>
          </>
        )}
      </div>

      {/* Confirmation Modals */}
      {showDeleteConfirmation && (
        <div className="confirmationBox">
          <p>Are you sure you want to delete the selected listings?</p>
          <button onClick={confirmDeletion}>Confirm</button>
          <button onClick={cancelDeletion}>Cancel</button>
        </div>
      )}
      {showHideConfirmation && (
        <div className="confirmationBox">
          {/* Confirmation Box for Hide */}
          <p>Are you sure you want to hide the selected listings?</p>
          <button onClick={confirmHide}>Confirm</button>
          <button onClick={cancelHide}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default EditedPropertiesPage;
