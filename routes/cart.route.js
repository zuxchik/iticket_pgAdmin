const express = require('express');
const cartRoute   = express.Router();
const customerControler = require('../controllers/card.controller');

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: cart management
 */

/**
 * @swagger
 * /cartRoute/createCart:
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
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
cartRoute.post('/createCart', customerControler.createCart);

/**
 * @swagger
 * /cartRoute/getCarts:
 *   get:
 *     tags: [Cart]
 *     summary: Get all carts
 *     responses:
 *       200:
 *         description: List of carts
 *       500:
 *         description: Server error
 */
cartRoute.get('/getCarts', customerControler.getCarts);

/**
 * @swagger
 * /cartRoute/getCartById/{id}:
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
cartRoute.get('/getCartById/:id', customerControler.getCartById);

/**
 * @swagger
 * /cartRoute/updateCarts/{id}:
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
 *         description: Cart updated
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRoute.put('/updateCarts/:id', customerControler.updateCarts);

/**
 * @swagger
 * /cartRoute/deleteCarts/{id}:
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
cartRoute.delete('/deleteCarts/:id', customerControler.deleteCarts);

module.exports = cartRoute
