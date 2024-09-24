const express = require('express');
const VenueTypeRouter = express.Router();
const venueTypeController = require('../controllers/venue.type.controller');

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: venueType management
 */

/**
 * @swagger
 * /VenueTypeRouter/createVenueType:
 *   post:
 *     tags: [VenueType]
 *     summary: Create a new venueType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  string
 *     responses:
 *       201:
 *         description: venueType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
VenueTypeRouter.post('/createVenueType', venueTypeController.createVenueType);

/**
 * @swagger
 * /VenueTypeRouter/getVenueType:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all venueTypes
 *     responses:
 *       200:
 *         description: List of venueTypes
 *       500:
 *         description: Server error
 */
VenueTypeRouter.get('/getVenueType', venueTypeController.getVenueType);

/**
 * @swagger
 * /VenueTypeRouter/getVenueTypeBiId/{id}:
 *   get:
 *     tags: [VenueType]
 *     summary: Get venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: venueType ID
 *     responses:
 *       200:
 *         description: venueType details
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
VenueTypeRouter.get('/getVenueTypeBiId/:id', venueTypeController.getVenueTypeBiId);

/**
 * @swagger
 * /VenueTypeRouter/updataVenueType/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update venueType by ID
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
 *              name:
 *                  string
 *     responses:
 *       200:
 *         description: venueType updated
 *       404:
 *         description: venueType not found
 *       500:
 *         description: Server error
 */
VenueTypeRouter.put('/updataVenueType/:id', venueTypeController.updataVenueType);

/**
 * @swagger
 * /VenueTypeRouter/deletVenueType/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: venueType ID
 *     responses:
 *       204:
 *         description: venueType deleted
 *       404:
 *         description: venueType not found
 *       500:
 *         description: Server error
 */
VenueTypeRouter.delete('/deletVenueType/:id', venueTypeController.deletVenueType);

module.exports = VenueTypeRouter
