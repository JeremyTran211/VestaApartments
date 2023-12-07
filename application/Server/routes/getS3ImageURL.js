// npm install aws-sdk
// npm install async

var express = require('express');
var router = express.Router();

const aws = require('aws-sdk');
var async = require('async');

var ACCESSKEYID="AKIARZJZEVBWCIP2GHD3";
var SECRETACCESSKEY="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";
var AWSREGION="us-west-1";
var S3BUCKET="sf-student-rent-images";
var S3FILENAME="HouseImage1.jpg";

//require('dotenv').config();

// Set AWS config params

// router.get('/', function(req, res, next) {
router.get('/', async(req, res) => {
      try{
            aws.config.setPromisesDependency(); //use so you can promisify to get the actual images
            console.log("Updating AWS config using parameters ImageFileName...", req.query.ImageFileName);
            S3FILENAME = req.query.ImageFileName;
            aws.config.update({
                accessKeyId:  ACCESSKEYID, //process.env.ACCESSKEYID,
                secretAccessKey: SECRETACCESSKEY, // process.env.SECRETACCESSKEY,
                region: AWSREGION //'us-west-1'
            });
   
            const s3 = new aws.S3();
            var params = {Bucket: S3BUCKET, Key: S3FILENAME}; //'xxx-xx-xxx', Key: '1.jpg'};
            var promise = s3.getSignedUrlPromise('getObject', params);
            promise.then(function(url) {
            console.log("S3 Image url is:", url);
            res.send(url)
            }, function(err) { console.log(err) });
  
        } catch(e) {
            console.log('our error is',e)
        }
   // res.send('API is working properly');
});

module.exports = router;