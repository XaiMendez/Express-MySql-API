"use strict"

// Dependencies
const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');

// loading router from express.js
const api = express.Router();

/** swagger definition */
api.use('/api-docs', express.static('./public/api-docs/dist/'))

const swaggerDefinition = {
  info: {
    title: 'EnglishTimeSV API',
    version: '1.0.0',
    description: 'RESTful API with Express Js-Mysql',
  },
  host: '127.0.0.1:3000',
  basePath: '/api',
};

// options for the swagger docs
const options = {
  swaggerDefinition: swaggerDefinition, // swagger definition
  apis: ['./configurations/AdminUrlMapping.js'], // path where API specification are written
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

/** ./end swagger definition */


api.get('/swagger.json', function(req, res) {  
 res.setHeader('Content-Type', 'application/json');   
 res.send(swaggerSpec); 
});


module.exports = api;