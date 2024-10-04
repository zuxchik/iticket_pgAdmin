const express = require('express');
const cartRouter   = express.Router();
const customerControler = require('../controllers/card.controller');

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: cart management
 */

/**
 * @swagger
 * /api/createCart:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              ticket_id:
 *                  type: number
 *              customer_id:
 *                  type: number
 *              createdAt:
 *                  type: string
 *              fineshedAt:
 *                  type: string
 *              status_id:
 *                  type: number
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
cartRouter.post('/createCart', customerControler.createCart);

/**
 * @swagger
 * /api/getCarts:
 *   get:
 *     tags: [Cart]
 *     summary: Get all carts
 *     responses:
 *       200:
 *         description: List of carts
 *       500:
 *         description: Server error
 */
cartRouter.get('/getCarts', customerControler.getCarts);

/**
 * @swagger
 * /api/getCartById/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRouter.get('/getCartById/:id', customerControler.getCartById);

/**
 * @swagger
 * /api/updateCarts/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              ticket_id:
 *                  type: number
 *              customer_id:
 *                  type: number
 *              createdAt:
 *                  type: string
 *              fineshedAt:
 *                  type: string
 *              status_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: Cart updated
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRouter.put('/updateCarts/:id', customerControler.updateCarts);

/**
 * @swagger
 * /api/deleteCarts/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       204:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRouter.delete('/deleteCarts/:id', customerControler.deleteCarts);

module.exports = cartRouter
