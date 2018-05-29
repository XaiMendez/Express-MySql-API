"use strict"

// Dependency
const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

const Team = sequelize.define('team', {
	id: {
		type: Sequelize.INTEGER, primaryKey: true 
	},
	name: {
		type: Sequelize.STRING
	}

},  {timestamps: false} );



// force: true will drop the table if it already exists

User.sync({force: true});


module.exports = Team;