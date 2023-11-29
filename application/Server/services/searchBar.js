const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// this api will allow to use searchbar on main homepage and allow to search by address or zipcode

// Location_ID | Region_ID | Address   | Coordinates   
async function searchListing(Rooms,Bathrooms, Min_Price, Max_Price, Property_Type, page = 1){
    
    const offset = helper.getOffset(page, config.listPerPage);
    let query = "SELECT * FROM Rental_Listing WHERE ";

    const conditions = [];
    if (Rooms) {
      conditions.push(`Rooms >= ${Rooms}`);
    }
    if (Bathrooms) {
        conditions.push(`Bathrooms >= ${Bathrooms}`);
    }
    if (Min_Price) {
        conditions.push(`Price >= ${Min_Price}`);
    }
    if (Max_Price) {
        conditions.push(`Price <= ${Max_Price}`);
    }

    query += conditions.length > 0 ? conditions.join(" AND ") : "1=1";
    
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    try {
      const rows = await db.query(query);
      const data = helper.emptyOrRows(rows);
      return { data };
    } catch (error) {
      // Handle or log the error appropriately
      console.error('Error while searching rental listings:', error);
      throw error;
    }
  }

  module.exports = {
    searchListing
  }
// for retrieving listings from Location_Of_Rental_Listing Table by zipcode and address
async function retrieveListings(Region_ID, Address, page=1){
    // offset if you want to only display a certain page
    const offset = helper.getOffset(page, config.listPerPage);
    let query = "SELECT * FROM Location_Of_Rental_Listing WHERE ";
    const conditions = [];
      // taking user input and adding to query if user input matches the database 
    if (Region_ID) {
        conditions.push(`Region_ID = ${Region_ID}`);
      }
    if (Address) {
        conditions.push(`Address LIKE "%${Address}%"`);
      }
    // making query dynamic and keeps adding to parameters with add
    query += conditions.length > 0 ? conditions.join(" AND ") : "1=1";
    // waiting and populating the results of the query
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    try {
        const rows = await db.query(query);
        const data = helper.emptyOrRows(rows);
        return { data };
      } catch (error) {
        // Handle or log the error appropriately
        console.error('Error while retrieving listings from searchbar:', error);
        throw error;
      }
    
  }
  module.exports = {
    retrieveListings
  };
  