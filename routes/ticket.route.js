const express = require('express');
const TicketRoute = express.Router();
const ticketController = require('../controllers/ticket.controller');

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: ticket management
 */

/**
 * @swagger
 * /TicketRoute/createTicket:
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
 *              event_id:
 *                  string
 *              seat_id:
 *                  string
 *              price:
 *                  string
 *              service_fee:
 *                  string
 *              status_id:F
 *                  string
 *              ticket_type:
 *                  string
 *     responses:
 *       201:
 *         description: bookeng created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
TicketRoute.post('/createTicket', ticketController.createTicket);

/**
 * @swagger
 * /TicketRoute/getTicket:
 *   get:
 *     tags: [booking]
 *     summary: Get all bookengs
 *     responses:
 *       200:
 *         description: List of bookengs
 *       500:
 *         description: Server error
 */
TicketRoute.get('/getTicket', ticketController.getTicket);

/**
 * @swagger
 * /TicketRoute/getTicketBiId/{id}:
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
TicketRoute.get('/getTicketBiId/:id', ticketController.getTicketBiId);

/**
 * @swagger
 * /TicketRoute/updataTicket/{id}:
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
 *              event_id:
 *                  string
 *              seat_id:
 *                  string
 *              price:
 *                  string
 *              service_fee:
 *                  string
 *              status_id:F
 *                  string
 *              ticket_type:
 *                  string
 *     responses:
 *       200:
 *         description: booking updated
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */aA
TicketRoute.put('/updataTicket/:id', ticketController.updataTicket);

/**
 * @swagger
 * /TicketRoute/deletTicket/{id}:
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
TicketRoute.delete('/deletTicket/:id', ticketController.deletTicket);

module.exports = TicketRoute
