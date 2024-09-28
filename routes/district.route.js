const express = require('express');
const districtRouter = express.Router();
const districtControler = require('../Controllers/district.cotroller.');

/**
 * @swagger
 * tags:
 *   name: District
 *   description: district management
 */

/**
 * @swagger
 * /api/createDistrict:
 *   post:
 *     tags: [District]
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *               region_id: 
 *                  type: string
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
districtRouter.post('/createDistrict', districtControler.createDistrict);

/**
 * @swagger
 * /api/getDistricts:
 *   get:
 *     tags: [District]
 *     summary: Get all districts
 *     responses:
 *       200:
 *         description: List of districts
 *       500:
 *         description: Server error
 */
districtRouter.get('/getDistricts', districtControler.getDistricts);

/**
 * @swagger
 * /api/geDistrictsBiId/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
districtRouter.get('/geDistrictsBiId/:id', districtControler.geDistrictsBiId);

/**
 * @swagger
 * /api/updataDistricts/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                  type: string
 *               login: 
 *                  type: string
 *               hashed_password: 
 *                  type: string
 *               is_active: 
 *                  type: boolean
 *               is_creator: 
 *                  type: boolean
 *     responses:
 *       200:
 *         description: District updated
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
districtRouter.put('/updataDistricts/:id', districtControler.updataDistricts);

/**
 * @swagger
 * /api/deletDistricts/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       204:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
districtRouter.delete('/deletDistricts/:id', districtControler.deletDistricts);

module.exports = districtRouter
