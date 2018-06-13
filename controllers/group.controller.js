"use strict"

// Dependencies
const bcrypt = require("bcrypt-nodejs");

const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

// import Group model
const Group = require("../models/group.js")(sequelize, Sequelize);
const Course = require("../models/course.js")(sequelize, Sequelize);
const Schedule = require("../models/schedule.js")(sequelize, Sequelize);
const Teacher = require("../models/teacher.js")(sequelize, Sequelize);

Group.belongsTo(Course, {foreignKey:'courseId'});
Group.belongsTo(Schedule, {foreignKey:'scheduleId'});
Group.belongsTo(Teacher, {foreignKey:'teacherId'});



function test(req, res){
	res.status(200).send({message: 'hello from groupController'});
}

// create
function createGroup(req, res){

	let Group = new Group();
	Group.name = req.body.name;

	if(Group.name){

		Group.create({  
			name: Group.name,
		})
		.then(Group => {
			let message = 'New Group has been created.';
					//console.log(message);
					res.status(201).send({message: message});
				});

	}

}

// find all
function findAllGroups(req, res){
	Group.findAll(
		{
			subQuery: false,
			include: [
				{model: Course,},
				{model: Schedule,},
				{model: Teacher,}
			]
	}
	).then(groups => {
		//console.log(groups);
		groups.forEach(function(v){ delete v.dataValues.scheduleId, delete v.dataValues.courseId, delete v.dataValues.teacherId });
		res.status(200).send(groups);

	});
}


// find One
function findGroupById(req, res){
	
	Group.findOne({
		where: {id: req.params.id},
	})
	.then(Group => {
		//console.log(user);
		if(!Group){
			res.status(404).send({message:"Group not found"});
		}else{
			res.status(200).send(Group);
		}
	});

}

// update
function updateGroupById(req, res){

	if(req.body){

		Group.update(
			req.body,
			{where: {id : req.body.id }})  
		.then(Group => {
			if(Group == 0){
				res.status(200).send({message: "Group not found."});
			}else{
				res.status(200).send({message: "Group has been updated."});
			}

		});
	}
	
}


// delete
function deleteGroup(req, res){
	Group.destroy({
		where: {id: req.params.id},
	})
	.then(Group => {
		console.log(Group);
		if(!Group){
			res.status(404).send({message: "Group not found."});
		}else{
			res.status(201).send({message: "Group has been deleted."});
		}

	});

}


module.exports = {
	test,
	findAllGroups,
	createGroup,
	findGroupById,
	updateGroupById,
	deleteGroup
}