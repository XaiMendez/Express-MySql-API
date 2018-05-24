"use strict"

// Test function
function test(req, res){
	res.status(200).send({message: "hello from userController"});
}


module.exports = {
	test
}