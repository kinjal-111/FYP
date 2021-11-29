
var express = require('express');
var multer = require('multer');
var cors = require('cors');
const mongoose = require('mongoose');
const routerUrls = require('./routes/admin');
const customerUrls = require('./routes/customer');
var path = require('path');
var fs = require('fs');
var app = express();


mongoose.connect("mongodb+srv://kinjal:Kinjal@1234@cluster0.5tqdf.mongodb.net/mytable?retryWrites=true&w=majority", {
		useUnifiedTopology: true,
		useNewUrlParser: true
	}, () => console.log('connection made'));

//Middlewares
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});


app.use(express.json());
app.use('/api', routerUrls);
app.use(cors());

app.use('/api', routerUrls);
app.use(cors());


//PORT
const port = process.env.PORT || 8000;
console.log("Port : "+ port);

//Starting a server
app.listen(port,'localhost', () => {
  console.log(`App is running at ${port}`);
});