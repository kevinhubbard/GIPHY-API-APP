var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "assets")));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

app.get('/', function(req, res){
	res.sendFile('index.html');
})

app.listen(port, function(){
	console.log("app is running on port " + port);
})