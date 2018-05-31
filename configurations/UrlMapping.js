
/**
  * @swagger
  * /user:
  *   get:
  *     tags:
  *       - User
  *     summary: Get all users
  *     description: Get all users
  *     operationId: findAllUsers
  *     produces:
  *       - application/json
  *     parameters: []
  *     responses:
  *       200:
  *         description: Get all users
  */

 /**
  * @swagger
  * /user/{id}:
  *   get:
  *     tags:
  *       - User
  *     description: Get specific user
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: User id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Get user by id
  */

 /**
  * @swagger
  * /user:
  *   post:
  *     tags:
  *       - User
  *     summary: Create user
  *     description: Create user
  *     operationId: createUser
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: user
  *         description: User object
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/User'
  *     responses:
  *       200:
  *         description: Return saved user
  *         schema:
  *           $ref: '#/definitions/User'
  */

 /**
  * @swagger
  * /user/{id}:
  *   put:
  *     tags:
  *       - User
  *     description: Update specific user detail
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: User id
  *         in: path
  *         required: true
  *         type: string
  *       - name: user object
  *         description: user data
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/User'
  *     responses:
  *       200:
  *         description: Update user
  */

 /**
  * @swagger
  * /user/{id}:
  *   delete:
  *     tags:
  *       - User
  *     description: Delete specific user detail
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: User id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Delete user
  */

  /**
  * @swagger
  * /career:
  *   get:
  *     tags:
  *       - Career
  *     summary: Get all careers
  *     description: Get all careers
  *     operationId: findAllCareers
  *     produces:
  *       - application/json
  *     parameters: []
  *     responses:
  *       200:
  *         description: Get all careers
  */

 /**
  * @swagger
  * /career/{id}:
  *   get:
  *     tags:
  *       - Career
  *     summary: Get specific career
  *     description: Get specific career
  *     operationId: findCareerById
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Career id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Get career by id
  */

 /**
  * @swagger
  * /career:
  *   post:
  *     tags:
  *       - Career
  *     summary: Create career
  *     description: Create career
  *     operationId: createCareer
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: Career object that needs to be added to the database
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/Career'
  *     responses:
  *       201:
  *         description: Return saved career
  *         schema:
  *           $ref: '#/definitions/Career'
  */

 /**
  * @swagger
  * /career:
  *   put:
  *     tags:
  *       - Career
  *     summary: Update career
  *     description: Update specific career detail
  *     operationId: updateCareerById
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: Career object that needs to be updated to the database
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/Career'
  *     responses:
  *       200:
  *         description: Update career
  */

 /**
  * @swagger
  * /career/{id}:
  *   delete:
  *     tags:
  *       - Career
  *     summary: Delete career
  *     description: Delete specific career detail
  *     operationId: deleteCareer
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Career id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Delete career
  */

   /**
  * @swagger
  * definition:
  *   User:
  *     properties:
  *       username:
  *         type: string
  *       password:
  *         type: string
  */

     /**
  * @swagger
  * definition:
  *   Career:
  *     properties:
  *       id:
  *         type: integer
  *       name:
  *         type: string
  */