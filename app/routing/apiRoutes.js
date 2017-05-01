// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, etc.
// ===============================================================================

var friendsArray = require("../data/friends");  // .js is optional (so I left if off)

module.exports = function(app) {
	
//	A GET route with the url /api/friends. This will be used to display a JSON of 
//  		all possible friend matches in the database

	app.get("/api/friends", function(req, res) {
		console.log("friends: ", friendsArray)
		res.json(friendsArray);
	});

/*    app.get("/api/clear", function(req, res) {  //  **  Used to clear file
        friendsArray = [];
        //return res.json(friendsArray);
    });
*/
	//	A POST routes /api/friends. This will be used to handle incoming survey results. 
	//	This route will also be used to handle the compatibility logic.

	app.post("/api/friends", function(req, res) {

// ******************************     CHANGE THIS  below   **********************************
	    // matchedFriend = {
	    // 	name: "",
	    // 	photo: ""
	    // };

//  *****************************     CHANGE THIS  above   **********************************
		console.log("req.body",req.body);

		var newFriend = req.body;

		console.log("newFriend before parseInt", newFriend);
		newFriend.name = newFriend.name.replace(/\s+/g, "");
		newFriend.photo = newFriend.photo.replace(/\s+/g, "");
		
		for (var i=0; i<newFriend.scores.length; i++) {
			newFriend.scores[i] = parseInt(newFriend.scores[i]);
		}
		
		console.log("newFriend with parseInt  ", newFriend);
	  	
//	  	friendsArray.push(newFriend);
	    
//	    res.json(newFriend);

	    var newScores = newFriend.scores;       // .scores is set up in survey.html
	    console.log("newScores: ", newScores);  // 

// initially set up blank as matchedFriend - each comparison will put the best comparison.
		
		var currentFriendDiff = 0;
		var totalDiff = 100;  //  set in the beginning of comparison to make higher than total (1st time)
		

		console.log("friendsArray.length ********************************: " + friendsArray.length);
		if (friendsArray.length >= 0){
			
			// run through scores

			for (i=0; i<friendsArray.length; i++) {
				// do comparison of friends
				console.log("Comparison index #" + i + " is: " + friendsArray[i].name);
		//		console.log("friendsArray[i].scores.length: " + friendsArray[i].scores.length);
				currentFriendDiff = 0;
				console.log("database friendsArray[i].scores: " + friendsArray[i].scores);
				console.log("-------New user input newscores: " + newScores);


				for (j=0; j<friendsArray[i].scores.length; j++) {
					// calculate the difference between each person's scores in the database 
					//  	and the newScores (the New User's scores)
					// absolute value of diff

					//console.log("database friendsArray[i].scores[j]: " + friendsArray[i].scores[j]);
					//console.log("New user input newscores[j]: " + newScores[j]);

					currentFriendDiff = currentFriendDiff + Math.abs(friendsArray[i].scores[j] - newScores[j]);
				//	console.log("currentFriendDiff: " + currentFriendDiff + " j: " + j);
				}

				// when done adding up all the differences between currentFriend and User compare
				console.log("this diff is current before compare: " + currentFriendDiff);
				console.log("totalDiff            before compare: " + totalDiff);
				if (currentFriendDiff < totalDiff) {        // 1st time will be less than 100
					console.log("currentFriend is a closer match: " + currentFriendDiff);
					totalDiff = currentFriendDiff;  // currentFriend is a closer match
					console.log("friendsArray[i] match: i: " + i + " ", friendsArray[i]);
					var matchedFriend = friendsArray[i];
				}

			}
			console.log("Add new user to the friendsArray after all comparisons");
			//  Add new user to the friendsArray after all comparisons
			friendsArray.push(newFriend);
			res.json(matchedFriend);
		}
		else 
		{
			console.log("Add new user to the friendsArray when none in database");
			//  Add new user to the friendsArray when none in database
			friendsArray.push(newFriend);
			res.json(false);  // when false will send a dummy picture
		}


	});

};