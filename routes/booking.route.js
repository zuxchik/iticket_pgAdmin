const express = require('express');
const bookingRouter = express.Router();
const bookingController = require('../controllers/bookeng.controller');

/**
 * @swagger
 * tags:
 *   name: booking
 *   description: Booking management
 */

/**
 * @swagger
 * /api/createBooking:
 *   post:
 *     tags: [booking]
 *     summary: Create a new booking
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
 *              discount_coupon_id:
 *                  string
 *              status_id:
 *                  string
 *     responses:
 *       201:
 *         description: booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
bookingRouter.post('/createBooking', bookingController.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     tags: [booking]
 *     summary: Get all bookings
 *     responses:
 *       200:
 *         description: List of bookings
 *       500:
 *         description: Server error
 */
bookingRouter.get('/getBooking', bookingController.getBooking);

/**
 * @swagger
 * /api/getBookingBiId/{id}:
 *   get:
 *     tags: [booking]
 *     summary: Get booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: booking ID
 *     responses:
 *       200:
 *         description: booking details
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
bookingRouter.get('/getBookingBiId/:id', bookingController.getBookingBiId);

/**
 * @swagger
 * /api/updataBooking/{id}:
 *   put:
 *     tags: [booking]
 *     summary: Update booking by ID
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
 *              discount_coupon_id:
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
 */
bookingRouter.put('/updataBooking/:id', bookingController.updataBooking);

/**
 * @swagger
 * /api/deletBooking/{id}:
 *   delete:
 *     tags: [booking]
 *     summary: Delete booking by ID
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
bookingRouter.delete('/deletBooking/:id', bookingController.deletBooking);

module.exports = bookingRouter
