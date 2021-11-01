const mongoose = require('mongoose');

const employeeTemplate = new mongoose.Schema({
	empid:{
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
	gender:{
		type: String,
		required: true	
	},
	phone_no:{
		type: String,
		required: true	
	},
	address:{
		type: String,
		required: true	
	},
});

module.exports = mongoose.model('employee', employeeTemplate)