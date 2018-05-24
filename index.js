"use strict"

// Modules
const app = require("./app.js");
const sequelize = require("./connection.js");

// Server
const port = process.env.PORT || 1234;

sequelize
.authenticate()
.then(() => {
	
	console.log('Database connection has been established successfully.');
	app.listen(port, function(){
		console.log(":: API REST SERVER IN http://localhost:" + port + "/");
	})

})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});
