const express = require('express');
const regionRouter = express.Router();
const regionControler = require('../Controllers/region.controller');

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
 *                  type: string
 *              postpone:
 *                  type: string
 *     responses:
 *       201:
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
regionRouter.post('/createRegion', regionControler.createRegion);

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
regionRouter.get('/getRegion', regionControler.getRegion);

/**
 * @swagger
 * /api/geRegionsBiId/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
regionRouter.get('/geRegionsBiId/:id', regionControler.geRegionBiId);

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
 *         description: Region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *               postpone:
 *                  type: string
 *     responses:
 *       200:
 *         description: Region updated
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
regionRouter.put('/updataRegion/:id', regionControler.updataRegion);

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
 *         description: Region ID
 *     responses:
 *       204:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
regionRouter.delete('/deletRegion/:id', regionControler.deletRegion);

module.exports = regionRouter
