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
const swaggerRoute = require("./routes/admin.swagger.route.js");

const authRoute = require("./routes/auth.route.js");
const userRoute = require("./routes/user.route.js");

const CareerRoute = require("./routes/career.route.js");
const ScheduleRoute = require("./routes/schedule.route.js");
const CourseRoute = require("./routes/course.route.js");

// Base route
app.use("/", swaggerRoute);
app.use("/api", userRoute);
app.use("/api", authRoute);
app.use("/api", CareerRoute);
app.use("/api", ScheduleRoute);
app.use("/api", CourseRoute);

module.exports = app;