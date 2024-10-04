const express = require('express');
const sectorRouter = express.Router();
const SectorController = require('../Controllers/sector.controller');

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: sector management
 */

/**
 * @swagger
 * /api/createSector:
 *   post:
 *     tags: [Sector]
 *     summary: Create a new sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name: 
 *                  type: string
 *     responses:
 *       201:
 *         description: Sector created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
sectorRouter.post('/createSector', SectorController.createSector);

/**
 * @swagger
 * /api/getSector:
 *   get:
 *     tags: [Sector]
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
 * /api/getSectorBiId/{id}:
 *   get:
 *     tags: [Sector]
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
 * /api/updataSector/{id}:
 *   put:
 *     tags: [Sector]
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
 * /api/deletSector/{id}:
 *   delete:
 *     tags: [Sector]
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
