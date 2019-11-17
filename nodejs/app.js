var express = require('express');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/show',(function(req, res){
	res.setHeader("Content-Type", "text/html; charset=utf-8;");
	res.write("<h1>Your name is: " + req.query.name + "<br> and surname is: " + req.query.surname + "</h1> ");
    res.end();
}));


app.listen(3000);


