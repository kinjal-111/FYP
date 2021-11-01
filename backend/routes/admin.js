const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/EmployeeSignUpModel');
const categoryTemplate = require('../models/Category');
const productTemplate = require('../models/Product');
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
		//response.json(data);
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


router.post('/addcategory', (request,response) =>{
	console.log("categoryName: "+request.body.categoryName);
	const addCategory = new categoryTemplate({
		categoryname:request.body.categoryName
	});
	addCategory.save()
	.then(data => {
		//response.json(data);
		console.log(addCategory);
		response.status(200).json({data:"OK"});
	})
	.catch(err => {
		console.log("Error: "+err);
		response.status(400).send("Failed to add category, Try again later!");
	});
});


router.post('/allcategories', async(request,response) =>{
	console.log("Inside All Categories");
	//Fetch
	try{
		const allCategory = await categoryTemplate.find({is_deleted:0});
		
		console.log("All: "+allCategory);
		response.status(200).json({data: allCategory});
	}
	catch(err){
		response.status(400).send("Failed to get all categories");
	}
});

router.post('/deletecategory', async(request,response) =>{
	console.log("Inside delete Categories");
	console.log("Category ID: "+request.body.category_id);
	const category_id = request.body.category_id;
	try{
		const deleteCategory = await categoryTemplate.updateOne({_id:category_id},{$set:{is_deleted:1}});
		response.status(200).json("OK");
	}
	catch(err){
		response.status(400).send("Failed to delete category");
	}
});

router.post('/categoryname', async(request,response) =>{
	console.log("Inside GetCategoryName by ID" + request.body.category_id);
	console.log("Category ID: "+request.body.category_id);
	const category_id = request.body.category_id;
	//Fetch
	try{
		const categoryname = await categoryTemplate.findOne({_id:category_id});
		
		console.log("Category Name: "+categoryname);
		response.status(200).json({data: categoryname});
	}
	catch(err){
		response.status(400).send("Invalid category name");
	}
});

router.post('/viewcategory', async(request,response) =>{
	console.log("Inside view Category");
	console.log("Category ID: "+request.body.category_id);
	const category_id = request.body.category_id;
	//Fetch
	try{
		const category = await categoryTemplate.findOne({_id:category_id});
		
		console.log("Category Name: "+category);
		response.status(200).json({data: category});
	}
	catch(err){
		response.status(400).send("Invalid category");
	}
});

router.post('/updatecategory', async(request,response) =>{
	console.log("Inside update Categories");
	console.log("Category name: "+request.body.category_id);
	console.log("Category name: "+request.body.categoryname);
	const category_id = request.body.category_id;
	const categoryname = request.body.categoryname;
	try{
		const updateCategory = await categoryTemplate.updateOne({_id:category_id},{$set:{categoryname:categoryname}});
		response.status(200).json({data:"OK"});
	}catch(err){
		response.status(400).send("Failed to updated category, Kindly try again later!");
	}
});



router.post('/addproduct',async(request,response) => {
	console.log("Inside Add Product");
	console.log("Category Id: "+request.body.productCategory);
	console.log("Product Name: "+request.body.productName);
	console.log("Product Description: "+request.body.productDescription);
	console.log("Quantity: "+request.body.quantity);
	console.log("Price: "+request.body.price);
	console.log("EOQ: "+request.body.eoq);
	const addProduct = new productTemplate({
		category_id:request.body.productCategory,
		name: request.body.productName,
		description: request.body.productDescription,
		quantity: request.body.quantity,
		price: request.body.price,
		eoq: request.body.eoq
	});

	addProduct.save()
	.then(data => {
		//response.json(data);
		console.log(addProduct);
		response.status(200).json({data:"OK"});
	})
	.catch(err => {
		console.log("Error: "+err);
		response.status(400).send("Failed to add Product, Try again later!");
	});
});

router.post('/allproducts', async(request,response) =>{
	console.log("Inside All Products");
	//Fetch
	try{
		const allProducts = await productTemplate.find({is_deleted:0});
		
		console.log("All Products: "+allProducts);
		response.status(200).json({data: allProducts});
	}
	catch(err){
		response.status(400).send("Failed to get products");
	}
});

router.post('/deleteproduct', async(request,response) =>{
	console.log("Inside delete Product");
	console.log("Category ID: "+request.body.product_id);
	const product_id = request.body.product_id;
	try{
		const deleteProduct = await productTemplate.updateOne({_id:product_id},{$set:{is_deleted:1}});
		response.status(200).json("OK");
	}
	catch(err){
		response.status(400).send("Product Cannot be deleted!");
	}
});

router.post('/viewproduct', async(request,response) =>{
	console.log("Inside View Product");
	console.log("Category ID: "+request.body.product_id);
	const product_id = request.body.product_id;
	//Fetch
	try{
		const product = await productTemplate.findOne({_id:product_id});
		
		console.log("Product: "+product);
		response.status(200).json({data: product});
	}
	catch(err){
		response.status(400).send("Invalid Product");
	}
});

router.post('/updateproduct', async(request,response) =>{
	console.log("Inside Update Product");
	var product_id = request.body.product_id;
	var category_id = request.body.category_id;
	var name = request.body.name;
	var description = request.body.description;
	var filename = request.body.filename.split('.');
	console.log("Product Id: "+product_id);
	console.log("Category Id: "+category_id);
	console.log("Product Name: "+name);
	console.log("Product Description: "+description);
	console.log("Quantity: "+request.body.quantity);
	console.log("Price: "+request.body.price);
	console.log("EOQ: "+request.body.eoq);
	console.log("Only file name"+ filename[0]);
	try{
		const updateCategoryID = await productTemplate.updateOne({_id:product_id},{$set: {category_id:category_id}});
		const updateProductname = await productTemplate.updateOne({_id:product_id},{$set: {name:name}});
		const updateProductDescription = await productTemplate.updateOne({_id:product_id},{$set: {description:description}});
		const updateProduct = await productTemplate.updateOne({_id:product_id},{$set: 
			{ quantity: request.body.quantity,
				price: request.body.price, 
				eoq: request.body.eoq, 
				filename: filename[0]
			}
		});
		response.status(200).json({data:"OK"});
	}
	catch(err){
		response.status(400).send("Invalid category name");
	}
	
});



module.exports = router;