// friendsArray will hold all of the potential friends.
// We set it up with potential friends, so there are friends to choose from on initial setup

var friendsArray = [
  {
  name:"Oneder Wickby",
  photo:"http://static.tumblr.com/14eb048e98bdc079d67648c24ce7760b/ghddhw8/xfQocqar7/tumblr_static_581o02bvh3wgk0osg00c4cw0w.png",
  scores:[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2
    ]}, 
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
  photo:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfvslSVQuzPcCLmMOW4iGsaieZbqM7nXwr8BbI4BiHVQ9XvMb5",
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
      4]
  },
  {
  name: "Wendy",
  photo: "https://images.pexels.com/photos/51969/model-female-girl-beautiful-51969.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  scores: [
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3]
  },
  {
  name: "Justin Bieber",
  photo: "http://images2.fanpop.com/image/photos/10500000/Photoshoots-2010-Unknown-Photoshoot-2-justin-bieber-10566009-399-277.jpg",
  scores: [
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2]
  }
];

// This makes it accessible to other files using require.
module.exports = friendsArray;
