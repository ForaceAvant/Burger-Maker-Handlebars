const connection = require("./connection");

function questionMarkInsertion(quantity) {
    var array = [];
  
    for (var i = 0; i < quantity; i++) {
      array.push("?");
    }
    return array.toString();
  }
  
  function sqlObj(obj) {
    var array = [];
  
    for (var key in obj) {
      array.push(key + "=" + obj[key]);
    }
    return array.toString();
  }
  
  var orm = {
    selectAll: function(table, callback) {
      var query = "SELECT * FROM " + table + ";";
      connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    insertOne: function(table, column, values, callback) {
      var query = "INSERT INTO " + table;
  
      query += " (";
      query += column.toString();
      query += ") ";
      query += "VALUES (";
      query += questionMarkInsertion(values.length);
      query += ") ";
  
      connection.query(query, vals, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    updateOne: function(table, columnValues, condition, callback) {
      var query = "UPDATE " + table;
  
      query += " SET ";
      query += sqlObj(columnValues);
      query += " WHERE ";
      query += condition;

      connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    }
  };
  
  module.exports = orm;
  