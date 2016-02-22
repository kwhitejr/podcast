var express = require('express');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});