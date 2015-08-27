var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/set/:url', function(req, res) {
	res.send("Adding URL: " + req.param.url)
});

app.get('*', function(req, res){
  //res.send(req.path);
  res.redirect("http://google.com");
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});