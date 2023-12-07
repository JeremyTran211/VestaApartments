/* backgroundChecks.js
*This file serves as a function to create, get, and remove background checks from our database.  
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// For creating users
// Report_ID | User_ID | Status   | Credit_Score | Income | Rental_History    
async function createBackgroundCheck(check) {
    const result = await db.query(
    `INSERT INTO Background_Check_Report (Report_ID, User_ID, Status, Credit_Score, Income, Rental_History)
    VALUES 
    (${check.Report_ID}, '${check.User_ID}', '${check.Status}', ${check.Credit_Score},${check.Income}, '${check.Rental_History}')`
  );
  //Error message in case there is issues during background check.
  let message = 'Error in creating Background Check Report';
  if (result.affectedRows) {
    // Check the affected rows and determine success or fail.
    message = 'Background Check Report created successfully';
  }
  return {message};
  }

// For retriving a background Check
async function getBackgroundCheck(page = 1){
    //Calculate offset
    const offset = helper.getOffset(page, config.listPerPage);
    //Query the database to retrieve background check for the specific page
    const rows = await db.query(
      `SELECT *
      FROM Background_Check_Report LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
      data,
      meta
    }
  }
// For deleting a listing
async function removeBackgroundCheck(Report_ID){
    // Execute database query to delete the specified background report
    const result = await db.query(
      `DELETE FROM Background_Check_Report WHERE Report_ID=${Report_ID}`
    );
    // Error message in case of issues while deleting background check.
    let message = 'Error in deleting Background Check';
    // Check the affected rows and determine success or fail
    if (result.affectedRows) {
      message = 'Background Check was deleted successfully';
    }
  
    return {message};
  }
  
  
  module.exports = {
    createBackgroundCheck,
    getBackgroundCheck,
    removeBackgroundCheck
  }

