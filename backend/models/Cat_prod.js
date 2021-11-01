const mongoose = require('mongoose');

const catProdTemplate = new mongoose.Schema({
	id:{
		type: String,
		required: true	
	},
	catid:[
		{
        	type: mongoose.Schema.Types.ObjectId,
        	ref: "category"
		}
	],	
	prodid:[
		{
        	type: mongoose.Schema.Types.ObjectId,
        	ref: "product"
		}
	]
});

module.exports = mongoose.model('catprod', catProdTemplate)