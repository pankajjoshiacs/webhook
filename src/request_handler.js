'use strict';

var notify_request = require('./libs/http_request.js');

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

			var host = 'your_host_url';
			var path = '/path/to/your/server/where/events/will/be/processed/' + projectId + "/" + e.parent + "/" + e.resource;
			console.log(host + path);
			notify_request.execute(host, path, 'GET', {}, []);
		}
	}
	res.json({"status": 200});
	res.end();
};
