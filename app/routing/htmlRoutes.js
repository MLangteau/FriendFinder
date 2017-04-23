// path package is required to get the correct file path for html files.
var path = require("path");

// These are the proper routes
module.exports = function(app) {

	app.get("/survey", function(req, res) {
		// callback code is here
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.use('/', function(req, res, next) {
		// callback code is here
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

}; // end of module.exports