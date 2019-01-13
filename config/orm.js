// Import MySQL connection.
var connection = require("../config/connection.js");

// function to help generate MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i= 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// function to help convert js to MySQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
        arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

//orm used to create various MySql queries
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    insertOne: function(table, columns, values, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function(error, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;