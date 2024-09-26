const express = require('express');
const eventTypeRouter = express.Router();
const eventTypeControler = require('../Controllers/event.type.controller');

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: eventType management
 */

/**
 * @swagger
 * /api/createEventType:
 *   post:
 *     tags: [EventType]
 *     summary: Create a new eventType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *     responses:
 *       201:
 *         description: EventType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
eventTypeRouter.post('/createEventType', eventTypeControler.createEventType);

/**
 * @swagger
 * /api/getEventTypes:
 *   get:
 *     tags: [EventType]
 *     summary: Get all eventTypes
 *     responses:
 *       200:
 *         description: List of eventTypes
 *       500:
 *         description: Server error
 */
eventTypeRouter.get('/getEventTypes', eventTypeControler.getEventTypes);

/**
 * @swagger
 * /api/geEventTypesBiId/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: Get eventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: EventType ID
 *     responses:
 *       200:
 *         description: EventType details
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
eventTypeRouter.get('/geEventTypesBiId/:id', eventTypeControler.geEventTypesBiId);

/**
 * @swagger
 * /api/updataEventTypes/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Update eventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: EventType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *     responses:
 *       200:
 *         description: EventType updated
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
eventTypeRouter.put('/updataEventTypes/:id', eventTypeControler.updataEventTypes);

/**
 * @swagger
 * /api/deletEventTypes/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete eventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: EventType ID
 *     responses:
 *       204:
 *         description: EventType deleted
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
eventTypeRouter.delete('/deletEventTypes/:id', eventTypeControler.deletEventTypes);

module.exports = eventTypeRouter
