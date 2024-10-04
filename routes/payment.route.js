const express = require('express');
const paymentRouter = express.Router();
const paymentControler = require('../controllers/payment.controller');

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: payment management
 */

/**
 * @swagger
 * /api/createPayment:
 *   post:
 *     tags: [Payment]
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: number
 *     responses:
 *       201:
 *         description: Payment created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
paymentRouter.post('/createPayment', paymentControler.createPayment);

/**
 * @swagger
 * /api/getPayment:
 *   get:
 *     tags: [Payment]
 *     summary: Get all payments
 *     responses:
 *       200:
 *         description: List of payments
 *       500:
 *         description: Server error
 */
paymentRouter.get('/getPayment', paymentControler.getPayment);

/**
 * @swagger
 * /api/getPaymentBiId/{id}:
 *   get:
 *     tags: [Payment]
 *     summary: Get payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Payment details
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
paymentRouter.get('/getPaymentBiId/:id', paymentControler.getPaymentBiId);

/**
 * @swagger
 * /api/updataPayment/{id}:
 *   put:
 *     tags: [Payment]
 *     summary: Update payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: number
 *     responses:
 *       200:
 *         description: Payment updated
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
paymentRouter.put('/updataPayment/:id', paymentControler.updataPayment);

/**
 * @swagger
 * /api/deletPayment/{id}:
 *   delete:
 *     tags: [Payment]
 *     summary: Delete payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       204:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
paymentRouter.delete('/deletPayment/:id', paymentControler.deletPayment);

module.exports = paymentRouter
