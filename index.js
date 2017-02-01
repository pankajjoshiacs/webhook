'use strict';

var http = require('http');
var net = require('net');


exports.handler = function(event, context) {
  if (event.headers !== null && event.headers !== undefined) {
      if (event.headers['X-Hook-Secret'] !== undefined
          && event.headers['X-Hook-Secret'] !== null
          && event.headers['X-Hook-Secret'] !== "") {
          
          var response = {
              statusCode: '200',
              headers: {
                  "X-Hook-Secret" : event.headers['X-Hook-Secret']
              }
          };
          
          context.succeed(response);

      } else if (event.headers['X-Hook-Signature'] !== undefined
          && event.headers['X-Hook-Signature'] !== null
          && event.headers['X-Hook-Signature'] !== "") {
          context.callbackWaitsForEmptyEventLoop = false;
          var e, error, key, path, querystring, ref, req, res, val;

          if (event.body) {
              event.headers['content-length'] = event.body.length;
          }

          path = event.path;
          ref = event.pathParameters;

          for (key in ref) {
              val = ref[key];
              path = path.replace("{" + key + "}", val);
          }

          req = new http.IncomingMessage();
          req.pathParameters = event.pathParameters;
          req.method = event.httpMethod;
          req.url = path;
          req.body = event.body;
          req.headers = event.headers;

          req.connection = req.socket = new net.Socket();
          res = new http.ServerResponse(req);

          try {
              var body = JSON.parse(req.body);
              var events = body.events;
              var bool = false;
              var storyIds = "";
              var taskId = "";
              for (var key=0; key < events.length; key++) {
                var e = events[key];
                if (e.type === 'story') {
                  taskId = e.parent;
                  bool = true;
                  storyIds += e.resource + '_';
                }
              }

              if (bool) {
                var projectId = req.pathParameters.proxy;

                bool = true;
                var host = 'your_host_url';
                var path = '/path/to/your/server/where/events/will/be/processed/' + projectId + "/" + taskId + "/" + storyIds;
                console.log('notify url.....', host + path);
                http.get(host + path, function (result) {
                  console.log('Success, with: ' + result.statusCode);
                  var response = {
                      statusCode: result.statusCode
                  };
                  context.succeed(response);
                }).on('error', function (err) {
                  console.log('Error, with: ' + err.message);
                  context.done(null, "Failed");
                });

              } else {
                var response = {
                    statusCode: '200'
                };
                context.succeed(response);
                console.log("Event recorded successfully...");
              }

          } catch (error) {

              console.log('req error', error);
              return context.done(error, error);

          }

      } 
  } else {
      console.log("API webhooks validation is failed.....");
  }
};
