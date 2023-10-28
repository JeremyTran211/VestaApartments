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

// for comparing the given password for login
async function loginUser(user_email, user){

  // get user_id from database, table profile
  const result1 = await db.query(
    `SELECT User_ID
    FROM profile
    WHERE Email=${user_email}`
  );
  if (!result1.affectedRows) {
    let message = 'Error in loading User_ID from table profile';
    return message;
  }

  // check if user_id is unique
  if (result1.values.length != 1) {
    let message = 'User_ID is not unique';
    return message;
  }

  // get password from database, table registered_user
  const result2 = await db.query(
    `SELECT Password
    FROM registered_user
    WHERE User_ID=${result1.values[0].User_ID}]}]}`
  );
  if (!result2.affectedRows) {
    let message = 'Error in loading Password from table registered_user';
    return message;
  }

  // compare given password with databased password
  const match = await bcrypt.compare(user.password, result2.values[0].password);
  let message = "";
  if (match) {
    message = 'User login successfully';
  } else {
    message = 'Error in login user';
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
    loginUser, 
  
  }

