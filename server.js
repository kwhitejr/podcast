var express = require('express');
var path = require('path');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});