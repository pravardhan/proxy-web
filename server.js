var express = require('express'),
   path = require('path'),
   compression = require('compression'),
   config = require('./config/config.js');


var app = express();

/* directory use */
var cachetime = 1000 * 3600 * 24 * 2;

app.get('/app.6c18889599d10afbc75c.js', function(req, res) {
  res.set({
    'content-encoding': 'gzip'
  })
  res.sendFile(path.join(__dirname, 'dist/app.6c18889599d10afbc75c.js.gz'))
})

app.get('/vendor.6c18889599d10afbc75c.js', function(req, res) {
  res.set({
    'content-encoding': 'gzip'
  })
  res.sendFile(path.join(__dirname, 'dist/vendor.6c18889599d10afbc75c.js.gz'))
})

app.use(express.static(path.join('./dist')));

app.get('*', function(req, res) {
 res.sendFile(__dirname + "/dist/index.html");
})

app.listen(config.PORT || 8080);
console.log("Listening on PORT " + (config.PORT || 8080));
