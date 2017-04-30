// friendsArray will hold all of the potential friends.
// We set it up with potential friends, so there are friends to choose from on initial setup

var friendsArray = [
  {
  name:"Penelope",
  photo:"https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?h=350&auto=compress&cs=tinysrgb",
  scores:[
      3,
      5,
      5,
      4,
      5,
      5,
      1,
      1,
      1,
      1
    ]}, 
  {
  name:"Frederic",
  photo:"https://www.pexels.com/photo/man-young-happy-smiling-91227/",
  scores:[
      1,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      3,
      5]}, 
  {
  name:"Leona",
  photo:"https://images.pexels.com/photos/87293/pexels-photo-87293.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  scores:[
      5,
      1,
      4,
      2,
      1,
      2,
      2,
      2,
      4,
      1]},
  {
  name:"Jack",
  photo:"https://images.pexels.com/photos/78225/pexels-photo-78225.jpeg?h=350&auto=compress&cs=tinysrgb",
  scores:[
      5,
      1,
      2,
      3,
      1,
      1,
      1,
      1,
      1,
      1]},
      {
  name: "Meagan Trainor",
  photo: "https://i.ytimg.com/vi/7PCkvCPvDXk/maxresdefault.jpg",
  scores: [
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4]},
];

// This makes it accessible to other files using require.
module.exports = friendsArray;
