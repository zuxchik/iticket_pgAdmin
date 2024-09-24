const express = require('express');
const seatRouter = express.Router();
const seatControler = require('../Controllers/seat.controller');

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: seat management
 */

/**
 * @swagger
 * /seatRouter/createSeat:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new seat
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
 *       201:
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
seatRouter.post('/createSeat', seatControler.createSeat);

/**
 * @swagger
 * /seatRouter/getSeats:
 *   get:
 *     tags: [Seat]
 *     summary: Get all seats
 *     responses:
 *       200:
 *         description: List of seats
 *       500:
 *         description: Server error
 */
seatRouter.get('/getSeats', seatControler.getSeats);

/**
 * @swagger
 * /seatRouter/geSeatsBiId/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
seatRouter.get('/geSeatsBiId/:id', seatControler.geSeatsBiId);

/**
 * @swagger
 * /seatRouter/updataSeats/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
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
 *         description: Seat updated
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
seatRouter.put('/updataSeats/:id', seatControler.updataSeats);

/**
 * @swagger
 * /seatRouter/deletSeats/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       204:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
seatRouter.delete('/deletSeats/:id', seatControler.deletSeats);

module.exports = seatRouter
