const express = require('express');
const eventRouter = express.Router();
const eventControler = require('../Controllers/event.controller');

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: event management
 */

/**
 * @swagger
 * /eventRouter/createEvent:
 *   post:
 *     tags: [Event]
 *     summary: Create a new event
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
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
eventRouter.post('/createEvent', eventControler.createEvent);

/**
 * @swagger
 * /eventRouter/getEvents:
 *   get:
 *     tags: [Event]
 *     summary: Get all events
 *     responses:
 *       200:
 *         description: List of events
 *       500:
 *         description: Server error
 */
eventRouter.get('/getEvents', eventControler.getEvents);

/**
 * @swagger
 * /eventRouter/geEventsBiId/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
eventRouter.get('/geEventsBiId/:id', eventControler.geEventsBiId);

/**
 * @swagger
 * /eventRouter/updataEvents/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
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
 *         description: Event updated
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
eventRouter.put('/updataEvents/:id', eventControler.updataEvents);

/**
 * @swagger
 * /eventRouter/deletEvents/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       204:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
eventRouter.delete('/deletEvents/:id', eventControler.deletEvents);

module.exports = eventRouter
