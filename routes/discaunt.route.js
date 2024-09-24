const express = require('express');
const deliveriyRouter = express.Router();
const deliveriyControler = require('../Controllers/discount.controller');

/**
 * @swagger
 * tags:
 *   name: Deliveriy
 *   description: deliveriy management
 */

/**
 * @swagger
 * /deliveriyRouter/createDeliveriy:
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
 *               discount: 
 *                  type: string
 *               finish_date: 
 *                  type: date
 *     responses:
 *       201:
 *         description: Deliveriy created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
deliveriyRouter.post('/createDeliveriy', deliveriyControler.createDeliveriy);

/**
 * @swagger
 * /deliveriyRouter/getDeliveriys:
 *   get:
 *     tags: [Deliveriy]
 *     summary: Get all deliveriys
 *     responses:
 *       200:
 *         description: List of deliveriys
 *       500:
 *         description: Server error
 */
deliveriyRouter.get('/getDeliveriys', deliveriyControler.getDeliveriys);

/**
 * @swagger
 * /deliveriyRouter/geDeliveriysBiId/{id}:
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
deliveriyRouter.get('/geDeliveriysBiId/:id', deliveriyControler.geDeliveriysBiId);

/**
 * @swagger
 * /deliveriyRouter/updataDeliveriys/{id}:
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
 *               login: 
 *                  type: string
 *               hashed_password: 
 *                  type: string
 *               is_active: 
 *                  type: boolean
 *               is_creator: 
 *                  type: boolean
 *     responses:
 *       200:
 *         description: Deliveriy updated
 *       404:
 *         description: Deliveriy not found
 *       500:
 *         description: Server error
 */
deliveriyRouter.put('/updataDeliveriys/:id', deliveriyControler.updataDeliveriys);

/**
 * @swagger
 * /deliveriyRouter/deletDeliveriys/{id}:
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
deliveriyRouter.delete('/deletDeliveriys/:id', deliveriyControler.deletDeliveriys);

module.exports = deliveriyRouter
