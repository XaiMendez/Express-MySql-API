
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
  * /Teacher:
  *   get:
  *     tags:
  *       - Teacher
  *     summary: Get all teachers
  *     description: Get all teachers
  *     operationId: findAllTeachers
  *     produces:
  *       - application/json
  *     parameters: []
  *     responses:
  *       200:
  *         description: Get all teachers
  */

 /**
  * @swagger
  * /teacher/{id}:
  *   get:
  *     tags:
  *       - Teacher
  *     summary: Get specific teacher
  *     description: Get specific teacher
  *     operationId: findTeacherById
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Teacher id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Get teacher by id
  */

 /**
  * @swagger
  * /teacher:
  *   post:
  *     tags:
  *       - Teacher
  *     summary: Create teacher
  *     description: Create teacher
  *     operationId: createTeacher
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: Teacher object that needs to be added to the database
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/Teacher'
  *     responses:
  *       201:
  *         description: Return saved teacher
  *         schema:
  *           $ref: '#/definitions/Teacher'
  */

 /**
  * @swagger
  * /career:
  *   put:
  *     tags:
  *       - Teacher
  *     summary: Update teacher
  *     description: Update specific teacher detail
  *     operationId: updateTeacherById
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: Teacher object that needs to be updated to the database
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/Teacher'
  *     responses:
  *       200:
  *         description: Update teacher
  */

 /**
  * @swagger
  * /teacher/{id}:
  *   delete:
  *     tags:
  *       - Teacher
  *     summary: Delete teacher
  *     description: Delete specific teacher detail
  *     operationId: deleteTeacher
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Teacher id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Delete teacher
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

/**
  * @swagger
  * definition:
  *   Course:
  *     properties:
  *       id:
  *         type: integer
  *       name:
  *         type: string
*/

/**
  * @swagger
  * definition:
  *   Teacher:
  *     properties:
  *       id:
  *         type: integer
  *       name:
  *         type: string
*/