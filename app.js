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
const swaggerRoute = require("./routes/swagger.route.js");
const userRoute = require("./routes/user.route.js");
const authRoute = require("./routes/auth.route.js");

// Base route
app.use("/", swaggerRoute);
app.use("/api", userRoute);
app.use("/api", authRoute);

module.exports = app;