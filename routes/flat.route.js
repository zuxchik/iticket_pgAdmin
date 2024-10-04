const express = require('express');
const flatRouter = express.Router();
const FlatController = require('../Controllers/flat.controller');

/**
 * @swagger
 * tags:
 *   name: flat
 *   description: flat management
 */

/**
 * @swagger
 * /api/createFlat:
 *   post:
 *     tags: [flat]
 *     summary: Create a new flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              etaj:
 *               type: number
 *              condition:
 *               type: string
 *     responses:
 *       201:
 *         description: flat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
flatRouter.post('/createFlat', FlatController.createFlat);

/**
 * @swagger
 * /api/geFlat:
 *   get:
 *     tags: [flat]
 *     summary: Get all flats
 *     responses:
 *       200:
 *         description: List of flats
 *       500:
 *         description: Server error
 */
flatRouter.get('/geFlat', FlatController.geFlat);

/**
 * @swagger
 * /api/getFlatBiId/{id}:
 *   get:
 *     tags: [flat]
 *     summary: Get flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: flat ID
 *     responses:
 *       200:
 *         description: flat details
 *       404:
 *         description: flat not found
 *       500:
 *         description: Server error
 */
flatRouter.get('/getFlatBiId/:id', FlatController.getFlatBiId);

/**
 * @swagger
 * /api/updataFlat/{id}:
 *   put:
 *     tags: [flat]
 *     summary: Update flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: flat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              etaj:
 *               type: number
 *              condition:
 *               type: string
 *     responses:
 *       200:
 *         description: flat updated
 *       404:
 *         description: flat not found
 *       500:
 *         description: Server error
 */
flatRouter.put('/updataFlat/:id', FlatController.updataFlat);

/**
 * @swagger
 * /api/deletFlat/{id}:
 *   delete:
 *     tags: [flat]
 *     summary: Delete flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: flat ID
 *     responses:
 *       204:
 *         description: flat deleted
 *       404:
 *         description: flat not found
 *       500:
 *         description: Server error
 */
flatRouter.delete('/deletFlat/:id', FlatController.deletFlat);

module.exports = flatRouter
