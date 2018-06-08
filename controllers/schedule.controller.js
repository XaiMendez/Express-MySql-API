"use strict"

// Dependencies
const bcrypt = require("bcrypt-nodejs");

const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

// import Schedule model
const Schedule = require("../models/schedule.js")(sequelize, Sequelize);

function test(req, res){
	res.status(200).send({message: 'hello from scheduleController'});
}

// create
function createSchedule(req, res){

	let schedule = new Schedule();
	schedule.name = req.body.name;

	if(schedule.name){

		Schedule.create({  
			name: schedule.name,
		})
		.then(schedule => {
			let message = 'New schedule has been created.';
					//console.log(message);
					res.status(201).send({message: message});
				});

	}

}

// find all
function findAllSchedules(req, res){
	Schedule.findAll().then(schedules => {
		//console.log(users)
		res.status(200).send(schedules);

	});
}



// find One
function findScheduleById(req, res){
	
	Schedule.findOne({
		where: {id: req.params.id},
	})
	.then(schedule => {
		//console.log(user);
		if(!schedule){
			res.status(404).send({message:"Schedule not found"});
		}else{
			res.status(200).send(schedule);
		}
	});

}

// update
function updateScheduleById(req, res){

	let schedule = new Schedule();

	if(req.body){

		Schedule.update(
			req.body,
			{where: {id : req.body.id }})  
		.then(schedule => {
			if(schedule == 0){
				res.status(200).send({message: "Schedule not found."});
			}else{
				res.status(200).send({message: "Schedule has been updated."});
			}

		});
	}
	

}

// delete
function deleteSchedule(req, res){
	Schedule.destroy({
		where: {id: req.params.id},
	})
	.then(schedule => {
		console.log(schedule);
		if(!schedule){
			res.status(404).send({message: "Schedule not found."});
		}else{
		  res.status(201).send({message: "Schedule has been deleted."});
		}

	});

}


module.exports = {
	test,
	findAllSchedules,
	createSchedule,
	findScheduleById,
	updateScheduleById,
	deleteSchedule
}