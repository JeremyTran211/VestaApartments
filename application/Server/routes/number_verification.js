const express = require('express');
const router = express.Router();


module.exports = router;
 //for searching Listings
 router.get('/', async function(req, res, next) {
  try {
    console.log ("We are in number verification, the phone number is "+req.query.phone_number)

    //res.json(await search.searchListing(req.query.Rooms, req.query.Bathrooms, req.query.Price, req.query.Property_Type));
    var myHeaders = new Headers();
myHeaders.append("apikey", "u2P5NznniZxSf4IwcFaSToPzECVFg6DQ");
var obj;
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
var phone_checker_apiurl = "https://api.apilayer.com/number_verification/validate?number=" +req.query.phone_number
fetch(phone_checker_apiurl, requestOptions)
  .then(response => response.text())
  //.then(api_response => console.log(api_response))
  .then(data => {
       obj = data;
      })
  .then(() => console.log ("api_response is " + obj))
  .then(() => res.status(200).json(obj))
  .catch(error => console.log('error', error));
  //console.log ("api_response is " + obj);
  //res.status(200).json(obj);
  } catch (err) {
    console.error(`Phone number entered is not valid`, err.message);
    next(err);
  }
  
});