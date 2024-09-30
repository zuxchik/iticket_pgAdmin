const express = require('express');
const venuePhotoRouter = express.Router();
const venuePhotoControler = require('../Controllers/venue.photo.controller');

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: venuePhoto management
 */

/**
 * @swagger
 * /api/createVunuePhoto:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create a new venuePhoto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id: 
 *                  type: number
 *               url: 
 *                  type: string
 *     responses:
 *       201:
 *         description: VenuePhoto created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
venuePhotoRouter.post('/createVunuePhoto', venuePhotoControler.createVunuePhoto);

/**
 * @swagger
 * /api/getVenuPhoto:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all venuePhotos
 *     responses:
 *       200:
 *         description: List of venuePhotos
 *       500:
 *         description: Server error
 */
venuePhotoRouter.get('/getVenuPhoto', venuePhotoControler.getVenuPhoto);

/**
 * @swagger
 * /api/getVenuPhotoBiId/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get venuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto details
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRouter.get('/getVenuPhotoBiId/:id', venuePhotoControler.getVenuPhotoBiId);

/**
 * @swagger
 * /api/updataVenuPhoto/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update venuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
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
 *         description: VenuePhoto updated
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRouter.put('/updataVenuPhoto/:id', venuePhotoControler.updataVenuPhoto);

/**
 * @swagger
 * /api/deletVenuPhoto/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete venuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     responses:
 *       204:
 *         description: VenuePhoto deleted
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRouter.delete('/deletVenuPhoto/:id', venuePhotoControler.deletVenuPhoto);

module.exports = venuePhotoRouter
