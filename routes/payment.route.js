const express = require('express');
const paymentRouter = express.Router();
const PaymentController = require('../controllers/payment.controller');

/**
 * @swagger
 * tags:
 *   name: payment
 *   description: payment management
 */

/**
 * @swagger
 * /api/createPayment:
 *   post:
 *     tags: [payment]
 *     summary: Create a new payment
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
 *         description: payment created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
paymentRouter.post('/createPayment', PaymentController.createPayment);

/**
 * @swagger
 * /api/getPayment:
 *   get:
 *     tags: [payment]
 *     summary: Get all payments
 *     responses:
 *       200:
 *         description: List of payments
 *       500:
 *         description: Server error
 */
paymentRouter.get('/getPayment', PaymentController.getPayment);

/**
 * @swagger
 * /api/getPaymentBiId/{id}:
 *   get:
 *     tags: [payment]
 *     summary: Get payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: payment ID
 *     responses:
 *       200:
 *         description: payment details
 *       404:
 *         description: payment not found
 *       500:
 *         description: Server error
 */
paymentRouter.get('/getPaymentBiId/:id', PaymentController.getPaymentBiId);

/**
 * @swagger
 * /api/updataPayment/{id}:
 *   put:
 *     tags: [payment]
 *     summary: Update payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: payment ID
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
 *         description: payment updated
 *       404:
 *         description: payment not found
 *       500:
 *         description: Server error
 */
paymentRouter.put('/updataPayment/:id', PaymentController.updataPayment);

/**
 * @swagger
 * /api/deletPayment/{id}:
 *   delete:
 *     tags: [payment]
 *     summary: Delete payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: payment ID
 *     responses:
 *       204:
 *         description: payment deleted
 *       404:
 *         description: payment not found
 *       500:
 *         description: Server error
 */
paymentRouter.delete('/deletPayment/:id', PaymentController.deletPayment);

module.exports = paymentRouter
