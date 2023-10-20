const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// for retrieving and reading the listings in the Rental_Listing Table
async function getListings(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT Listing_ID, Rooms, Bathrooms, Price , Property_Type, User_ID 
    FROM Rental_Listing LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}
// for updating listings and gives status of operation
async function updateListing(listing_id, listing){
  const result = await db.query(
    `UPDATE Rental_Listing
    SET Rooms="${listing.Rooms}", Bathrooms=${listing.Bathrooms}, Price=${listing.Price}
    WHERE Listing_ID=${listing_id}`
    //Property_Type=${listing.Property_Type}
  );

  let message = 'Error in updating Rental Listing';

  if (result.affectedRows) {
    message = 'Rental Listing updated successfully';
  }

  return {message};
}

module.exports = {
  getListings,
  updateListing
}