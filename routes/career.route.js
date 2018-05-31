"use strict"

// load express dependency
var express = require("express");

// loading controller module
var careerController = require("../controllers/career.controller.js");

// loading router from express.js
var api = express.Router();

// USER ROUTES
api.get("/career/test", careerController.test);
api.get("/career", careerController.findAllCareers);
api.get("/career/:id", careerController.findCareerById);
api.post("/career", careerController.createCareer);
api.put("/career", careerController.updateCareerById);
api.delete("/career/:id", careerController.deleteCareer);

module.exports = api;