const express = require('express');
const bookingRouter = express.Router();
const BookingController = require('../Controllers/bookeng.controller');

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: booking management
 */

/**
 * @swagger
 * /api/createBooking:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              cart_id:
 *                  type: number
 *              finished:
 *                  type: string
 *              createdAt:
 *                  type: number
 *              payment_method_id:
 *                  type: number
 *              discount_coupon_id:
 *                 type: number
 *              delivery_method_id:
 *                  type: number
 *              status_id:
 *                  type: number
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
bookingRouter.post('/createBooking', BookingController.createBooking);

/**
 * @swagger
 * /api/getBooking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all booking
 *     responses:
 *       200:
 *         description: List of bookings
 *       500:
 *         description: Server error
 */
bookingRouter.get('/getBooking', BookingController.getBooking);

/**
 * @swagger
 * /api/getBookingBiId/{id}:
 *   get:
 *     tags: [Booking]
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
bookingRouter.get('/getBookingBiId/:id', BookingController.getBookingBiId);

/**
 * @swagger
 * /api/updataBooking/{id}:
 *   put:
 *     tags: [Booking]
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
 *                  type: string
 *              finished:
 *                  type: string
 *              createdAt:
 *                  type: number
 *              payment_method_id:
 *                  type: string
 *              discount_coupon_id:
 *                 type: string
 *              delivery_method_id:
 *                  type: number
 *              status_id:
 *                  type: string
 *     responses:
 *       200:
 *         description: booking updated
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
bookingRouter.put('/updataBooking/:id', BookingController.updataBooking);

/**
 * @swagger
 * /api/deletBooking/{id}:
 *   delete:
 *     tags: [Booking]
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
bookingRouter.delete('/deletBooking/:id', BookingController.deletBooking);

module.exports = bookingRouter
