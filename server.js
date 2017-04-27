// Dependencies
// basic npm packages: express, body-parser and path
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// don't need path here; needed in htmlRoutes

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
/*
app.get('/', function (req, res) {
	res.send('Hello World');        // test to see if running correctly
})
*/
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
