var mysql = require('mysql');
var hostname = "database-1.c8bx6xgcysm5.us-east-1.rds.amazonaws.com"
var user = "admin"
var datbase = "SFStudentRent"
var port = "3306"
var password = "21359982"

//hostname = "73.170.64.189" 
user = "backendusr"
database = "SFStudentRent"
password = "Fds43dfds38@4eddsie3"
port = "3306"

var con = mysql.createConnection({
  host: this.hostname ,
  user: this.user,
database: this.database, 
port: this.port,
  password: this.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});