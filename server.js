var express = require('express'),
   path = require('path'),
   config = require('./config/config.js');


var app = express();


/* directory use */
var cachetime = 1000 * 3600 * 24 * 2;
app.use(express.static(path.join('./dist')));

app.get('*', function(req, res) {
 res.sendFile(__dirname + "/dist/index.html");
})

app.listen(config.PORT || 8080);
console.log("Listening on PORT " + (config.PORT || 8080));
