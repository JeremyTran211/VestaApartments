const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcrypt');
// for login user we must first get the login details, then we must compare with database to make sure it exists
// for comparing the given password for login
async function loginUser(Email, Password){

    // get user_id from database, table profile
    //`SELECT * FROM Rental_Listing
   // WHERE Rooms >= ${Rooms} AND Bathrooms >= ${Bathrooms} AND Price <= ${Price} AND Property_Type = "${Property_Type}"`
   query_string = `SELECT * FROM Registered_User WHERE Email = "${Email}" AND Password = "${Password}"`
   console.log ("Email = " + Email + "Password = " +Password + "query_string is "+ query_string)
    const result1 = await db.query(
      `SELECT * FROM Registered_User
      WHERE Email = "${Email}" AND Password = "${Password}"`
    );


    //console.log ("Db email is" + result1[0].Email + " db password is" + result1[0].Password)
    if (result1.affectedRows) {
      console.log ('Row returned for user search in database')
      
    }
    else {
      console.log ('No rows returned for user search in database')
      data= {"message": "No rows returned for user search in database"};
      //let message = "No rows returned for user search in database";
      //return message;
      //return JSON.stringify(message)
      return data;
    }

  /*
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
  */
    // compare given password with databased password
    //console.log ("Object = " +result1.values.length)
    const match = await bcrypt.compare(Password, result1[0].Password);
    //const match = await compare(Password, result1[0].Password);
    let message = "";
    if (Password=result1[0].Password) {
      message = 'User login successfully';
    } else {
      message = 'Error in login user';
    }
  
    return {message};
  }

  module.exports = {
    loginUser

  }