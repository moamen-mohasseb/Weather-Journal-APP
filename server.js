// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app= express();
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port=3000;
// Setup Server
const server = app.listen(port,listining);
function listining(){
	console.log(`server runing on localhost:${port}`);
}

//get route
app.get("/get",senDate);

function senDate(req,res){
	res.send(projectData);
	projectData=[];
};


//POST route


//post data
app.post('/post',addTemp);

function addTemp(req,res){
	const newEntry={
		temp:req.body.temp,
		date:req.body.date,
		content:req.body.content	}

 	projectData.push(newEntry);
    console.log(projectData);
};