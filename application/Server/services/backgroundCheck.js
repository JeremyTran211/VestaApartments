const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// for creating users
//  Report_ID | User_ID | Status   | Credit_Score | Income | Rental_History    
async function createBackgroundCheck(check) {
    const result = await db.query(
    `INSERT INTO Background_Check_Report (Report_ID, User_ID, Status, Credit_Score, Income, Rental_History)
    VALUES 
    (${check.Report_ID}, '${check.User_ID}', '${check.Status}', ${check.Credit_Score},${check.Income}, '${check.Rental_History}')`
  );
  let message = 'Error in creating Background Check Report';
  if (result.affectedRows) {
    message = 'Background Check Report created successfully';
  }
  return {message};
  }

// for retriving a background Check
async function getBackgroundCheck(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
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
// for deleting a listing
async function removeBackgroundCheck(Report_ID){
    const result = await db.query(
      `DELETE FROM Background_Check_Report WHERE Report_ID=${Report_ID}`
    );
  
    let message = 'Error in deleting Background Check';
  
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

