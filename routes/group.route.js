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
api.get("/group/:id", groupController.findGroupById);
api.post("/group", groupController.createGroup);
api.put("/group", groupController.updateGroupById);
api.delete("/group/:id", groupController.deleteGroup);

module.exports = api;