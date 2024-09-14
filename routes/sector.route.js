const express = require('express');
const sectorRouter = express.Router();
const SectorController = require('../controllers/sector.controller');

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: sector management
 */

/**
 * @swagger
 * /sectorRouter/createSector:
 *   post:
 *     tags: [sector]
 *     summary: Create a new sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              sector_name:
 *                  string
 *     responses:
 *       201:
 *         description: sector created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
sectorRouter.post('/createSector', SectorController.createSector);

/**
 * @swagger
 * /sectorRouter/getSector:
 *   get:
 *     tags: [sector]
 *     summary: Get all sectors
 *     responses:
 *       200:
 *         description: List of sectors
 *       500:
 *         description: Server error
 */
sectorRouter.get('/getSector', SectorController.getSector);

/**
 * @swagger
 * /sectorRouter/getSectorBiId/{id}:
 *   get:
 *     tags: [sector]
 *     summary: Get sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: sector ID
 *     responses:
 *       200:
 *         description: sector details
 *       404:
 *         description: sector not found
 *       500:
 *         description: Server error
 */
sectorRouter.get('/getSectorBiId/:id', SectorController.getSectorBiId);

/**
 * @swagger
 * /sectorRouter/updataSector/{id}:
 *   put:
 *     tags: [sector]
 *     summary: Update sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: sector ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              sector_name:
 *                  string
 *     responses:
 *       200:
 *         description: sector updated
 *       404:
 *         description: sector not found
 *       500:
 *         description: Server error
 */
sectorRouter.put('/updataSector/:id', SectorController.updataSector);

/**
 * @swagger
 * /sectorRouter/deletSector/{id}:
 *   delete:
 *     tags: [sector]
 *     summary: Delete sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: sector ID
 *     responses:
 *       204:
 *         description: sector deleted
 *       404:
 *         description: sector not found
 *       500:
 *         description: Server error
 */
sectorRouter.delete('/deletSector/:id', SectorController.deletSector);

module.exports = sectorRouter
