"use strict"

// load express dependency
var express = require("express");

// loading controller module
var groupController = require("../controllers/group.controller.js");

// loading router from express.js
var api = express.Router();

// group ROUTES
api.get("/group/test", groupController.test);
api.get("/group", groupController.findAllGroups);
//api.get("/group", groupController.findAllGroupsByCourse);
api.get("/group/:groupId", groupController.findGroupById);
api.post("/group", groupController.createGroup);
api.put("/group", groupController.updateGroupById);
api.delete("/group/:groupId", groupController.deleteGroup);

module.exports = api;