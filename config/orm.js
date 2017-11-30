// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

  // selectAll()
  selectAll: function(callback) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  // insertOne()
  insertOne: function(burger_name, callback) {
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false
      // date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  // updateOne()
  updateOne: function(burgerID, callback) {
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }

};


// Export the orm object for the model
module.exports = orm;
