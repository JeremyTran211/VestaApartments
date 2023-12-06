const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Search for location of rental listing by the given region name.
/*
  Testing Samples:
  http://localhost:3000/locationListingAPI/?RegionName=Downtown
  http://localhost:3000/locationListingAPI/?RegionName=Westborough
*/
async function locationListing(RegionName, page=1){

    const offset = helper.getOffset(page, config.listPerPage);

    // Join on table Region and table Location_Of_Rental_Listing 
    // over Region_ID (Zip Code) where the given Region Name is matched 
    // by the Region_ID (Zip Code).
    const rows = await db.query(
      `SELECT * FROM Location_Of_Rental_Listing AS lrl 
      INNER JOIN Region ON lrl.Region_ID = Region.Region_ID
      WHERE Region.Region_name = "${RegionName}"`
    );
   
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return { data, meta }
  }

  module.exports = {
    locationListing
  }
