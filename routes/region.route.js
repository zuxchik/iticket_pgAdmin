const express = require('express');
const regionRouter = express.Router();
const RegionController = require('../controllers/region.controller');

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: region management
 */

/**
 * @swagger
 * /api/createRegion:
 *   post:
 *     tags: [Region]
 *     summary: Create a new region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  string
 *              postpone:
 *                  string
 *     responses:
 *       201:
 *         description: region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
regionRouter.post('/createRegion', RegionController.createRegion);

/**
 * @swagger
 * /api/getRegion:
 *   get:
 *     tags: [Region]
 *     summary: Get all regions
 *     responses:
 *       200:
 *         description: List of regions
 *       500:
 *         description: Server error
 */
regionRouter.get('/getRegion', RegionController.getRegion);

/**
 * @swagger
 * /api/geRegionBiId/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: region ID
 *     responses:
 *       200:
 *         description: region details
 *       404:
 *         description: region not found
 *       500:
 *         description: Server error
 */
regionRouter.get('/geRegionBiId/:id', RegionController.geRegionBiId);

/**
 * @swagger
 * /api/updataRegion/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  string
 *              postpone:
 *                  string
 *     responses:
 *       200:
 *         description: region updated
 *       404:
 *         description: region not found
 *       500:
 *         description: Server error
 */
regionRouter.put('/updataRegion/:id', RegionController.updataRegion);

/**
 * @swagger
 * /api/deletRegion/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: region ID
 *     responses:
 *       204:
 *         description: region deleted
 *       404:
 *         description: region not found
 *       500:
 *         description: Server error
 */
regionRouter.delete('/deletRegion/:id', RegionController.deletRegion);

module.exports = regionRouter
