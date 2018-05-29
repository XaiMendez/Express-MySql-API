"use strict"

// Dependencies
const bcrypt = require("bcrypt-nodejs");

// import user model
const User = require("../models/user.model.js");


function test(req, res){
	res.status(200).send({message: 'hello from userController'});
}

// find all
function findAllUsers(req, res){
	User.findAll().then(users => {
		//console.log(users)
		res.status(200).send(users);

	});
}

// create
function createUser(req, res){

	let users = new User();
	users.username = req.body.username;
	users.password = req.body.password;

	if(users.password){
		bcrypt.hash(users.password, null, null, function(error, hash){
			users.password = hash;

			if(users.username){
				// saving in the db
				User.create({  
					username: users.username,
					password: users.password
				})
				.then(user => {
					let message = 'New user has been created.';
					//console.log(message);
					res.status(201).send({message: message});
				});

			}
		});
	}


}

// find One
function findUserById(req, res){
	User.findOne({
		where: {id: req.params.id},
	})
	.then(user => {
		//console.log(user);
		res.status(200).send(user);
	});

}

// update
function updateUserById(req, res){

	let users = new User();
	users.password = req.body.password;

	if(users.password){
		bcrypt.hash(users.password, null, null, function(error, hash){
			req.body.password = hash;

			if(req.body.username){

				User.update(
					req.body,
					{where: {id : req.params.id }})  
				.then(user => {
					let message = 'User has been updated.';
					//console.log(message);
					res.status(201).send({message: message});
				});
			}

		});

	}

	

}

// delete
function deleteUser(req, res){
	User.destroy({
		where: {id: req.params.id},
	})
	.then(user => {
		let message = 'User has been deleted.';
		//console.log(message);
		res.status(201).send({message: message});
	});

}


module.exports = {
	test,
	findAllUsers,
	createUser,
	findUserById,
	updateUserById,
	deleteUser
}