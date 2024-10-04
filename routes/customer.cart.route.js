const express = require('express');
const customerCartRouter = express.Router();
const customerCartControler = require('../Controllers/customer.card.controller');

/**
 * @swagger
 * tags:
 *   name: CustomerCart
 *   description: CustomerCart management
 */

/**
 * @swagger
 * /api/createCustomerCart:
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
 *              customer_id:
 *               type: number
 *              name:
 *               type: string
 *              phone:
 *               type: string
 *              number:
 *               type: string
 *              year:
 *                type: string
 *                format: date  
 *              month:
 *                type: string
 *                format: date  
 *              is_active:
 *               type: boolean
 *              is_main:
 *               type: boolean
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
 * /api/getCustomerCarts:
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
 * /api/geCustomerCartsBiId/{id}:
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
 * /api/updateCustomerCarts/{id}:
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
 *              customer_id:
 *               type: number
 *              name:
 *               type: string
 *              phone:
 *               type: string
 *              number:
 *               type: string
 *              year:
 *                type: string
 *                format: date  
 *              month:
 *                type: string
 *                format: date  
 *              is_active:
 *               type: boolean
 *              is_main:
 *               type: boolean    
 *     responses:
 *       200:
 *         description: CustomerCart updated
 *       404:
 *         description: CustomerCart not found
 *       500:
 *         description: Server error
 */
customerCartRouter.put('/updateCustomerCarts/:id', customerCartControler.updataCustomerCarts);

/**
 * @swagger
 * /api/deleteCustomerCarts/{id}:
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
customerCartRouter.delete('/deleteCustomerCarts/:id', customerCartControler.deletCustomerCarts);

module.exports = customerCartRouter;
