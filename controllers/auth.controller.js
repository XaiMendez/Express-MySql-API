"use strict"

//
const token = require("../jwt/jwt.js");


// import user model
var User = require("../models/user.model.js");


// login user
function login(req, res){

	var params = req.body;
	var usernameP = params.username;
	var passwordP = params.password;

	User.findOne({
		where: {username: usernameP},
	})
	.then(user => {
		//console.log(user);
		res.status(200).send(user);
	}, error => {
  		let message = 'User not found';
  		//console.log(message); // Error!
  		res.status(404).send({message:message});
	});


	/*User.findOne({user:userP}, (error, user)=>{
		if(error){
			res.status(500).send({message:"Error entering user"});
		}else{

			if(!userP){
				res.status(404).send({message:"User not found"});
			}else{
				//console.log(user);
				bcrypt.compare(passwordP, user.password, function(error, success){
					if(success){
						
						//res.status(200).send({user});
						// send token param like true
						if(params.token){
							// return jwt
							res.status(200).send({token: token.createToken(user)});
						}


					}else{
						res.status(404).send({message:"The user could not enter"});
					}
				});
			}

		}
	});
*/

}

module.exports = {
	login
}