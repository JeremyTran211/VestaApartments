const db = require('./db');
const helper = require('../helper');
const config = require('../config');


// for creating a listing
async function createListing(listing) {
  const result = await db.query(
  `INSERT INTO Rental_Listing
  (Listing_ID, User_ID, Rooms, Bathrooms, Price, Property_Type, Location_ID) 
  VALUES 
  (${listing.Listing_ID},'${listing.User_ID}',${listing.Rooms},${listing.Bathrooms},${listing.Price}, 
  '${listing.Property_Type}',${listing.Location_ID})`
);
let message = 'Error in creating Rental Listing';

if (result.affectedRows) {
  message = 'Rental Listing created successfully';
}

return {message};
}
// for retrieving and reading the listings in the Rental_Listing Table
async function getListings(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM Rental_Listing LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}
async function updateListing(listing_id, listing){
  const result = await db.query(
    `UPDATE Rental_Listing
    SET User_ID ="${listing.User_ID}",Rooms= IF(${listing.Rooms}"="undefined, Rooms,${listing.Rooms}), 
    Bathrooms=IF(${listing.Bathrooms}"="undefined, Bathrooms,${listing.Bathrooms}),
    Price=IF("${listing.Price}"="undefined", Price,${listing.Price}), 
    Property_Type=IF("${listing.Property_Type}"="undefined", Property_Type,"${listing.Property_Type}"),
    Location_ID=IF(${listing.Location_ID}"="undefined, Location_ID,${listing.Location_ID}
    WHERE Listing_ID=${listing_id}`
  );

  let message = 'Error in updating Rental Listing';

  if (result.affectedRows) {
    message = 'Rental Listing updated successfully';
  }

  return {message};
}

 // for deleting a listing
async function removeListing(listing_id){
  const result = await db.query(
    `DELETE FROM Rental_Listing WHERE Listing_id=${listing_id}`
  );

  let message = 'Error in deleting rental listing';

  if (result.affectedRows) {
    message = 'Rental listing was deleted successfully';
  }

  return {message};
}


module.exports = {
  getListings,
  updateListing, 
  removeListing,
  createListing
}