const mongoose = require('mongoose');

const cust_order = new mongoose.Schema({
	id:{
		type: String,
		required: true	
	},
	orderid:[
		{
        	type: mongoose.Schema.Types.ObjectId,
        	ref: "order"
		}
	],	
	custid:[
		{
        	type: mongoose.Schema.Types.ObjectId,
        	ref: "customer"
		}
	]
});

module.exports = mongoose.model('custorder', cust_order)