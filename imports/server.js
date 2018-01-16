
// S.
// Server.
// Version: alpha

// # Imports

const http = require("http");

const requestHandler = function (request, response) {
	//console.log(request.url);
	//response.end('Hello Node.js Server!');
	for( i = 0; i < Object.keys(configurations["routs"]).length; i++ ) {
		//console.log("rout: " + configurations["routs"][i]["rout"]);
		if(request.url == configurations["routs"][i]["rout"]) {
			console.log("Rout match: " + 
configurations["routs"][i]["rout"]);
		}
	}
}

const server = http.createServer(requestHandler);

var args;
var configurations = {};

// # Export

module.exports = {
	configure: function(args) {
		if(args["set"]) {
			configurations = args["set"];
			console.log(args["set"]);
		}
		if(args["append"]) {
			console.log(args["append"]);
		}
		if(args["del"]) {
			console.log(args["del"]);
		}
	},
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
