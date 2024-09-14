const express = require('express');
const genderRouter = express.Router();
const GenderController = require('../controllers/gender.controller');

/**
 * @swagger
 * tags:
 *   name: gender
 *   description: gender management
 */

/**
 * @swagger
 * /genderRouter/createGendeer:
 *   post:
 *     tags: [gender]
 *     summary: Create a new gender
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              etaj:
 *                  string
 *              condition:
 *                  string
 *     responses:
 *       201:
 *         description: gender created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
genderRouter.post('/createGendeer', GenderController.createGendeer);

/**
 * @swagger
 * /genderRouter/getGendeer:
 *   get:
 *     tags: [gender]
 *     summary: Get all genders
 *     responses:
 *       200:
 *         description: List of genders
 *       500:
 *         description: Server error
 */
genderRouter.get('/getGendeer', GenderController.getGendeer);

/**
 * @swagger
 * /genderRouter/getGendeerBiId/{id}:
 *   get:
 *     tags: [gender]
 *     summary: Get gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: gender ID
 *     responses:
 *       200:
 *         description: gender details
 *       404:
 *         description: gender not found
 *       500:
 *         description: Server error
 */
genderRouter.get('/getGendeerBiId/:id', GenderController.getGendeerBiId);

/**
 * @swagger
 * /genderRouter/updataGendeer/{id}:
 *   put:
 *     tags: [gender]
 *     summary: Update gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: gender ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              etaj:
 *                  string
 *              condition:
 *                  string
 *     responses:
 *       200:
 *         description: gender updated
 *       404:
 *         description: gender not found
 *       500:
 *         description: Server error
 */
genderRouter.put('/updataGendeer/:id', GenderController.updataGendeer);

/**
 * @swagger
 * /genderRouter/deletGendeer/{id}:
 *   delete:
 *     tags: [gender]
 *     summary: Delete gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: gender ID
 *     responses:
 *       204:
 *         description: gender deleted
 *       404:
 *         description: gender not found
 *       500:
 *         description: Server error
 */
genderRouter.delete('/deletGendeer/:id', GenderController.deletGendeer);

module.exports = genderRouter
