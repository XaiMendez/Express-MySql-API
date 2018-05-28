"use strict"

// Dependencies
const express = require("express");

// modules
const authController = require("../controllers/auth.controller.js");

// loading router from express.js
var api = express.Router();

api.post("/login", authController.login);

module.exports = api;