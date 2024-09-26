const express = require('express');
const genderRouter = express.Router();
const GenderController = require('../controllers/gender.controller');

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: gender management
 */

/**
 * @swagger
 * /api/createGendeer:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new gender
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
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
 * /api/getGendeer:
 *   get:
 *     tags: [Gender]
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
 * /api/getGendeerBiId/{id}:
 *   get:
 *     tags: [Gender]
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
 * /api/updataGendeer/{id}:
 *   put:
 *     tags: [Gender]
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
 *              name:
 *                  type: string
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
 * /api/deletGendeer/{id}:
 *   delete:
 *     tags: [Gender]
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
