const express = require('express');
const venuePhotoRouter = express.Router();
const venuePhotoController = require('../controllers/venue.photo.controller');

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: VenuePhoto management
 */

/**
 * @swagger
 * /api/createTicket:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create a new Venuephoto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              venue_id:
 *                  string
 *              url:
 *                  string
 *     responses:
 *       201:
 *         description: Venuephoto created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
venuePhotoRouter.post('/createVunuePhoto', venuePhotoController.createVunuePhoto);

/**
 * @swagger
 * /api/getVenuPhoto:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all Venuephoto
 *     responses:
 *       200:
 *         description: List of Venuephoto
 *       500:
 *         description: Server error
 */
venuePhotoRouter.get('/getVenuPhoto', venuePhotoController.getVenuPhoto);

/**
 * @swagger
 * /api/getVenuPhotoBiId/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get VenuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venuephoto ID
 *     responses:
 *       200:
 *         description: Venuephoto details
 *       404:
 *         description: booking not found
 *       500:
 *         description: Server error
 */
venuePhotoRouter.get('/getVenuPhotoBiId/:id', venuePhotoController.getVenuPhotoBiId);

/**
 * @swagger
 * /api/updataVenuPhoto/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update VenuePhoto by ID
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
 *              venue_id:
 *                  string
 *              url:
 *                  string
 *     responses:
 *       200:
 *         description: Venuephoto updated
 *       404:
 *         description: Venuephoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRouter.put('/updataVenuPhoto/:id', venuePhotoController.updataVenuPhoto);

/**
 * @swagger
 * /api/deletVenuPhoto/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete Venuephoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venuephoto ID
 *     responses:
 *       204:
 *         description: Venuephoto deleted
 *       404:
 *         description: Venuephoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRouter.delete('/deletVenuPhoto/:id', venuePhotoController.deletVenuPhoto);

module.exports = venuePhotoRouter
