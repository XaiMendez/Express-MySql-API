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

Group.belongsTo(Course, {foreignKey:'courseId', onDelete: 'cascade', hooks: true});
Group.belongsTo(Schedule, {foreignKey:'scheduleId', onDelete: 'cascade', hooks: true});
Group.belongsTo(Teacher, {foreignKey:'teacherId', onDelete: 'cascade', hooks: true});



function test(req, res){
	res.status(200).send({message: 'hello from groupController'});
}

// create
function createGroup(req, res){

	let group = new Group();
	group.name = req.body.name;

	if(group.name){

		Group.create({  
			name: group.name,
		})
		.then(group => {
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
		where: {groupId: req.params.groupId},
	})
	.then(group => {
		//console.log(user);
		if(!group){
			res.status(404).send({message:"Group not found"});
		}else{
			res.status(200).send(group);
		}
	});

}

// update
function updateGroupById(req, res){

	if(req.body){

		Group.update(
			req.body,
			{where: {groupId : req.body.groupId }})  
		.then(group => {
			if(group == 0){
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
		where: {groupId: req.params.groupId},
	})
	.then(group => {
		//console.log(group);
		if(!group){
			res.status(404).send({message: "Group not found."});
		}else{
			res.status(201).send({message: "Group has been deleted."});
		}

	})
	.catch(() => {
		res.status(400).send({message: "The group can not be eliminated"});
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