var mongoose = require('mongoose');

// Schema cocktail
var cocktailSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	ingredients:{
		type: String,
		required: true
	},
	steps:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
}),

var Cocktail = module.exports = mongoose.model('Cocktail', cocktailSchema);

// get Cocktails
module.exports.getCocktails = function(callback, limit){
	Cocktail.find(callback).limit(limit);
}

// Get Cocktail
module.exports.getCocktailByName = function(name, callback){
	Cocktail.findByName(name, callback);
}
