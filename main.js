
// S.
// Start point.
// Version: alpha

// # Imports

const Server = require("./imports/server");
const _ = require("./imports/utilities");
const port = 12681;
const enableDebugging = true;

var S = require("./s");

// # main()

function main() {
	if(enableDebugging) _.debug(true);
	Server.configure({
		"set": {
			"routs": S["server"]["routs"]
		},
		error: function(error) {
			error = error || "Error not specified.";
			_.error("Unable to update configurations " + error);
		},
		success: function() {
			_.info("Server configrations updated.");
		}
	});
	Server.start({
		port: port,
		error: function(error) {
			error = error || "Error not specified.";
			_.error("Unable to start http server due to: " + error);
		},
		success: function() {
			_.info("Everything seems fine.");
		}
	});
	_.debug("Hello world :P");
}
// # Initialize

main();
