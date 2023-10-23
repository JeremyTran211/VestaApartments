const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function create(programmingLanguage){
  const result = await db.query(
    `INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    ('${programmingLanguage.name}', ${programmingLanguage.released_year}, ${programmingLanguage.githut_rank}, ${programmingLanguage.pypl_rank}, ${programmingLanguage.tiobe_rank})`
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}

// for creating users
async function createUser(user) {
  const result = await db.query(
  `INSERT INTO Registered_User (User_ID, Password)
  VALUES 
  (${user.User_ID}, '${user.Password}')`
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
    createUser,
    getUsers,
    updateUser,
    removeUser, 
  
  }

