const express = require('express');
const TicketRouter = express.Router();
const ticketController = require('../controllers/ticket.controller');

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: ticket management
 */

/**
 * @swagger
 * /TicketRouter/createTicket:
 *   post:
 *     tags: [ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              event_id:
 *                  string
 *              seat_id:
 *                  string
 *              price:
 *                  string
 *              service_fee:
 *                  string
 *              status_id:
 *                  string
 *              ticket_type:
 *                  string
 *     responses:
 *       201:
 *         description: ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
TicketRouter.post('/createTicket', ticketController.createTicket);

/**
 * @swagger
 * /TicketRouter/getTicket:
 *   get:
 *     tags: [booking]
 *     summary: Get all tickets
 *     responses:
 *       200:
 *         description: List of tickets
 *       500:
 *         description: Server error
 */
TicketRouter.get('/getTicket', ticketController.getTicket);

/**
 * @swagger
 * /TicketRouter/getTicketBiId/{id}:
 *   get:
 *     tags: [booking]
 *     summary: Get ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ticket ID
 *     responses:
 *       200:
 *         description: ticket details
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
TicketRouter.get('/getTicketBiId/:id', ticketController.getTicketBiId);

/**
 * @swagger
 * /TicketRouter/updataTicket/{id}:
 *   put:
 *     tags: [ticket]
 *     summary: Update ticket by ID
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
 *              event_id:
 *                  string
 *              seat_id:
 *                  string
 *              price:
 *                  string
 *              service_fee:
 *                  string
 *              status_id:
 *                  string
 *              ticket_type:
 *                  string
 *     responses:
 *       200:
 *         description: ticket updated
 *       404:
 *         description: ticket not found
 *       500:
 *         description: Server error
 */
TicketRouter.put('/updataTicket/:id', ticketController.updataTicket);

/**
 * @swagger
 * /TicketRouter/deletTicket/{id}:
 *   delete:
 *     tags: [ticket]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ticket ID
 *     responses:
 *       204:
 *         description: ticket deleted
 *       404:
 *         description: ticket not found
 *       500:
 *         description: Server error
 */
TicketRouter.delete('/deletTicket/:id', ticketController.deletTicket);

module.exports = TicketRouter
