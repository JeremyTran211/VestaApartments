/* search.js
* This file handles search listing function based on the parameters by the user.
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Creating a function to search for listing depending on a number of parameters given by user
async function searchListing(Rooms,Bathrooms, Min_Price, Max_Price, Property_Type, page = 1){
    
    const offset = helper.getOffset(page, config.listPerPage);
    let query = "SELECT * FROM Rental_Listing WHERE ";
    //Add conditions based on the users parameters
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
    // Concatenate conditions into the query.
    query += conditions.length > 0 ? conditions.join(" AND ") : "1=1";
    // Query to search for rental listings.
    const rows = await db.query(query);
    console.log(rows);
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    try {
      const rows = await db.query(query);
      const data = helper.emptyOrRows(rows);
      return { data };
    } catch (error) {
      // Handle or log the error appropriately.
      console.error('Error while searching rental listings:', error);
      throw error;
    }
  }

  module.exports = {
    searchListing
  }