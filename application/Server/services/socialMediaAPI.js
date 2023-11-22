const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getProfile(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT Profile_ID, User_ID, \`Phone number\`, Social_Media_Link, Account_Type FROM
        Profile`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data, meta
    }

}

async function updateProfileInfo(req){
    
    const query = `UPDATE Profile
    SET Social_Media_Link = ?, 
    \`Phone number\` = ?,
        Account_Type = ?
    WHERE Profile_ID = ?` 
    const values = [req.body.Social_Media_Link, req.body[`Phone number`], req.body.Account_Type, req.params.Profile_ID];
    //Social Media link is link to either instagram or twitter profile/user account
    let message = `Error in updating profile info `;
    const result = await db.query(query,values);
    if(result.affectedRows){
        message = `Updated social media link and account type successfully`;
    }
    return {message}
}

module.exports = {
  getProfile,
  updateProfileInfo
};


//   The linkSocialMediaAccount function takes a userId, accountType (e.g., 'twitter' or 'instagram'), and socialMediaData as parameters.
//   It attempts to insert the social media data into the database. For simplicity, it assumes a table named 'profile' with columns for the user ID, account type, and account type.
//   The socialMediaData is converted to a JSON string using JSON.stringify before storing it in the database.
//   The function returns true on success and false on failure.
