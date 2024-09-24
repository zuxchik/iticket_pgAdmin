const express = require('express');
const seatTypeRouter = express.Router();
const seatTypeControler = require('../Controllers/seat.type.controller');

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: seatType management
 */

/**
 * @swagger
 * /seatTypeRouter/createSeatType:
 *   post:
 *     tags: [SeatType]
 *     summary: Create a new seatType
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
 *         description: SeatType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
seatTypeRouter.post('/createSeatType', seatTypeControler.createSeatType);

/**
 * @swagger
 * /seatTypeRouter/getSeatTypes:
 *   get:
 *     tags: [SeatType]
 *     summary: Get all seatTypes
 *     responses:
 *       200:
 *         description: List of seatTypes
 *       500:
 *         description: Server error
 */
seatTypeRouter.get('/getSeatTypes', seatTypeControler.getSeatTypes);

/**
 * @swagger
 * /seatTypeRouter/geSeatTypesBiId/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: Get seatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: SeatType details
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
seatTypeRouter.get('/geSeatTypesBiId/:id', seatTypeControler.geSeatTypesBiId);

/**
 * @swagger
 * /seatTypeRouter/updataSeatTypes/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: Update seatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
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
 *         description: SeatType updated
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
seatTypeRouter.put('/updataSeatTypes/:id', seatTypeControler.updataSeatTypes);

/**
 * @swagger
 * /seatTypeRouter/deletSeatTypes/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete seatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
 *     responses:
 *       204:
 *         description: SeatType deleted
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
seatTypeRouter.delete('/deletSeatTypes/:id', seatTypeControler.deletSeatTypes);

module.exports = seatTypeRouter
