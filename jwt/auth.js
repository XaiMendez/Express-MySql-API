"use strict"

// Dependencies
const token = require("jwt-simple");
const moment = require("moment");

const secretKey = "secret key";

// Auth method

// middleware
exports.authentication = function(req, res, next){

	// token by auth header
	if(!req.headers.authorization){
		return res.status(403).send({message: "Request does not have authentication header"});
	}else{
		// remove ""  and ''
		var tokenSended = req.headers.authorization.replace(/['""]+/g, '');

		// exceptions
		try{
			var loadToken = token.decode(tokenSended, secretKey);
		
			// compare date
			if(loadToken.exp <= moment().unix()){
				return res.status(403).send({message:"Expired token"});
			}
		}catch(exception){
			//console.log(exception);
			return res.status(403).send({message:"Invalid token"});

		}

		req.userToken = loadToken;
		next();
	}
}