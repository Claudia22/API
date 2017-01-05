var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client');

Type = require('./models/type');
Cocktail = require('./models/cocktail');

//connect to mongoose
moongoose.connect('mongodb://localhost/cocktails')
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/types');
});

app.get('/api/types', function(req, res){
	Type.getTypes(function(err, types){
		if(err){
			throw err;
		}
		res.json(types);
	});
});

app.get('/api/cocktails', function(req, res){
	Cocktail.getCocktails(function(err, cocktails){
		if(err){
			throw err;
		}
		res.json(cocktails);
	});
});

app.get('/api/cocktails/:_name', function(req, res){
	Cocktail.getCocktailByName(req.params._name, function(err, cocktail){
		if(err){
			throw err;
		}
		res.json(cocktail);
	});
});


app.listen(3000);
console.log('Is running on port 3000...');
