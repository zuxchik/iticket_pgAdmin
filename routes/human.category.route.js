const express = require('express');
const humanCategoryRouter = express.Router();
const HumanCategoryController = require('../Controllers/human.category.controller');

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: humanCategory management
 */

/**
 * @swagger
 * /api/createHumancategoory:
 *   post:
 *     tags: [HumanCategory]
 *     summary: Create a new humanCategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
 *              start_age:
 *                  type: number
 *              finish_age:
 *                  type: number
 *              gender_id:
 *                  type: number
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
 * /api/getHumancategoory:
 *   get:
 *     tags: [HumanCategory]
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
 * /api/getHumancategooryBiId/{id}:
 *   get:
 *     tags: [HumanCategory]
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
 * /api/updataHumancategoory/{id}:
 *   put:
 *     tags: [HumanCategory]
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
 *              name:
 *                  type: string
 *              start_age:
 *                  type: number
 *              finish_age:
 *                  type: number
 *              gender_id:
 *                  type: number
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
 * /api/deletHumancategoory/{id}:
 *   delete:
 *     tags: [HumanCategory]
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
