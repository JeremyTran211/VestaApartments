/* 
Authentication.js 

This middleware is for authenicating JWT(json web token) that
comes from client-side. 

*/
const jwt = require('jsonwebtoken');

module.exports = authenticateToken;

function authenticateToken(req, res, next){
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
      if (err){
        res.status(403).json({ message: "Invalid Token" });

      } else{
        req.user = authData; 
        next();
      }
    });

  }else{
    res.status(403).json({ message: "No token provided" });
  }
}
