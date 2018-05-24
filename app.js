"use strict"

// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Express Object
const app = express();

// Convert objects to json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
const userRoute = require("./routes/user.route.js");

// Base route
app.use("/api", userRoute);

module.exports = app;