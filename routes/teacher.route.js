"use strict"

// load express dependency
var express = require("express");

// loading controller module
var teacherController = require("../controllers/teacher.controller.js");

// loading router from express.js
var api = express.Router();

// USER ROUTES
api.get("/teacher/test", teacherController.test);
api.get("/teacher", teacherController.findAllTeachers);
api.get("/teacher/:teacherId", teacherController.findTeacherById);
api.post("/teacher", teacherController.createTeacher);
api.put("/teacher", teacherController.updateTeacherById);
api.delete("/teacher/:teacherId", teacherController.deleteTeacher);

module.exports = api;