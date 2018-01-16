
// S.
// Utilities.
// Version: alpha

var debugging = false;

module.exports = {
	info: function(text) {
        if(text) console.log("[INFO] " + text);
        else if(this.debugging) this.debug("info() function called without arguments.");
    },
    debug: function(text) {
        text = text || "debug() function called without arguments.";
        if(typeof(text) == "boolean") {
            if(text) this.debugging = true;
            else this.debugging = false;
        } else if(this.debugging) console.log("[DEBUG] " + text);
    }
}
