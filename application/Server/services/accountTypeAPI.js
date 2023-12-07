/* accountTypeAPI.js
* This file serves as a function to retrieve account types from the database, update/delete
* account types based on specific conditions with error handling and also logging to determine
* sucess.
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Test function for getting the last changes in the Profile table
// http://localhost:3000/accountTypeAPI
async function getAccountTypes(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(`SELECT * FROM Profile`);
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return { data, meta };
}

// Update the account type if it is "Landlord" or "Renter" or "Delete", 
// otherwise it does not do anything if the given account type is invalid.
// It removes the account type from the database if the given AccountType is "Delete" 
async function updateDeleteAccountType(User_ID, AccountType) {

    let message = 'Invalid account type or delete request!';

    // Verifying invalid account type and delete request
    switch (AccountType) {
        // If AccountType is delete, then set to an empty string
        case "Delete":
            AccountType = "";
        case "Landlord":
        case "Renter":
            break;
        // Return error message if AccountType is none of the above
        default:
            return { message };
    }

    const query = `UPDATE Profile SET Account_Type = ? WHERE User_ID = ?`;
    const values = [AccountType, User_ID];
    // Execute sql query to update account type in database
    try {
        const result = await db.query(query, values);
        // Check the affected rows and determine success or fail
        message = (result.affectedRows) 
                ? `Updated account type successfully!` 
                : `Error in updating account type!`;
    // Handle errors that may come up during the query
    } catch (error) {
        console.error('Error updating account type:', error.message);
        throw new Error('Error updating Account_Type!');
    }

    return { message };
}

module.exports = {
    getAccountTypes,
    updateDeleteAccountType
};

/*
Test method:
Enter the URL: http://localhost:3000/accountTypeAPI/alice
Open Postman and create a PUT request, then open the Body tab, and select raw and then JSON.
Input the following JSON in the body: {  "AccountType": "Renter" }
Finally, click "Send" to execute the PUT request.
*/