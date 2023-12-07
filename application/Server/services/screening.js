/* screening.js
* This file handles renter screening based on the parameters given by the user
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Creating a function to search for renter screening, depending on a number of parameters given by user
async function renterScreening(Status,Credit_Score, Income, Saved_Properties_ID){
    page=1
    const offset = helper.getOffset(page, config.listPerPage);
    // console.log ("Status = " + Status + "Credit_Score = " + Credit_Score + "Income " + Income + "Saved_Properties_ID = " + Saved_Properties_ID)
    // Building a search query to read from background_check_report and search for user inputted filters 
    const rows = await db.query(
    
      `SELECT * FROM Background_Check_Report 
      INNER JOIN Saved_Properties ON Background_Check_Report.User_ID = Saved_Properties.User_ID
      WHERE Status = "${Status}" AND Credit_Score >= ${Credit_Score} AND Income >= ${Income} AND Saved_Properties_ID = ${Saved_Properties_ID}`

    )
   
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
      data,
      meta
    }
  }

  
  module.exports = {
    renterScreening
  }