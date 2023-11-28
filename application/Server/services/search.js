const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Creating a function to search for listing depending on a number of parameters given by user
async function searchListing(Rooms,Bathrooms, Min_Price, Max_Price, Property_Type){
    page=1
    const offset = helper.getOffset(page, config.listPerPage);
    console.log ("Rooms = " + Rooms + "Bathrooms = " +Bathrooms +", MinPrice "+ Min_Price+ ", MaxPrice " + Max_Price + ", Property_Type "+ Property_Type)
    // Building a search query to read from Rental_Listing and search for user inputted filters 
    const rows = await db.query(
    
      `SELECT * FROM Rental_Listing
      WHERE Rooms >= ${Rooms} AND Bathrooms >= ${Bathrooms} AND Price >= ${Min_Price} AND Price <= ${Max_Price} AND Property_Type = "${Property_Type}"`

    
    )
   
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
      data,
      meta
    }
  }

  
  module.exports = {
    searchListing
  }