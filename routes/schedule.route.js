"use strict"

// load express dependency
var express = require("express");

// loading controller module
var scheduleController = require("../controllers/schedule.controller.js");

// loading router from express.js
var api = express.Router();

// USER ROUTES
api.get("/schedule/test", scheduleController.test);
api.get("/schedule", scheduleController.findAllSchedules);
api.get("/schedule/:id", scheduleController.findScheduleById);
api.post("/schedule", scheduleController.createSchedule);
api.put("/schedule", scheduleController.updateScheduleById);
api.delete("/schedule/:id", scheduleController.deleteSchedule);

module.exports = api;