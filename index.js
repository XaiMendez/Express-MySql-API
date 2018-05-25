"use strict"

// Modules
const app = require("./app.js");
const sequelize = require("./connection.js");

// Server
const port = process.env.PORT || 3000;

sequelize
.authenticate()
.then(() => {
	
	console.log('Database connection has been established successfully.');
	app.listen(port, function(){

		// Enable CORS
		app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});

		console.log(":: API REST SERVER IN http://127.0.0.1:" + port + "/");
	})

})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});
