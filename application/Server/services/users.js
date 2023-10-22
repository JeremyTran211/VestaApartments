const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// for retriving users
async function getUsers(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
      `SELECT User_ID, Password
      FROM Registered_User LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
      data,
      meta
    }
  }

// for updating a password for a registered user and giving status of operation
async function updateUser(user_id, user){
  const result = await db.query(
    `UPDATE Registered_User
    SET Password="${user.password}"
    WHERE User_ID=${user_id}`
  );
  let message = 'Error in updating Registered User';

  if (result.affectedRows) {
    message = 'Registered User updated successfully';
  }

  return {message};
}


// for deleting a user
async function removeUser(user_id){
    const result = await db.query(
      `DELETE FROM Registered_User WHERE User_id=${user_id}`
    );
  
    let message = 'Error in deleting registered user';
  
    if (result.affectedRows) {
      message = 'Registered user was deleted successfully';
    }
  
    return {message};
  }

  module.exports = {
    getUsers,
    updateUser,
    removeUser
  }

