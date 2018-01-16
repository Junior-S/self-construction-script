
// S.
// Server.
// Version: alpha

// # Imports

const http = require("http");

const requestHandler = (request, response) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
}
const server = http.createServer(requestHandler);

var args;

// # Export

module.exports = {
	start: function(args) {
		listen({
			port: args["port"],
			error: function(error) {
				args["error"](error);
			},
			success: function() {
				args["success"]();
			}
		});
	}
}

// # Functions

function listen(args) {
	server.listen(args["port"], function (error) {
		if (!error) {
			args["success"]();
		} else {
			args["error"](error);
		}
	});
}
