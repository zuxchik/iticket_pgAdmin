const express = require('express');
const ticketRouter = express.Router();
const ticketControler = require('../Controllers/ticket.controller');

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: ticket management
 */

/**
 * @swagger
 * /api/createTicket:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                  type: number
 *               seat_id:
 *                  type: number
 *               price:
 *                  type: string
 *               service_fee:
 *                  type: string
 *               status_id:
 *                  type: number
 *               ticket_type_id:
 *                  type: number
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
ticketRouter.post('/createTicket', ticketControler.createTicket);

/**
 * @swagger
 * /api/getTicket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all tickets
 *     responses:
 *       200:
 *         description: List of tickets
 *       500:
 *         description: Server error
 */
ticketRouter.get('/getTicket', ticketControler.getTicket);

/**
 * @swagger
 * /api/getTicketBiId/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
ticketRouter.get('/getTicketBiId/:id', ticketControler.getTicketBiId);

/**
 * @swagger
 * /api/updataTicket/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                  type: number
 *               seat_id:
 *                  type: number
 *               price:
 *                  type: string
 *               service_fee:
 *                  type: string
 *               status_id:
 *                  type: number
 *               ticket_type_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: Ticket updated
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
ticketRouter.put('/updataTicket/:id', ticketControler.updataTicket);

/**
 * @swagger
 * /api/deletTicket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
ticketRouter.delete('/deletTicket/:id', ticketControler.deletTicket);

module.exports = ticketRouter
