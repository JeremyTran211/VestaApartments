const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function linkSocialMediaAccount(userId, accountType, socialMediaData) {
    try {
      // Using columns 'User_ID', 'Account_Type', and 'Data' , might change later
      const result = await db.query(
        `INSERT INTO SocialMediaData (User_ID, Account_Type, Data)
        VALUES (?, ?, ?)`,
        [userId, accountType, JSON.stringify(socialMediaData)]
      );
  
      if (result.affectedRows) {
        return true; // Success
      } else {
        return false; // Insertion failed
      }
    } catch (error) {
      console.error('Error linking social media account:', error.message);
      return false;
    }
  }
  
  module.exports = {
    linkSocialMediaAccount,
  };
 
  
//   The linkSocialMediaAccount function takes a userId, accountType (e.g., 'twitter' or 'instagram'), and socialMediaData as parameters.
//   It attempts to insert the social media data into the database. For simplicity, it assumes a table named 'SocialMediaData' with columns for the user ID, account type, and social media data.
//   The socialMediaData is converted to a JSON string using JSON.stringify before storing it in the database.
//   The function returns true on success and false on failure.
//   Make sure to adapt this code according to your actual database structure and requirements. Additionally, implement proper error handling, validation, and security measures based on your specific needs.
  
  
  
  
  
  