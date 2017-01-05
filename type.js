var mongoose = require('mongoose');

// Schema types
var typeSchema = mongoose.Schema({
	type:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
}),

var Type = module.exports = mongoose.model('Type', typeSchema);

// get types
module.exports.getTypes = function(callback, limit){
	Type.find(callback).limit(limit);
},
