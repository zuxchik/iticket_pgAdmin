const express = require('express');
const lenuageRouter = express.Router();
const lenuageControler = require('../controllers/lenguage.controller');

/**
 * @swagger
 * tags:
 *   name: Lenuage
 *   description: lenuage management
 */

/**
 * @swagger
 * /api/createLanguage:
 *   post:
 *     tags: [Lenuage]
 *     summary: Create a new lenuage
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language: 
 *                  type: string
 *               description: 
 *                  type: string
 *     responses:
 *       201:
 *         description: Lenuage created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
lenuageRouter.post('/createLanguage', lenuageControler.createLanguage);

/**
 * @swagger
 * /api/getLanguages:
 *   get:
 *     tags: [Lenuage]
 *     summary: Get all lenuages
 *     responses:
 *       200:
 *         description: List of lenuages
 *       500:
 *         description: Server error
 */
lenuageRouter.get('/getLanguages', lenuageControler.getLanguages);

/**
 * @swagger
 * /api/geLanguagesBiId/{id}:
 *   get:
 *     tags: [Lenuage]
 *     summary: Get lenuage by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lenuage ID
 *     responses:
 *       200:
 *         description: Lenuage details
 *       404:
 *         description: Lenuage not found
 *       500:
 *         description: Server error
 */
lenuageRouter.get('/geLanguagesBiId/:id', lenuageControler.geLanguagesBiId);

/**
 * @swagger
 * /api/updataLanguages/{id}:
 *   put:
 *     tags: [Lenuage]
 *     summary: Update lenuage by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lenuage ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language: 
 *                  type: string
 *               description: 
 *                  type: string
 *     responses:
 *       200:
 *         description: Lenuage updated
 *       404:
 *         description: Lenuage not found
 *       500:
 *         description: Server error
 */
lenuageRouter.put('/updataLanguages/:id', lenuageControler.updataLanguages);

/**
 * @swagger
 * /api/deletLanguages/{id}:
 *   delete:
 *     tags: [Lenuage]
 *     summary: Delete lenuage by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lenuage ID
 *     responses:
 *       204:
 *         description: Lenuage deleted
 *       404:
 *         description: Lenuage not found
 *       500:
 *         description: Server error
 */
lenuageRouter.delete('/deletLanguages/:id', lenuageControler.deletLanguages);

module.exports = lenuageRouter
