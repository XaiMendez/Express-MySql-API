"use strict"

// Dependencies
const bcrypt = require("bcrypt-nodejs");

const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

// import Teacher model
const Teacher = require("../models/teacher.js")(sequelize, Sequelize);

function test(req, res){
	res.status(200).send({message: 'hello from teacherController'});
}

// create
function createTeacher(req, res){

	let teacher = new Teacher();
	teacher.code = req.body.code;
	teacher.name = req.body.name;

	if(teacher.name){

		Teacher.create({  
			code: teacher.code,
			name: teacher.name,
		})
		.then(teacher => {
			let message = 'New teacher has been created.';
					//console.log(message);
					res.status(201).send({message: message});
				});

	}

}

// find all
function findAllTeachers(req, res){
	Teacher.findAll().then(teaches => {
		//console.log(users)
		res.status(200).send(teaches);

	});
}



// find One
function findTeacherById(req, res){
	
	Teacher.findOne({
		where: {teacherId: req.params.teacherId},
	})
	.then(teacher => {
		//console.log(user);
		if(!teacher){
			res.status(404).send({message:"Teacher not found"});
		}else{
			res.status(200).send(teacher);
		}
	});

}

// update
function updateTeacherById(req, res){

	if(req.body){

		Teacher.update(
			req.body,
			{where: {teacherId : req.body.teacherId }})  
		.then(Teacher => {
			if(Teacher == 0){
				res.status(200).send({message: "Teacher not found."});
			}else{
				res.status(200).send({message: "Teacher has been updated."});
			}

		});
	}
	
}


// delete
function deleteTeacher(req, res){
	Teacher.destroy({
		where: {teacherId: req.params.teacherId},
	})
	.then(teacher => {
		console.log(Teacher);
		if(!teacher){
			res.status(404).send({message: "Teacher not found."});
		}else{
			res.status(201).send({message: "Teacher has been deleted."});
		}

	});

}


module.exports = {
	test,
	findAllTeachers,
	createTeacher,
	findTeacherById,
	updateTeacherById,
	deleteTeacher
}