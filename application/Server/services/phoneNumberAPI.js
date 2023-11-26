const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Test function for getting the last changes in the Tier_Two_Varification table
// http://localhost:3000/phoneNumberAPI
async function getPhoneNumbers(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM Tier_Two_Varification`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return { data, meta };
}

// Update the phone number or Delete the phone number from the database.
// If the given phone number is valid, 
// this function replaces the new phone number in the database.
// If the given phone number is "Delete", 
// this function removes the user's phone number from the database.
async function updateDeletePhoneNumber(User_ID, PhoneNumber) {

    // Verifying delete request or phone number
    PhoneNumber = (PhoneNumber == 'Delete') ? "" : PhoneNumber;

    const query = `UPDATE Tier_Two_Varification 
                    SET Phone_Number = ? 
                    WHERE User_ID = ?`;
    const values = [PhoneNumber, User_ID];

    let message = "";
    try {
        const result = await db.query(query, values);
        message = (result.affectedRows) 
                ? `Updated phone number successfully!` 
                : `Error in updating phone number!`;
    } catch (error) {
        console.error('Error updating phone number:', error.message);
        throw new Error('Error updating Phone_Number!');
    }

    return { message };
}

module.exports = {
    getPhoneNumbers,
    updateDeletePhoneNumber
};

/*
Test method:
Enter the URL: http://localhost:3000/phoneNumberAPI/alice
Open Postman and create a PUT request, then open the Body tab, and select raw and then JSON.
Input the following JSON in the body: {  "PhoneNumber": "987-654-3210" }
Finally, click "Send" to execute the PUT request.
*/