// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsArray = require("../data/friends");
//var waitListData = require("../data/waitinglistData");


module.exports = function(app) {
//	A GET route with the url /api/friends. This will be used to display a JSON of 
//  		all possible friends.
	app.get("/api/friends", function(req, res) {
		console.log("friends: ", friendsArray)
		return res.json(friendsArray);
	});

/*    app.get("/api/clear", function(req, res) {
        tables = [];
        waitlist = [];
        //return res.json(friendsArray);
    });
*/
	//	A POST routes /api/friends. This will be used to handle incoming survey results. 
	//	This route will also be used to handle the compatibility logic.

	// Create New Friends - takes in JSON input
	app.post("/api/friends", function(req, res) {
		
		var newFriend = req.body;

		newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
		
		console.log("newfriend ", newFriend);
	  	
	  	friendsArray.push(newFriend);
	    
	    res.json(newFriend);
	});

};