"use strict"

// Dependencies
const bcrypt = require("bcrypt-nodejs");

const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

// import career model
const Career = require("../models/career.js")(sequelize, Sequelize);

function test(req, res){
	res.status(200).send({message: 'hello from careerController'});
}

// create
function createCareer(req, res){

	let career = new Career();
	career.name = req.body.name;

	if(career.name){

		Career.create({  
			name: career.name,
		})
		.then(career => {
			let message = 'New career has been created.';
					//console.log(message);
					res.status(201).send({message: message});
				});

	}

}

// find all
function findAllCareers(req, res){
	Career.findAll().then(careers => {
		//console.log(users)
		res.status(200).send(careers);

	});
}



// find One
function findCareerById(req, res){
	
	Career.findOne({
		where: {id: req.params.id},
	})
	.then(career => {
		//console.log(user);
		if(!career){
			res.status(404).send({message:"career not found"});
		}else{
			res.status(200).send(career);
		}
	});

}

// update
function updateCareerById(req, res){

	let career = new Career();

	if(req.body){

		Career.update(
			req.body,
			{where: {id : req.body.id }})  
		.then(career => {
			if(career == 0){
				res.status(200).send({message: "Career not found."});
			}else{
				res.status(200).send({message: "Career has been updated."});
			}

		});
	}
	

}

// delete
function deleteCareer(req, res){
	Career.destroy({
		where: {id: req.params.id},
	})
	.then(career => {
		console.log(career);
		if(!career){
			res.status(404).send({message: "Career not found."});
		}else{
		  res.status(201).send({message: "Career has been deleted."});
		}

	});

}


module.exports = {
	test,
	findAllCareers,
	createCareer,
	findCareerById,
	updateCareerById,
	deleteCareer
}