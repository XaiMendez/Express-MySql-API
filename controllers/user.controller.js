"use strict"

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
	User.create({  
		username: req.body.username,
		password: req.body.password
	})
	.then(newUser => {
		let message = 'New user has been created.';
		//console.log(message);
		res.status(201).send({message: message});
	});
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
	User.update(
		req.body,
		{where: { id: req.params.id } })  
	.then(user => {
		let message = 'User has been updated.';
		//console.log(message);
		res.status(201).send({message: message});
	})

}

// delete
function deleteUser(req, res){
	User.destroy({
		where: {id: req.params.id},
	})
	.then(user => {
		pet.updateAttributes({
			name: 'Maxy-boi-boi'
		});
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