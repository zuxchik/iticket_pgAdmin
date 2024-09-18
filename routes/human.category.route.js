const express = require('express');
const humanCategoryRouter = express.Router();
const HumanCategoryController = require('../controllers/human.category.controller');

/**
 * @swagger
 * tags:
 *   name: humanCategory
 *   description: humanCategory management
 */

/**
 * @swagger
 * /humanCategoryRouter/createHumancategoory:
 *   post:
 *     tags: [humanCategory]
 *     summary: Create a new humanCategory
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
 *         description: humanCategory created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
humanCategoryRouter.post('/createHumancategoory', HumanCategoryController.createHumancategoory);

/**
 * @swagger
 * /humanCategoryRouter/getHumancategoory:
 *   get:
 *     tags: [humanCategory]
 *     summary: Get all humanCategorys
 *     responses:
 *       200:
 *         description: List of humanCategorys
 *       500:
 *         description: Server error
 */
humanCategoryRouter.get('/getHumancategoory', HumanCategoryController.getHumancategoory);

/**
 * @swagger
 * /humanCategoryRouter/getHumancategooryBiId/{id}:
 *   get:
 *     tags: [humanCategory]
 *     summary: Get humanCategory by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: humanCategory ID
 *     responses:
 *       200:
 *         description: humanCategory details
 *       404:
 *         description: humanCategory not found
 *       500:
 *         description: Server error
 */
humanCategoryRouter.get('/getHumancategooryBiId/:id', HumanCategoryController.getHumancategooryBiId);

/**
 * @swagger
 * /humanCategoryRouter/updataHumancategoory/{id}:
 *   put:
 *     tags: [humanCategory]
 *     summary: Update humanCategory by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: humanCategory ID
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
 *         description: humanCategory updated
 *       404:
 *         description: humanCategory not found
 *       500:
 *         description: Server error
 */
humanCategoryRouter.put('/updataHumancategoory/:id', HumanCategoryController.updataHumancategoory);

/**
 * @swagger
 * /humanCategoryRouter/deletHumancategoory/{id}:
 *   delete:
 *     tags: [humanCategory]
 *     summary: Delete humanCategory by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: humanCategory ID
 *     responses:
 *       204:
 *         description: humanCategory deleted
 *       404:
 *         description: humanCategory not found
 *       500:
 *         description: Server error
 */
humanCategoryRouter.delete('/deletHumancategoory/:id', HumanCategoryController.deletHumancategoory);

module.exports = humanCategoryRouter
