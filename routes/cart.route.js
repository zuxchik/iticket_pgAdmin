const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/card.controller');

/**
 * @swagger
 * tags:
 *   name: cart
 *   description: cart management
 */

/**
 * @swagger
 * /cartRouter/createGendeer:
 *   post:
 *     tags: [cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              etaj:
 *                  string
 *              condition:
 *                  string
 *     responses:
 *       201:
 *         description: cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
cartRouter.post('/createGendeer', cartController.createGendeer);

/**
 * @swagger
 * /cartRouter/getGendeer:
 *   get:
 *     tags: [cart]
 *     summary: Get all carts
 *     responses:
 *       200:
 *         description: List of carts
 *       500:
 *         description: Server error
 */
cartRouter.get('/getGendeer', cartController.getGendeer);

/**
 * @swagger
 * /cartRouter/getGendeerBiId/{id}:
 *   get:
 *     tags: [cart]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: cart ID
 *     responses:
 *       200:
 *         description: cart details
 *       404:
 *         description: cart not found
 *       500:
 *         description: Server error
 */
cartRouter.get('/getGendeerBiId/:id', cartController.getGendeerBiId);

/**
 * @swagger
 * /cartRouter/updataGendeer/{id}:
 *   put:
 *     tags: [cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              etaj:
 *                  string
 *              condition:
 *                  string
 *     responses:
 *       200:
 *         description: cart updated
 *       404:
 *         description: cart not found
 *       500:
 *         description: Server error
 */
cartRouter.put('/updataGendeer/:id', cartController.updataGendeer);

/**
 * @swagger
 * /cartRouter/deletGendeer/{id}:
 *   delete:
 *     tags: [cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: cart ID
 *     responses:
 *       204:
 *         description: cart deleted
 *       404:
 *         description: cart not found
 *       500:
 *         description: Server error
 */
cartRouter.delete('/deletGendeer/:id', cartController.deletGendeer);

module.exports = cartRouter
