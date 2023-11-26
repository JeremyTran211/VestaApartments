const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Test function for getting the last changes in the Profile table
// http://localhost:3000/accountType
async function getAccountTypes(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT Profile_ID, User_ID, Account_Type FROM Profile`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return { data, meta };
}

// Update the account type if it is "Landlord" or "Renter" or "Delete", 
// otherwise it does not do anything if the given account type is invalid.
// It removes the account type from the database if the given AccountType is "Delete" 
async function updateDeleteAccountType(User_ID, AccountType) {

    let message = 'Invalid account type or deletion request!';

    // Verifying invalid account type and deletion request
    switch (AccountType) {
        case "Delete":
            AccountType = "";
        case "Landlord":
        case "Renter":
            break;
        default:
            return { message };
    }

    const query = `UPDATE Profile SET Account_Type = ? WHERE User_ID = ?`;
    const values = [AccountType, User_ID];
    
    try {
        const result = await db.query(query, values);
        message = (result.affectedRows) 
                ? `Updated account type successfully!` 
                : `Error in updating account type!`;
    } catch (error) {
        console.error('Error updating account type:', error.message);
        throw new Error('Error updating account type!');
    }

    return { message };
}

module.exports = {
    getAccountTypes,
    updateDeleteAccountType
};

/*
Test method:
Enter the URL: http://localhost:3000/accountType/alice
Open Postman and create a PUT request, then open the Body tab, and select raw and then JSON.
Input the following JSON in the body: {  "AccountType": "Renter" }
Finally, click "Send" to execute the PUT request.
*/