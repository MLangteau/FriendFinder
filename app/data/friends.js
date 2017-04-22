// friendsArray will hold all of the potential friends.
// We set it up with potential friends, so the code has some choices 

var friendsArray = [
  {
  name:"Penelope",
  photo:"https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?h=350&auto=compress&cs=tinysrgb",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]}, 
  {
  name:"Frederic",
  photo:"https://www.pexels.com/photo/man-young-happy-smiling-91227/",
  scores:[
      1,
      3,
      3,
      2,
      2,
      3,
      5,
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
      4,
      5,
      1,
      2,
      5,
      4,
      1]},
  {
  name:"Jack",
  photo:"https://images.pexels.com/photos/78225/pexels-photo-78225.jpeg?h=350&auto=compress&cs=tinysrgb",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1]}
];

// This makes it accessible to other files using require.
module.exports = friendsArray;
