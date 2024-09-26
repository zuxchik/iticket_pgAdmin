const express = require('express');
const dileveryRouter = express.Router();
const dileveryControler = require('../Controllers/delivery.controller');

/**
 * @swagger
 * tags:
 *   name: Deliveriy
 *   description: deliveriy management
 */

/**
 * @swagger
 * /api/createDeliveriy:
 *   post:
 *     tags: [Deliveriy]
 *     summary: Create a new deliveriy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *     responses:
 *       201:
 *         description: Deliveriy created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
dileveryRouter.post('/createDeliveriy', dileveryControler.createDelivery);

/**
 * @swagger
 * /api/getDeliveriys:
 *   get:
 *     tags: [Deliveriy]
 *     summary: Get all deliveriys
 *     responses:
 *       200:
 *         description: List of deliveriys
 *       500:
 *         description: Server error
 */
dileveryRouter.get('/getDeliveriys', dileveryControler.getDeliverys);

/**
 * @swagger
 * /api/geDeliveriysBiId/{id}:
 *   get:
 *     tags: [Deliveriy]
 *     summary: Get deliveriy by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deliveriy ID
 *     responses:
 *       200:
 *         description: Deliveriy details
 *       404:
 *         description: Deliveriy not found
 *       500:
 *         description: Server error
 */
dileveryRouter.get('/geDeliveriysBiId/:id', dileveryControler.geDeliverysBiId);

/**
 * @swagger
 * /api/updataDeliveriys/{id}:
 *   put:
 *     tags: [Deliveriy]
 *     summary: Update deliveriy by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deliveriy ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *     responses:
 *       200:
 *         description: Deliveriy updated
 *       404:
 *         description: Deliveriy not found
 *       500:
 *         description: Server error
 */
dileveryRouter.put('/updataDeliveriys/:id', dileveryControler.updataDeliverys);

/**
 * @swagger
 * /api/deletDeliveriys/{id}:
 *   delete:
 *     tags: [Deliveriy]
 *     summary: Delete deliveriy by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deliveriy ID
 *     responses:
 *       204:
 *         description: Deliveriy deleted
 *       404:
 *         description: Deliveriy not found
 *       500:
 *         description: Server error
 */
dileveryRouter.delete('/deletDeliveriys/:id', dileveryControler.deletDeliverys);

module.exports = dileveryRouter
