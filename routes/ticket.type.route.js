const express = require('express');
const ticketTypeRouter = express.Router();
const ticketTypeControler = require('../Controllers/ticket.type.controller');

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: ticketType management
 */

/**
 * @swagger
 * /api/createTicketType:
 *   post:
 *     tags: [TicketType]
 *     summary: Create a new ticketType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color: 
 *                  type: string
 *               name: 
 *                  type: string
 *               ticket: 
 *                  type: string
 *     responses:
 *       201:
 *         description: TicketType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
ticketTypeRouter.post('/createTicketType', ticketTypeControler.createTicketType);

/**
 * @swagger
 * /api/getTicketTypes:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all ticketTypes
 *     responses:
 *       200:
 *         description: List of ticketTypes
 *       500:
 *         description: Server error
 */
ticketTypeRouter.get('/getTicketTypes', ticketTypeControler.getTicketTypes);

/**
 * @swagger
 * /api/geTicketTypesBiId/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get ticketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     responses:
 *       200:
 *         description: TicketType details
 *       404:
 *         description: TicketType not found
 *       500:
 *         description: Server error
 */
ticketTypeRouter.get('/geTicketTypesBiId/:id', ticketTypeControler.geTicketTypesBiId);

/**
 * @swagger
 * /api/updataTicketTypes/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update ticketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color: 
 *                  type: string
 *               name: 
 *                  type: string
 *               ticket: 
 *                  type: string
 *     responses:
 *       200:
 *         description: TicketType updated
 *       404:
 *         description: TicketType not found
 *       500:
 *         description: Server error
 */
ticketTypeRouter.put('/updataTicketTypes/:id', ticketTypeControler.updataTicketTypes);

/**
 * @swagger
 * /api/deletTicketTypes/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete ticketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     responses:
 *       204:
 *         description: TicketType deleted
 *       404:
 *         description: TicketType not found
 *       500:
 *         description: Server error
 */
ticketTypeRouter.delete('/deletTicketTypes/:id', ticketTypeControler.deletTicketTypes);

module.exports = ticketTypeRouter
