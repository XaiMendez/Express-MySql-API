"use strict"

// Dependency
const Sequelize = require('sequelize');
const sequelize = require("../connection.js");

const User = sequelize.define('Users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true 
	},
	username: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},

},  {timestamps: false} );



// force: true will drop the table if it already exists

/*User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
*/

module.exports = User;