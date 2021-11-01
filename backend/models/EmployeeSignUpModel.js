const mongoose = require('mongoose');

const signUp = new mongoose.Schema({
	name:{
		type: String,
		required: true	
	},
	email:{
		type: String,
		required: true	
	},
	password:{
		type: String,
		required: true	
	},
	date:{
		type: Date,
		default: Date.now	
	},
	is_deleted:{
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('employee', signUp)

