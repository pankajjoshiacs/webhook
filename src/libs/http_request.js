'use strict';

var http = require('http');
var qs = require('querystring');
var httpRequest = require('request');

module.exports = {
	execute: function(host, path, method, params, headers) {
		console.log('execute:..', host + path);
		if (method.toUpperCase() === 'POST') {
			console.log('POST...');
			var options = {
				host: host,
				path: path,
				method: method,
				headers: headers
			}

			var request = http.request(options, function(res) {
				res.setEncoding('utf8');
				res.on('data', function(chunk) {
					console.log('POST Response: ' + chunk);
				});
			});
			request.write(qs.stringify(params));
			request.send();
		} else if (method.toUpperCase() === 'GET') {
			httpRequest
				.get(host + "/" + path)
				.on('response', function(response) {
				    console.log(response.statusCode) // 200 
				  });
			// var options = {
			//   host: host,
			//   path: path
			// };
			// console.log('GET...', options);

			// http.request(options, function(response) {
			//   var str = '';

			//   //another chunk of data has been recieved, so append it to `str`
			//   response.on('data', function (chunk) {
			//     str += chunk;
			//   });

			//   //the whole response has been recieved, so we just print it out here
			//   response.on('end', function () {
			//     console.log('http request end......', str);
			//   });
			// }).end();

			// http.get(host + path, function(res) {
			// 	console.log('GET Response: ' + res);
			// })
			// .on('error', function(err) {
			// 	console.log('GET Error: ' + err);
			// });
		} else {
			console.log('This operation is not permissible on the server..');
		}
	}
};