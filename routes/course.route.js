"use strict"

// load express dependency
var express = require("express");

// loading controller module
var courseController = require("../controllers/course.controller.js");

// loading router from express.js
var api = express.Router();

// USER ROUTES
api.get("/course/test", courseController.test);
api.get("/course", courseController.findAllcourses);
api.get("/course/:id", courseController.findcourseById);
api.post("/course", courseController.createcourse);
api.put("/course", courseController.updatecourseById);
api.delete("/course/:id", courseController.deletecourse);

module.exports = api;