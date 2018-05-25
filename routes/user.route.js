"use strict"

// load express dependency
var express = require("express");

// loading controller module
var userController = require("../controllers/user.controller.js");

// loading router from express.js
var api = express.Router();

// USER ROUTES
api.get("/user/test", userController.test);
api.get("/user", userController.findAllUsers);
api.get("/user/:id", userController.findUserById);
api.delete("/user/:id", userController.deleteUser);
api.post("/user", userController.createUser);

module.exports = api;