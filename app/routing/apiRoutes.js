// var friends = require("../app/data/friends.js");
var friends = [
    {
      name: "Negative Nancy",
      photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
      scores: [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
        ]
    },
    {
      name: "Medium Matt",
      photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
      scores: [
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5"
        ]
    },
    {
      name: "Tabitha Tens",
      photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
      scores: [
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10"
        ]
    },
  ];


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
  console.log(friends);
// TODO: get request
  res.json(friends);
});

a = 0;
app.post("/api/friends", function(req, res) {
    console.log(req.body);
    dogboy = req.body;
friends.push(dogboy);
console.log(friends[0].scores[0]);
console.log(dogboy.scores[0]);


for (i = 0; i <= friends.length; i++) {

console.log(friends[i].scores[0]);
  
     // a =(friends[i].scores[0]-dogboy.scores[0]);
if (a < 0) {
    a = (a * -1);
;
console.log(a);
}

}


dog = friends[0];
return dog;

// TODO: post request
   
});


//   app.post("../app/api/clear", function(req, res) {
//     console.log("clear");
//     // Empty out the arrays of data
//    friends.length = 0;
//     res.json({ ok: true });
//   });
};
