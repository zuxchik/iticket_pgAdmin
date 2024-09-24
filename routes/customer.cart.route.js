const express = require('express');
const customerCartRouter = express.Router();
const customerCartControler = require('../Controllers/customer.card.controller');

/**
 * @swagger
 * tags:
 *   name: CustomerCart
 *   description: customerCart management
 */

/**
 * @swagger
 * /customerCartRouter/createCustomerCart:
 *   post:
 *     tags: [CustomerCart]
 *     summary: Create a new customerCart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             customer_id:
 *              type: number
 *             name:
 *              type: string
 *             phone:
 *              type: string
 *             number:
 *              type: string
 *             year:
 *              type:date
 *             month:
 *              type: date
 *             is_active:
 *              type: boolen             
 *             is_main:
 *              type: boolen
 *     responses:
 *       201:
 *         description: CustomerCart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
customerCartRouter.post('/createCustomerCart', customerCartControler.createCustomerCart);

/**
 * @swagger
 * /customerCartRouter/getCustomerCarts:
 *   get:
 *     tags: [CustomerCart]
 *     summary: Get all customerCarts
 *     responses:
 *       200:
 *         description: List of customerCarts
 *       500:
 *         description: Server error
 */
customerCartRouter.get('/getCustomerCarts', customerCartControler.getCustomerCarts);

/**
 * @swagger
 * /customerCartRouter/geCustomerCartsBiId/{id}:
 *   get:
 *     tags: [CustomerCart]
 *     summary: Get customerCart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCart ID
 *     responses:
 *       200:
 *         description: CustomerCart details
 *       404:
 *         description: CustomerCart not found
 *       500:
 *         description: Server error
 */
customerCartRouter.get('/geCustomerCartsBiId/:id', customerCartControler.geCustomerCartsBiId);

/**
 * @swagger
 * /customerCartRouter/updataCustomerCarts/{id}:
 *   put:
 *     tags: [CustomerCart]
 *     summary: Update customerCart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             customer_id:
 *              type: number
 *             name:
 *              type: string
 *             phone:
 *              type: string
 *             number:
 *              type: string
 *             year:
 *              type:date
 *             month:
 *              type: date
 *             is_active:
 *              type: boolen             
 *             is_main:
 *              type: boolen
 *     responses:
 *       200:
 *         description: CustomerCart updated
 *       404:
 *         description: CustomerCart not found
 *       500:
 *         description: Server error
 */
customerCartRouter.put('/updataCustomerCarts/:id', customerCartControler.updataCustomerCarts);

/**
 * @swagger
 * /customerCartRouter/deletCustomerCarts/{id}:
 *   delete:
 *     tags: [CustomerCart]
 *     summary: Delete customerCart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCart ID
 *     responses:
 *       204:
 *         description: CustomerCart deleted
 *       404:
 *         description: CustomerCart not found
 *       500:
 *         description: Server error
 */
customerCartRouter.delete('/deletCustomerCarts/:id', customerCartControler.deletCustomerCarts);

module.exports = customerCartRouter
