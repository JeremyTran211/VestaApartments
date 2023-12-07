/* map2.js
* this file serves as a function to retrieve a listing based on given search parameter.
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Retrieve rental listings based on a search parameter.
async function retrieveListings(searchParam, page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    console.log("Search Parameter: " + searchParam);
    //Query to retrieve rental listing based on a specific region.
    let query = `SELECT Rental_Listing.* 
                FROM Rental_Listing  
                JOIN Location_Of_Rental_Listing ON Rental_Listing.Location_ID = Location_Of_Rental_Listing.Location_ID
                JOIN Region  ON Location_Of_Rental_Listing.Region_ID = Region.Region_ID 
                WHERE Region.Region_name = ?`;
    
    try {
      // Execute query and return listings.
        const rows = await db.query(query, [searchParam]); 
        const data = helper.emptyOrRows(rows);
        return { data };
    } catch (error) {
        console.error('Error while retrieving listings:', error);
        throw error;
    }
}

  module.exports = {
    retrieveListings
  };
  