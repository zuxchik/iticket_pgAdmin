const express = require('express');
const venueRouter = express.Router();
const venueControler = require('../Controllers/venue.controller');

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: venue management
 */

/**
 * @swagger
 * /api/createVenue:
 *   post:
 *     tags: [Venue]
 *     summary: Create a new venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *               address: 
 *                  type: string
 *               location: 
 *                  type: string
 *               site: 
 *                  type: string
 *               phone: 
 *                  type: string
 *               venue_type_id: 
 *                  type: number
 *               schema: 
 *                  type: string
 *               region_id: 
 *                  type: number
 *               district_id: 
 *                  type: number    
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
venueRouter.post('/createVenue', venueControler.createVenue);

/**
 * @swagger
 * /api/getVenues:
 *   get:
 *     tags: [Venue]
 *     summary: Get all venues
 *     responses:
 *       200:
 *         description: List of venues
 *       500:
 *         description: Server error
 */
venueRouter.get('/getVenues', venueControler.getVenues);

/**
 * @swagger
 * /api/geVenuesBiId/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
venueRouter.get('/geVenuesBiId/:id', venueControler.geVenuesBiId);

/**
 * @swagger
 * /api/updataVenues/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Update venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *               address: 
 *                  type: string
 *               location: 
 *                  type: string
 *               site: 
 *                  type: string
 *               phone: 
 *                  type: string
 *               venue_type_id: 
 *                  type: number
 *               schema: 
 *                  type: string
 *               region_id: 
 *                  type: number
 *               district_id: 
 *                  type: number    
 *     responses:
 *       200:
 *         description: Venue updated
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
venueRouter.put('/updataVenues/:id', venueControler.updataVenues);

/**
 * @swagger
 * /api/deletVenues/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Delete venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       204:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
venueRouter.delete('/deletVenues/:id', venueControler.deletVenues);

module.exports = venueRouter
