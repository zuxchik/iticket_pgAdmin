const express = require('express');
const customerAddressRoute   = express.Router();
const customerControler = require('../controllers/customer.address.controller');

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: customerAddress management
 */

/**
 * @swagger
 * /api/createCustomerAddress:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create a new customerAddress
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              customer_id:
 *                  type: number
 *              name:
 *                  type: string
 *              country_id:
 *                  type: number
 *              region_id:
 *                  type: number
 *              distict_id:
 *                  type: number
 *              street:
 *                  type: string
 *              house:
 *                  type: string
 *              flat_id:
 *                  type: number
 *              location:
 *                  type: string
 *              post_index:
 *                  type: string
 *              info:
 *                  type: string
 *     responses:
 *       201:
 *         description: CustomerAddress created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
customerAddressRoute.post('/createCustomerAddress', customerControler.createCustomerAddress);

/**
 * @swagger
 * /api/getCustomerAddresss:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customerAddresss
 *     responses:
 *       200:
 *         description: List of customerAddresss
 *       500:
 *         description: Server error
 */
customerAddressRoute.get('/getCustomerAddresss', customerControler.getCustomerAddresss);

/**
 * @swagger
 * /api/geCustomerAddresssBiId/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get customerAddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     responses:
 *       200:
 *         description: CustomerAddress details
 *       404:
 *         description: CustomerAddress not found
 *       500:
 *         description: Server error
 */
customerAddressRoute.get('/geCustomerAddresssBiId/:id', customerControler.geCustomerAddresssBiId);

/**
 * @swagger
 * /api/updataCustomerAddresss/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update customerAddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              customer_id:
 *                  type: number
 *              name:
 *                  type: string
 *              country_id:
 *                  type: number
 *              region_id:
 *                  type: number
 *              distict_id:
 *                  type: number
 *              street:
 *                  type: string
 *              house:
 *                  type: string
 *              flat_id:
 *                  type: number
 *              location:
 *                  type: string
 *              post_index:
 *                  type: string
 *              info:
 *                  type: string
 *     responses:
 *       200:
 *         description: CustomerAddress updated
 *       404:
 *         description: CustomerAddress not found
 *       500:
 *         description: Server error
 */
customerAddressRoute.put('/updataCustomerAddresss/:id', customerControler.updataCustomerAddresss);

/**
 * @swagger
 * /api/deletCustomerAddresss/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete customerAddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     responses:
 *       204:
 *         description: CustomerAddress deleted
 *       404:
 *         description: CustomerAddress not found
 *       500:
 *         description: Server error
 */
customerAddressRoute.delete('/deletCustomerAddresss/:id', customerControler.deletCustomerAddresss);

module.exports = customerAddressRoute
