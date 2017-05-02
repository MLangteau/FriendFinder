# FriendFinder

####  FriendFinder is an app that finds a "make-believe friend" from our database (friends.js) and uses Node.js to do it.  This app compares the user's input of a series of 10 questions and finds the friend that matches best verses the other friends in the database.

### The user would get to the main page by typing in the following: 

    1.  'nodemon server.js'

    2.  The user will go to the local host and type 'localhost8080/' to get the main menu.  (see Screenshot #1)
    
######       ![Alt text](images/mainPage.png?raw=true "Screenshot #1")

    3.  See your options on the main page.
        
### The Survey Page is found by either clicking on 'Go To Survey' or typing 'localhost8080/survey' in the Address Bar (top of page):

    1.  Once the user is on the Survey Questions page, they must answer the questions provided.  (see Screenshot #2)
    
######       ![Alt text](images/surveypage1.png?raw=true "Screenshot #2")
    
    2.  Once the Submit button is pressed, the app will determine the closest choice for a best match and adds the 
    new User to the database.  This is also where the app determines if all fields were entered or not.  If not 
    entered properly, a message will appear to tell the user to "Fill out all fields before you Submit the form".
    (see Screenshot #3)
    
######       ![Alt text](images/surveypage2.png?raw=true "Screenshot #3")
	
    3.  Then, the app will display a modal (picture and name) of the best match for the user and will clear the 
    survey questions.  (see Screenshot #4)
    
######       ![Alt text](images/modalAndClear.png?raw=true "Screenshot #4")

### Friends List Page is found by either clicking on the available links that are provided: "API Friends List or GitHub Repo" or following 1. below.  The other link is to this GitHub Repo", see 2. below.  

    1.  The API Friends List page will list all friends from the available Friends List File (friends.js).  The 
    user will either go to the local host and type 'localhost8080/api/friends' to get the API Friends List or 
    click on the 'API Friends List' link located at the bottom of both the Main and Survey pages.
    (see Screenshot #5)
    
######       ![Alt text](images/apiFriends.png?raw=true "Screenshot #5")
	
    2.  The GitHub Repository is available at the bottom of both the Main and Survey pages by clicking on the 
    'GitHub Repo' link.  (see Screenshot #1 or Screenshot #3 above)
