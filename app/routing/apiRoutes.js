// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
//var waitListData = require("../data/waitinglistData");

//	A GET route with the url /api/friends. This will be used to display a JSON of 
//  		all possible friends.
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


//	A POST routes /api/friends. This will be used to handle incoming survey results. 
//	This route will also be used to handle the compatibility logic.



// Create New Friends - takes in JSON input
app.post("/api/new", function(req, res) {
  var newfriend = req.body;
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  characters.push(newfriend);

  res.json(newfriend);
});