
// S.
// Self-construction script.
// Version: alpha

// # Actual tree

module.exports = {
	"server": {
		"routs": [
			{
				"rout": "/",
				"html": "./public_html/pages/index.html"
			},
			{
				"rout": "/configure.json",
				"script": "./public_html/scripts/configure.js"
			}
		]
	},
	"meta-version": "alpha"
}
