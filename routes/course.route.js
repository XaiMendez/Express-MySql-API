"use strict"

// load express dependency
var express = require("express");

// loading controller module
var courseController = require("../controllers/course.controller.js");

// loading router from express.js
var api = express.Router();

// USER ROUTES
api.get("/course/test", courseController.test);
api.get("/course", courseController.findAllCourses);
api.get("/course/:courseId", courseController.findCourseById);
api.get("/course/:courseId/groups", courseController.findAllGroupsByCourseId);
api.post("/course", courseController.createCourse);
api.put("/course", courseController.updateCourseById);
api.delete("/course/:courseId", courseController.deleteCourse);

module.exports = api;