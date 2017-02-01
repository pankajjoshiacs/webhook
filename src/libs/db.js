'use strict';

var config = require('config');
var mysql = require('mysql');
var Promise = require('promise');

module.exports = {

	add: function(conn, queryString, bindParams) {
		return new Promise(function(resolve, reject) {
			conn.query(queryString, bindParams, function(err, info) {
				if (err) {
					console.log('Error occurred while inserting a record.', queryString, bindParams, err);
					return reject(err);
				}
				return resolve(info);
			});	
		})
	},
	remove: function(conn, queryString, bindParams) {
		return new Promise(function(resolve, reject) {
			conn.query(queryString, bindParams, function(err, info) {
				if (err) {
					console.log('Error occurred while deleting a record.', queryString, bindParams, err);
					return reject(err)
				}
				return resolve(info);
			});
		});
	},
	edit: function(conn, queryString, bindParams) {
		return new Promise(function(resolve, reject) {
			conn.query(queryString, bindParams, function(err, info) {
				if (err) {
					console.log('Error occurred while updating a record.', queryString, bindParams, err);
					return reject(err);
				}
				return resolve(info);
			});
		});
	},
	select: function(conn, queryString, bindParams) {
		return new Promise(function(resolve, reject) {
			conn.query(queryString, bindParams, function(err, info) {
				if (err) {
					console.log('Error occurred while getting info from database.', queryString, bindParams, err);
					return reject(err);
				}
				return resolve(info)
			});
		})
		.then((info) => {
			conn.end();
			return resolve(info);
		});
	},
	connect: function(db) {
		if (db === config.type.user) {
			var conn = mysql.createConnection({
			  host      :  config.userDB.host,    // RDS endpoint 
			  user      :  config.userDB.user,    // MySQL username 
			  password  :  config.userDB.pass,    // MySQL password 
			  database  :  config.userDB.database // MySQL DB
			});
			return conn.connect(function(err) {
				if (err) console.log('connection error.....', conn, err);
				return conn;
			});
		} else if (db === config.type.product) {
			var options = {
			  host      :  config.productDB.host,    // RDS endpoint 
			  user      :  config.productDB.user,    // MySQL username 
			  password  :  config.productDB.pass,    // MySQL password 
			  database  :  config.productDB.database // MySQL DB
			};
			var conn = mysql.createConnection(options);

			return conn.connect(function(err) {
				if (err) console.log('connection error.....', options, conn, err);
				return conn;
			});
		}
	}
};
