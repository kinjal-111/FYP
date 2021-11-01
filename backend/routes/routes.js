/*
const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModels')


router.post('/signup', (request,response) =>{

	console.log("Name: "+request.body.name);
	console.log("Email: "+request.body.email);
	console.log("Passowrd: "+request.body.password);
	const signedUpUser = new signupTemplateCopy({
		name:request.body.name,
		email:request.body.email,
		password:request.body.password
	})
	signedUpUser.save()
	.then(data => {
		response.json(data);
		console.log(signedUpUser);
		response.status(200).json({data:"OK"});
	})
	.catch(err => {
		console.log("Error: "+err);
		response.status(400).send(err);
	})
});

router.post('/signin', async(request, response) => {
	try{
		const email = request.body.email;
		const password = request.body.password;
		console.log("Email : "+email);
		console.log("Password: "+password);
		const user = await signupTemplateCopy.findOne({email:email});
		console.log(user);
		console.log("UserPassword: "+user.password);
		if(user.password === password){
			console.log("If");
			response.status(200).json({data:"OK"});
		}if(user.password !== password){
			response.status(200).json({data:"Invalid password"});
		}
		console.log('${email} and password is ${password}');
	}catch(err){
		response.status(400).send("Invalid user");
	}
});
			
router.post('/email', async(request, response) => {
	try{
		await sendEmail('aanchaldubey47@gmail.com', 'noreply@test.com', 'Test', req.body.message);
		response.send('Email send');
	}catch(err){
		console.log(err);
		response.status(500);
	}
});

module.exports = router;
*/