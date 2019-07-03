var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.get('/',function(req, res){
    res.send('Hello Aaron')
})

app.listen(PORT, function() {
    console.log('listening on ' + PORT)
})