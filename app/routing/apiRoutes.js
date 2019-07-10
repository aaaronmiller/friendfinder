var friends = require("../data/friends.js");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
  console.log(friends);
// TODO: get request
  res.json(friends);
});



app.post("/api/friends", function(req, res) {
    console.log(req.body);
    dogboy = req.body;
friends.push(dogboy);

closestVal = 100;
closestId = 0;
dog();
function dog() {
    
    for (i = 0; i < friends.length-1; i++) {
        val = 0;
        cat(i);
    }
    
    var nname = friends[closestId].name
    console.log("closest person is :" + nname);
    console.log("variance is :" + closestVal);
    return;
}
function cat() {

    for (q =0; q <10; q++ ) {
        var bobo = friends[i].scores[q];
        var dingo = dogboy.scores[q];
        console.log("testing value of me" + bobo);
        a1 = bobo - dingo;
        if (a1 < 0) {
            a1 = a1 * (-1);
        }
        val = val + a1;
        
    }
    if  (val < closestVal) {
        closestVal = val
        closestId = i;
    console.log("new winner!");
    };
    console.log("total variance is :" + val);
    return;
}


dog = friends[closestId];
console.log(dog);
res.json(dog);

// TODO: post request

});


//   app.post("../app/api/clear", function(req, res) {
//     console.log("clear");
//     // Empty out the arrays of data
//    friends.length = 0;
//     res.json({ ok: true });
//   });
};
