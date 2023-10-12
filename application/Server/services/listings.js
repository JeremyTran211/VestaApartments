const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  // Listing_ID, Rooms, Bathrooms, Price , Property_Type, User_ID
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

module.exports = {
  getMultiple
}