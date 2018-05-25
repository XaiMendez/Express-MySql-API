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
  *       201:
  *         description: Return saved user
  *         schema:
  *           $ref: '#/definitions/User'
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
  * /api/user:
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
  * /user:
  *   post:
  *     tags:
  *       - User
  *     description: Save user
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
  *     description: Save user
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