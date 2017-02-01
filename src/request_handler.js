'use strict';

var notify_request = require('./libs/http_request.js');
var config = require('config');

exports.processRequest = function(req, res) {
	var body = JSON.parse(req.body);
	var events = body.events;
	var projectId;

	for (var key=0; key < events.length; key++) {
		var e = events[key];
		projectId = req.pathParameters.proxy;
		if (e.type === 'project') {
			projectId = e.resource;
		}
		if (e.type === 'story') {

			var host = config.service.host;
			var path = config.service.path + projectId + "/" + e.parent + "/" + e.resource;

			notify_request.execute(host, path, 'GET', {}, []);
		}
	}
	res.json({"status": 200});
	res.end();
};
