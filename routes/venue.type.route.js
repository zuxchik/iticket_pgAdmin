const express = require('express');
const venueTypeRouter = express.Router();
const venueTypeControler = require('../Controllers/venue.type.controller');

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: venueType management
 */

/**
 * @swagger
 * /api/createVenueType:
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
 *               name: 
 *                  type: string    
 *     responses:
 *       201:
 *         description: VenueType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
venueTypeRouter.post('/createVenueType', venueTypeControler.createVenueType);

/**
 * @swagger
 * /api/getVenueType:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all venueTypes
 *     responses:
 *       200:
 *         description: List of venueTypes
 *       500:
 *         description: Server error
 */
venueTypeRouter.get('/getVenueType', venueTypeControler.getVenueType);

/**
 * @swagger
 * /api/geVenueTypesBiId/{id}:
 *   get:
 *     tags: [VenueType]
 *     summary: Get venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenueType ID
 *     responses:
 *       200:
 *         description: VenueType details
 *       404:
 *         description: VenueType not found
 *       500:
 *         description: Server error
 */
venueTypeRouter.get('/geVenueTypesBiId/:id', venueTypeControler.getVenueTypeBiId);

/**
 * @swagger
 * /api/updataVenueType/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenueType ID
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
 *         description: VenueType updated
 *       404:
 *         description: VenueType not found
 *       500:
 *         description: Server error
 */
venueTypeRouter.put('/updataVenueType/:id', venueTypeControler.updataVenueType);

/**
 * @swagger
 * /api/deletVenueType/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenueType ID
 *     responses:
 *       204:
 *         description: VenueType deleted
 *       404:
 *         description: VenueType not found
 *       500:
 *         description: Server error
 */
venueTypeRouter.delete('/deletVenueType/:id', venueTypeControler.deletVenueType);

module.exports = venueTypeRouter
