const express = require('express');
const regionRouter = express.Router();
const RegionController = require('../controllers/region.controller');

/**
 * @swagger
 * tags:
 *   name: region
 *   description: region management
 */

/**
 * @swagger
 * /regionRouter/createRegion:
 *   post:
 *     tags: [region]
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
 * /regionRouter/getRegion:
 *   get:
 *     tags: [region]
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
 * /regionRouter/geRegionBiId/{id}:
 *   get:
 *     tags: [region]
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
 * /regionRouter/updataRegion/{id}:
 *   put:
 *     tags: [region]
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
 * /regionRouter/deletRegion/{id}:
 *   delete:
 *     tags: [region]
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
