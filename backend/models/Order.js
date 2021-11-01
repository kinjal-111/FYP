const mongoose = require('mongoose');

const orderTemplate = new mongoose.Schema({
	orderid:{
		type: String,
		required: true	
	},
	products:{
		type: String,
		required: true	
	},
	price:{
		type: String,
		required: true	
	},
	date:{
		type: Date,
		default: Date.now	
	}
});

module.exports = mongoose.model('order', orderTemplate)