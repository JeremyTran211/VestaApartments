/* Registeration.js
* This handles the registration for users and inputs the infomation given
* by the Client side into the database for login.
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcrypt');

//Check if the email has been used before 
async function checkEmail(email) {
    try {
        //Query to count the occurences of the provided email in Registered_User table.
        const result = await db.query(
            `SELECT COUNT(*) as count FROM Registered_User WHERE Email = ?`,
            [email]
        );
        //True = in use, false = not in use.
        return result[0].count >= 1;
    // Message to determine if theres error in checking email.
    } catch (err) {
        console.error('Error in checkEmail:', err);
        throw new Error('Error checking email'); 
    }
}

//Swaps characters of the email around to generate the User_ID
function scrambleEmail(email) {
    const emailArr = email.split('');
    //Iterate over the email characters and swap them randomly.
    for (let i = emailArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emailArr[i], emailArr[j]] = [emailArr[j], emailArr[i]]; 
    }
    //Return scrambled email address.
    return emailArr.join('');
}

//The function to register user
async function registerUser(email, password, firstName, lastName) {
    try {
        // Check if the email is already in use.
        if (await checkEmail(email)) {
            return { success: false, message: 'Email already in use' };
        }
        // Use bcrypt to hash user's password.
        console.log('Password Value:', password);
        const hashedPassword = await bcrypt.hash(password, 10); 
        // Generate a scrambled User_ID based on the email.
        const userId = scrambleEmail(email);
        console.log('Values to insert:', userId, email, hashedPassword, firstName, lastName);
        //Query to insert new user into Registered_User table.
        const result = await db.query(
            `INSERT INTO Registered_User (User_ID, Email, Password, First_Name, Last_Name) VALUES (?, ?, ?, ? ,?)`,
            [userId, email, hashedPassword, firstName, lastName]
        );
        //Check affected rows to determine success or fail.
        if (result.affectedRows == 1) {
            return { success: true, message: 'User registered successfully' };

        } else {
            return { success: false, message: 'Error in user registration' };
        }
    // Return error message if user registration failed.
    } catch (err) {
        console.error('Error in registerUser function:', err);
        return { success: false, message: 'Error in user registration j', error: err.message };
    }
}

module.exports = {
    registerUser
};
