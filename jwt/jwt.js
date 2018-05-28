"use strict"

// Dependencies
const token = require("jwt-simple");
const moment = require("moment");

const secretKey = "secret key";


// token method

exports.createToken = function(userP){
	// data
	var loadToken = {
		// object id
		sub: userP._id,
		name: userP.user,
		// timestamp format
		now: moment().unix(),
		exp: moment().add(30, "days").unix()
	}

	return token.encode(loadToken, secretKey)
}