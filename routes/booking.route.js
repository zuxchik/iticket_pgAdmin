const express = require('express');
const bookengRoute = express.Router();
const bookengController = require('../controllers/bookeng.controller');

/**
 * @swagger
 * tags:
 *   name: booking
 *   description: bookeng management
 */

/**
 * @swagger
 * /bookengRoute/createBooking:
 *   post:
 *     tags: [booking]
 *     summary: Create a new bookeng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              cart_id:
 *                  string
 *              createdAt:
 *                  string
 *              hashed_password:
 *                  string
 *              payment_method_id:
 *                  string
 *              discount_coupon_id
 *                  string
 *              status_id:
 *                  string
 *     responses:
 *       201:
 *         description: bookeng created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
bookengRoute.post('/createBooking', bookengController.createBooking);

/**
 * @swagger
 * /bookengRoute/booking:
 *   get:
 *     tags: [booking]
 *     summary: Get all bookengs
 *     responses:
 *       200:
 *         description: List of bookengs
 *       500:
 *         description: Server error
 */
bookengRoute.get('/getBooking', bookengController.getBooking);

/**
 * @swagger
 * /bookengRoute/getBookingBiId/{id}:
 *   get:
 *     tags: [booking]
 *     summary: Get bookeng by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: bookeng ID
 *     responses:
 *       200:
 *         description: bookeng details
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
bookengRoute.get('/getBookingBiId/:id', bookengController.getBookingBiId);

/**
 * @swagger
 * /bookengRoute/updataBooking/{id}:
 *   put:
 *     tags: [booking]
 *     summary: Update boooking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              cart_id:
 *                  string
 *              createdAt:
 *                  string
 *              hashed_password:
 *                  string
 *              payment_method_id:
 *                  string
 *              discount_coupon_id
 *                  string
 *              status_id:
 *                  string
 *     responses:
 *       200:
 *         description: booking updated
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */aA
bookengRoute.put('/updataBooking/:id', bookengController.updataBooking);

/**
 * @swagger
 * /bookengRoute/deletBooking/{id}:
 *   delete:
 *     tags: [booking]
 *     summary: Delete boooking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: booking ID
 *     responses:
 *       204:
 *         description: booking deleted
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
bookengRoute.delete('/deletBooking/:id', bookengController.deletBooking);

module.exports = bookengRoute
