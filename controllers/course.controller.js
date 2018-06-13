"use strict"

// Dependencies
const bcrypt = require("bcrypt-nodejs");

const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

// import Course model
const Course = require("../models/course.js")(sequelize, Sequelize);

function test(req, res){
	res.status(200).send({message: 'hello from CourseController'});
}

// create
function createCourse(req, res){

	let course = new Course();
	course.code = req.body.code;
	course.name = req.body.name;

	if(course.name){

		Course.create({  
			code: course.code,
			name: course.name,
		})
		.then(Course => {
			let message = 'New course has been created.';
					//console.log(message);
					res.status(201).send({message: message});
				});

	}

}

// find all
function findAllCourses(req, res){
	Course.findAll().then(courses => {
		//console.log(users)
		res.status(200).send(courses);

	});
}



// find One
function findCourseById(req, res){
	
	Course.findOne({
		where: {courseId: req.params.courseId},
	})
	.then(course => {
		//console.log(user);
		if(!course){
			res.status(404).send({message:"Course not found"});
		}else{
			res.status(200).send(course);
		}
	});

}

// update
function updateCourseById(req, res){

	if(req.body){

		Course.update(
			req.body,
			{where: {courseId : req.body.courseId }})  
		.then(course => {
			if(course == 0){
				res.status(200).send({message: "Course not found."});
			}else{
				res.status(200).send({message: "Course has been updated."});
			}

		});
	}
	
}


// delete
function deleteCourse(req, res){
	Course.destroy({
		where: {courseId: req.params.courseId},
	})
	.then(course => {
		console.log(course);
		if(!course){
			res.status(404).send({message: "Course not found."});
		}else{
			res.status(201).send({message: "Course has been deleted."});
		}

	});

}


module.exports = {
	test,
	findAllCourses,
	createCourse,
	findCourseById,
	updateCourseById,
	deleteCourse
}