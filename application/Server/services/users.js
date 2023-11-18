const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcrypt');

// for creating users
async function createUser(user) {
  const result = await db.query(
  `INSERT INTO Registered_User (User_ID, Password, Email, First_Name, Last_Name)
  VALUES 
  ('${user.User_ID}', '${user.Password}', '${user.Email}', '${user.First_Name}','${user.Last_Name}')`
);
let message = 'Error in creating Registered User';
if (result.affectedRows) {
  message = 'Registered User created successfully';
}
return {message};
}
// for retriving users
async function getUsers(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
      `SELECT *
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
  console.log ('The user password is ', user.Password)
  // Updating Registered_User and retaining the existing values from the database if input parameters are undefinied or not specified in the put call  
  const hashedPassword = 0;
  if (user.Password != null) { 
    // the password is getting hashed 
    hashedPassword = await bcrypt.hash(user.Password, 10); 
    const result = await db.query(

      `UPDATE Registered_User
  
      SET Password= "${hashedPassword}"`
    );
  }
  const result2 = await db.query(
  `UPDATE Registered_User

    Email = IF("${user.Email}"="undefined", Email,"${user.Email}"), 
    First_Name = IF("${user.First_Name}"="undefined", First_Name,"${user.First_Name}"), 
    Last_Name= IF("${user.Last_Name}"="undefined", Last_Name,"${user.Last_Name}")
    WHERE User_ID="${user_id}"`
);
if (result2.affectedRows){
  message = 'Registed User updated successsfully';
}
  let message = 'Error in updating Registered User';

  if (result.affectedRows) {
    message = 'Registered User updated successfully';
  }
  
  

  return {message};
}

// for deleting a user
async function removeUser(user_id){
    const result = await db.query(
      `DELETE FROM Registered_User WHERE User_id='${user_id}'`
    );
  
    let message = 'Error in deleting registered user';
  
    if (result.affectedRows) {
      message = 'Registered user was deleted successfully';
    }
  
    return {message};
  }

  module.exports = {
    createUser,
    getUsers,
    updateUser,
    removeUser, 
  
  }

