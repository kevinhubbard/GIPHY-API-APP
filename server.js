//Require express and file system dependencies
var express = require('express');
var app = express();
var path = require('path');
//Set port 
var port = process.env.PORT || 3000;

//Allow express to serve static files 
app.use(express.static(path.join(__dirname, "assets")));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

//Get main route
app.get('/', function(req, res){
	res.sendFile('index.html');
});

//Start server
app.listen(port, function(){
	console.log("app is running on port " + port);
});