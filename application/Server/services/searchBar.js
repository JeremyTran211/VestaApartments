/* searchBar.js
* This file handles the search bar in the homepage which will allow
* users to search by address or zipcode.
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// this api will allow to use searchbar on main homepage and allow to search by address or zipcode
// for retrieving listings from Location_Of_Rental_Listing Table by zipcode and address
async function retrieveListings(searchParam, page=1){
    // offset if you want to only display a certain page
    const offset = helper.getOffset(page, config.listPerPage);
    let query = "SELECT * FROM Location_Of_Rental_Listing WHERE ";
    const conditions = [];
    console.log("The length of the parameter is " + searchParam.length);
      // taking user input and adding to query if user input matches the database 
    if (!isNaN(searchParam) && searchParam.length == 5 )   {
        conditions.push(`Region_ID = ${searchParam}`);

      } else {
        conditions.push(`Address LIKE "%${searchParam}%"`);
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
  