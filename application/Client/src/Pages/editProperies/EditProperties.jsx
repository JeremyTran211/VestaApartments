import React, { useState } from "react";
import {Link} from "react-router-dom";

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
  // ... more properties as needed
];

const EditedPropertiesPage = () => {
  const [editedProperties, setEditedProperties] =
    useState(editedPropertiesData);
  const [selectedProperties, setSelectedProperties] = useState({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const styles = {
    bookmarkPage: {
      width: "90%",
      margin: "0 auto", 
      padding: "20px",
      backgroundColor: "#f5f5f5",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      border: "1px solid #ddd",
      textAlign: "left",
      padding: "8px",
      backgroundColor: "#4CAF50",
      color: "white",
    },
    td: {
      border: "1px solid #ddd",
      textAlign: "left",
      padding: "8px",
    },
    image: {
      width: "200px",
      height: "200px",
      objectFit: "cover",
    },
    backToSocialButton: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      position: "absolute",
      top: "20px",
      left: "20px",
    },
    viewButton: {
      padding: "5px 10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    deleteButton: {
      padding: "10px 20px",
      backgroundColor: "red",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "20px",
    },
    confirmationBox: {
      marginTop: "20px",
      padding: "20px",
      borderRadius: "4px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
    },
  };

  const handleCheckboxChange = (id) => {
    setSelectedProperties((prevSelectedProperties) => ({
      ...prevSelectedProperties,
      [id]: !prevSelectedProperties[id],
    }));
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

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

  return (
    <div style={styles.bookmarkPage}>
      <h1 style={styles.header}>Properties</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}></th>
            <th style={styles.th}>Image</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Beds</th>
            <th style={styles.th}>Baths</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {editedProperties.map((property) => (
            <tr key={property.id}>
              <td style={styles.td}>
                <input
                  type="checkbox"
                  checked={!!selectedProperties[property.id]}
                  onChange={() => handleCheckboxChange(property.id)}
                />
              </td>
              <td style={styles.td}>
                <img
                  src={property.image}
                  alt={`${property.title} thumbnail`}
                  style={styles.image}
                />
              </td>
              <td style={styles.td}>{property.title}</td>
              <td style={styles.td}>{property.address}</td>
              <td style={styles.td}>{property.price}</td>
              <td style={styles.td}>{property.beds}</td>
              <td style={styles.td}>{property.baths}</td>
              <td style={styles.td}>{property.status}</td>
              <td style={styles.td}>
                <Link to="/edit-listing"><button style={styles.viewButton}>Edit Property</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {Object.values(selectedProperties).some((isSelected) => isSelected) && (
        <button style={styles.deleteButton} onClick={handleDeleteClick}>
          Delete Listing
        </button>
      )}
      {showDeleteConfirmation && (
        <div style={styles.confirmationBox}>
          <p>Are you sure you want to delete the selected listings?</p>
          <button onClick={confirmDeletion}>Confirm</button>
          <button onClick={cancelDeletion}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default EditedPropertiesPage;
