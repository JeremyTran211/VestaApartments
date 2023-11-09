const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcrypt');

// for login user we must first get the login details, then we must compare with database to make sure it exists
// for comparing the given password for login
async function loginUser(Email, Password){

   console.log ("Email = " + Email + "Password = " + Password);
    const result1 = await db.query(
      `SELECT * FROM Registered_User WHERE Email = ?`, [Email]
    );

    if(result1.length == 0){
      console.log('No user found with that email')
      return { message: "No user found with that email" };

    }

    const match = await bcrypt.compare(Password, result1[0].Password);
    //const match = await compare(Password, result1[0].Password);
    let message = "";
    if (match) {
      console.log ('User successfully logged in')
      return {message: 'User login successfully'};

    } else {
      console.log ('User successfully logged in')
      return {message: 'Error in login user'};
    }
  }

  module.exports = {
    loginUser
  }