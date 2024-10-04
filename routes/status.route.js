const express = require('express');
const statusRouter = express.Router();
const StatusController = require('../Controllers/status.controller');

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: status management
 */

/**
 * @swagger
 * /api/createStatus:
 *   post:
 *     tags: [Status]
 *     summary: Create a new status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status: 
 *                  type: string
 *     responses:
 *       201:
 *         description: Status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
statusRouter.post('/createStatus', StatusController.createStatus);

/**
 * @swagger
 * /api/getStatus:
 *   get:
 *     tags: [Status]
 *     summary: Get all statuss
 *     responses:
 *       200:
 *         description: List of statuss
 *       500:
 *         description: Server error
 */
statusRouter.get('/getStatus', StatusController.getStatus);

/**
 * @swagger
 * /api/getStatusBiId/{id}:
 *   get:
 *     tags: [Status]
 *     summary: Get status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: status ID
 *     responses:
 *       200:
 *         description: status details
 *       404:
 *         description: status not found
 *       500:
 *         description: Server error
 */
statusRouter.get('/getStatusBiId/:id', StatusController.getStatusBiId);

/**
 * @swagger
 * /api/updataStatus/{id}:
 *   put:
 *     tags: [Status]
 *     summary: Update status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              status:
 *                  string
 *     responses:
 *       200:
 *         description: status updated
 *       404:
 *         description: status not found
 *       500:
 *         description: Server error
 */
statusRouter.put('/updataStatus/:id', StatusController.updataStatus);

/**
 * @swagger
 * /api/deletStatus/{id}:
 *   delete:
 *     tags: [Status]
 *     summary: Delete status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: status ID
 *     responses:
 *       204:
 *         description: status deleted
 *       404:
 *         description: status not found
 *       500:
 *         description: Server error
 */
statusRouter.delete('/deletStatus/:id', StatusController.deletStatus);

module.exports = statusRouter
