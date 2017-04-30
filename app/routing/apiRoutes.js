// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, etc.
// ===============================================================================

var friendsArray = require("../data/friends");  // .js is optional (so I left if off)

module.exports = function(app) {
	
//	A GET route with the url /api/friends. This will be used to display a JSON of 
//  		all possible friend matches.
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
	    // matchFriend = {
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

// initially set up blank as matchFriend - each comparison will put the best comparison.

		var matchedIndex = [];  

		var totalDiff = 100;  //  set in the beginning of comparison 
		var eachFriendDiff = 0;

		console.log("friendsArray.length: " + friendsArray.length);
		if (friendsArray.length >= 0){
			
			// run through scores

			for (i=0; i<friendsArray.length; i++) {
				// do comparison of friends
				console.log("Comparison index #" + i + " is: " + friendsArray[i].name);
				console.log("friendsArray[i].scores.length: " + friendsArray[i].scores.length + "\n");
				eachFriendDiff = 0;
				console.log("database friendsArray[i].scores: " + friendsArray[i].scores);
				console.log("New user input newscores: " + newScores);


				for (j=0; j<friendsArray[i].scores.length; j++) {
					// calculate the difference between each person's scores in the database 
					//  	and the newScores (the New User's scores)
					// absolute value of diff

					console.log("database friendsArray[i].scores[j]: " + friendsArray[i].scores[j]);
					console.log("New user input newscores[j]: " + newScores[j]);

					eachFriendDiff = eachFriendDiff + Math.abs(friendsArray[i].scores[j] - newScores[j]);
					console.log("eachFriendDiff: " + eachFriendDiff + " j: " + j);

					if ((eachFriendDiff > totalDiff) || totalDiff === 100) { // greater or 1st time
						console.log("this diff is current match");
						console.log("friendsArray[i]: " + i);
						var matchedFriend = friendsArray[i];
					}
					else {
						// don't change the match 
					}


				}


			}


			//  Add new user to the friendsArray
			friendsArray.push(newFriend);
//  THIS WILL CHANGE ONCE MATCHEDFRIEND IS FIGURED OUT
			res.json(newFriend);  // this will come out ***********************   OUT  ****
//			res.json(matchedFriend);
		}
		else 
		{
			//  Add new user to the friendsArray
			friendsArray.push(newFriend);
			res.json(false);  // when false will send a dummy picture
		}


	});

};