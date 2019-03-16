var connection = require ('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

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
    
	insertOne: function(table, column, value, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += column.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		connection.query(queryString, value, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

    updateOne: function(table, field, value, id, cb) {
        let queryString = `UPDATE ${table} SET ${field} = ${value} WHERE id = ${id};`
        connection.query(queryString, function(err, data) {
          if (err) throw err
          cb(data)
        })
      }
    }
    
module.exports = orm