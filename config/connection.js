// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
  //setup database for heroku
}
else {
    connection = mysql.createConnection({
      // host: "localhost",
      // port: 3306,
      // user: "root",
      // password: "z",
      // database: "burgers_db"
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  })

};

// Make connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;