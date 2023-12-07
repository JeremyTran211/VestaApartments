const express = require('express');
const router = express.Router();
const db = require('../services/db');

module.exports = router;


//for creating a test user
router.post('/', async function(req, res, next) {
    try {
        var myHeaders = new Headers();
        // FBNGQLBGPJGS65DDEV3H2URQJA2GKSTCPMYEWP35KA4TIYRQ
        myHeaders.append("apikey", "FBNGQLBGPJGS65DDEV3H2URQJA2GKSTCPMYEWP35KA4TIYRQ");
        // res.json(await login.loginUser(req.body.email, req.body.password));
        const user_id = res.json(await req.body.user_id);
        const email = res.json(await req.body.email);
    } catch (err) {
      console.error(`Error while creating a new user`, err.message);
      next(err);
    }
var obj;
var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders
};
console.log("The email value returned by front end is "+ email)
console.log("The user id from front end is "+ user_id)
/*
User_ID           | Password                                                     | email                   | First_Name | Last_Name |
+-------------------+--------------------------------------------------------------+-------------------------+------------+-----------+
| .useaspdm@uxf4ele | $2b$10$gxlIgHvL3kwBSfU8uZAlxOsC4OxQyJK0wP.yg11fnme/hm2.Q3Tzm | example4@sfsu.edu       | Test4      | Test4     |
| @lsue.mxfe2useapd | $2b$10$ZR.uqitDAuyriBiWqP5WgulqYKhH.z.ToS6UbgGDF6lXHetKe0WIy | example2@sfsu.edu       | Test2      | Test2  

*/ 
// get first name, last name, and email from database through user_id

const result = await db.query(

`SELECT First_Name, Last_Name, email FROM Registered_User WHERE User_ID = user_id`);
/* +------------+-----------+-------------------+
| First_Name | Last_Name | email             |
+------------+-----------+-------------------+
| Test4      | Test4     | example4@sfsu.edu |
+------------+-----------+-------------------+
*/
console.log("The first name of the query is ", result[0].First_Name);
console.log("The last name of the query is ", result[0].Last_Name)
console.log("The last name of the query is ", result[0].email)
console.log("The results of the query is " + JSON.stringify(result));
// console.log("The results of the query is " + result.First_Name);
// const first_name = result[0].First_Name;
const first_name = result[0].First_Name;
const last_name = result[0].Last_Name;
const email = result[0].email;

//var test_user_apiurl = "https://api-v3.authenticating.com/mock/user/create?firstName="+first_name+"&lastName="+last_name+"&email="+email+"&dob="+req.query.dob+"&number="+req.query.phone


// working URL: https://api-v3.authenticating.com/mock/user/create?firstName=Bob&lastName=Bill&dob=22-05-1990&email=billyboy@gmail.com

// var test_user_apiurl = "https://api-v3.authenticating.com/mock/user/create"

var test_user_apiurl = "https://api-v3.authenticating.com/mock/user/create?firstName="+first_name+"&lastName="+last_name+"&dob="+req.query.dob+"&email="+email;
console.log("The URL is: ", test_user_apiurl)
// var test_user_apiurl = "https://api-v3.authenticating.com/mock/user/create?firstName&lastName&Email"  + req.query.number
console.log("The first name is "+ req.query.firstName);
fetch(test_user_apiurl, requestOptions)
    .then(response => response.text())
    .then(api_response => console.log(api_response))
    .then(data => {
        obj = data;
        })
    .then(() => console.log ("api_response is " + obj))
    .then(() => res.status(200).json(obj))
    .catch(error => console.log ("api_response is " + obj));


  
});