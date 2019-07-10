var path = require("path");

module.exports = function (app) {

    //   app.get("/survey", function(req, res) {
    //       console.log("survey")
    //       res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    //     });

    // If no matching route is found default to home
    app.get("/survey.html", function (req, res) {
        console.log("booger")
        // if (err) {
        //     return res.status(500).end();
        // }

        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    app.get("/", function (req, res) {
        console.log("catchall")
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
