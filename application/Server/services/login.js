/*
Login.js

This file handles the login for users by verifying their email and password.
If both checks pass then a JWT will be created and a session is started 
for the user. 

*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// for login user we must first get the login details, then we must compare with database to make sure it exists
// for comparing the given password for login
async function loginUser(Email, Password){
  try{
      //console.log ("Email = " + Email + "Password = " + Password);
      const result = await db.query(
        `SELECT * FROM Registered_User WHERE Email = ?`, [Email]
      );

      if(result.length == 0){
        console.log('No user found with that email')
        return { message: "No user found with that email", 
                  success: false};

      }

      console.log( result[0].Password);
      console.log( Password);
      
      const match = await bcrypt.compare(Password, result[0].Password);
      console.log(match);

      let message = "";

      if (match){
        console.log ('User successfully logged in')
        
        const token = {
          id: result[0].User_ID,
          email: result[0].Email
        };

        const accessToken = jwt.sign(token, process.env.JWT_SECRET, {
          expiresIn: '1h'
        });

        return{
          success: true,
          message: 'User login successfully',
          accessToken: accessToken,
        };

      } else {
      
        return{
          success: false,
          message: 'Login failed'};
      }
    }catch(err){
      console.error('Login error', error);
      return { message: 'Login failed due to an error' };
      }
  }

  module.exports = {
    loginUser
  }