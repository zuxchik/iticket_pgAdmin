const express = require('express');
const customerRouter = express.Router();
const customerControler = require('../Controllers/customer.controller');

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/createCustomer:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string            
 *               phone:
 *                 type: string            
 *               hashed_password:
 *                 type: string            
 *               email:
 *                 type: string            
 *               birth_date:
 *                type: string
 *                format: date       
 *               gender_id:
 *                 type: number            
 *               lang_id:
 *                 type: number   
 *     responses:
 *       201:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
customerRouter.post('/createCustomer', customerControler.createCustomer);

/**
 * @swagger
 * /api/getCustomers:
 *   get:
 *     tags: [Customer]
 *     summary: Get all customers
 *     responses:
 *       200:
 *         description: List of customers
 *       500:
 *         description: Server error
 */
customerRouter.get('/getCustomers', customerControler.getCustomers);

/**
 * @swagger
 * /api/geCustomersBiId/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customerRouter.get('/geCustomersBiId/:id', customerControler.geCustomersBiId);

/**
 * @swagger
 * /api/updateCustomers/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string            
 *               phone:
 *                 type: string            
 *               hashed_password:
 *                 type: string            
 *               email:
 *                 type: string            
 *               birth_date:
 *                type: string
 *                format: date       
 *               gender_id:
 *                 type: number            
 *               lang_id:
 *                 type: number     
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customerRouter.put('/updateCustomers/:id', customerControler.updataCustomers);

/**
 * @swagger
 * /api/deleteCustomers/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       204:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customerRouter.delete('/deleteCustomers/:id', customerControler.deletCustomers);

module.exports = customerRouter;
