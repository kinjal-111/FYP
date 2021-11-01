const mongoose = require('mongoose');

const categoryTemplate = new mongoose.Schema({
	
	categoryname:{
		type: String,
		required: true	
	},
	is_deleted:{
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('category', categoryTemplate)

