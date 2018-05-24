"use strict"

// Modules
const app = require("./app.js");

// Server
const port = process.env.PORT || 1234;
app.listen(port, function(){
			console.log(":: API REST SERVER IN http://localhost:" + port + "/");
		})