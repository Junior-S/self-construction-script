
// S.
// Start point.
// Version: alpha

// # Imports

const Server = require("./imports/server");
const _ = require("./imports/utilities");
const port = 12681;
const enableDebugging = true;

// # main()

function main() {
	if(enableDebugging) _.debug(true);
	Server.start({
		port: port,
		error: function(error) {
			error = error || "Error not specified."
			console.log("Unable to start http server due to: " + error);
		},
		success: function() {
			console.log("Everything seems fine.");
		}
	});
	_.debug("Hello world :P");
}
// # Initialize

main();
