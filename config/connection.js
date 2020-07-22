const mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
  
  
  connection.connect();
  
  module.exports = connection;
  