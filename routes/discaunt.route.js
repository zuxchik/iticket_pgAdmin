const express = require('express');
const discauntRouter = express.Router();
const discauntControler = require('../controllers/discount.controller');

/**
 * @swagger
 * tags:
 *   name: Discaunt
 *   description: discaunt management
 */

/**
 * @swagger
 * /api/createDiscount:
 *   post:
 *     tags: [Discaunt]
 *     summary: Create a new discaunt
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
 *         description: Discaunt created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
discauntRouter.post('/createDiscount', discauntControler.createDiscount);

/**
 * @swagger
 * /api/getDiscounts:
 *   get:
 *     tags: [Discaunt]
 *     summary: Get all discaunts
 *     responses:
 *       200:
 *         description: List of discaunts
 *       500:
 *         description: Server error
 */
discauntRouter.get('/getDiscounts', discauntControler.getDiscounts);

/**
 * @swagger
 * /api/geDiscountsBiId/{id}:
 *   get:
 *     tags: [Discaunt]
 *     summary: Get discaunt by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discaunt ID
 *     responses:
 *       200:
 *         description: Discaunt details
 *       404:
 *         description: Discaunt not found
 *       500:
 *         description: Server error
 */
discauntRouter.get('/geDiscountsBiId/:id', discauntControler.geDiscountsBiId);

/**
 * @swagger
 * /api/updataDiscounts/{id}:
 *   put:
 *     tags: [Discaunt]
 *     summary: Update discaunt by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discaunt ID
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
 *         description: Discaunt updated
 *       404:
 *         description: Discaunt not found
 *       500:
 *         description: Server error
 */
discauntRouter.put('/updataDiscounts/:id', discauntControler.updataDiscounts);

/**
 * @swagger
 * /api/deletDiscounts/{id}:
 *   delete:
 *     tags: [Discaunt]
 *     summary: Delete discaunt by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discaunt ID
 *     responses:
 *       204:
 *         description: Discaunt deleted
 *       404:
 *         description: Discaunt not found
 *       500:
 *         description: Server error
 */
discauntRouter.delete('/deletDiscounts/:id', discauntControler.deletDiscounts);

module.exports = discauntRouter
