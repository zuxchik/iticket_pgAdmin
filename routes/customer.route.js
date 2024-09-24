const express = require('express');
const customerRouter = express.Router();
const customerControler = require('../controllers/customer.controller');

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /customerRouter/createCustomer:
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
 *                 type: string            
 *               gender_id:
 *                 type: string            
 *               lang_id:
 *                 type: string   
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
 * /customerRouter/getCustomers:
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
 * /customerRouter/getCustomersById/{id}:
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
customerRouter.get('/getCustomersById/:id', customerControler.getCustomersById);

/**
 * @swagger
 * /customerRouter/updateCustomers/{id}:
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
 *                 type: string            
 *               gender_id:
 *                 type: string            
 *               lang_id:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customerRouter.put('/updateCustomers/:id', customerControler.updateCustomers);

/**
 * @swagger
 * /customerRouter/deleteCustomers/{id}:
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
customerRouter.delete('/deleteCustomers/:id', customerControler.deleteCustomers);

module.exports = customerRouter;
