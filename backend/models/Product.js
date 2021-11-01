const mongoose = require('mongoose');

const productTemplate = new mongoose.Schema({
	category_id:{
		type: String,
		required: true	
	},
	name:{
		type: String,
		required: true	
	},
	description:{
		type: String,
		required: true	
	},
	quantity:{
		type: Number,
		required: true	
	},
	price:{
		type: Number,
		required: true	
	},
	eoq:{
		type: Number,
		required: true	
	},
	is_deleted:{
		type:Number,
		default:0
	}
});

module.exports = mongoose.model('product', productTemplate)