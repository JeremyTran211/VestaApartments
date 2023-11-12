const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcrypt');

//Check if the email has been used before 
async function checkEmail(email) {
    try {
        const result = await db.query(
            `SELECT COUNT(*) as count FROM Registered_User WHERE Email = ?`,
            [email]
        );
        return result[0].count >= 1;

    } catch (err) {
        console.error('Error in checkEmail:', err);
        throw new Error('Error checking email'); 
    }
}

//Swaps characters of the email around to generate the User_ID
function scrambleEmail(email) {
    const emailArr = email.split('');

    for (let i = emailArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emailArr[i], emailArr[j]] = [emailArr[j], emailArr[i]]; 
    }

    return emailArr.join('');
}

//The function to register user
async function registerUser(email, password, firstName, lastName) {
    try {
        if (await checkEmail(email)) {
            return { success: false, message: 'Email already in use' };
        }
        
        console.log('Password Value:', password);
        const hashedPassword = await bcrypt.hash(password, 10); 

        const userId = scrambleEmail(email);
        console.log('Values to insert:', userId, email, hashedPassword, firstName, lastName);

        const result = await db.query(
            `INSERT INTO Registered_User (User_ID, Email, Password, First_Name, Last_Name) VALUES (?, ?, ?, ? ,?)`,
            [userId, email, hashedPassword, firstName, lastName]
        );

        if (result.affectedRows == 1) {
            return { success: true, message: 'User registered successfully' };

        } else {
            return { success: false, message: 'Error in user registration' };
        }

    } catch (err) {
        console.error('Error in registerUser function:', err);
        return { success: false, message: 'Error in user registration j', error: err.message };
    }
}

module.exports = {
    registerUser
};
