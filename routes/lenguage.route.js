const express = require('express');
const lenuageRouter = express.Router();
const lenuageControler = require('../Controllers/lenuage.Controllers');

/**
 * @swagger
 * tags:
 *   name: Lenuage
 *   description: lenuage management
 */

/**
 * @swagger
 * /lenuageRouter/createLenuage:
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
 *       201:
 *         description: Lenuage created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
lenuageRouter.post('/createLenuage', lenuageControler.createLenuage);

/**
 * @swagger
 * /lenuageRouter/getLenuages:
 *   get:
 *     tags: [Lenuage]
 *     summary: Get all lenuages
 *     responses:
 *       200:
 *         description: List of lenuages
 *       500:
 *         description: Server error
 */
lenuageRouter.get('/getLenuages', lenuageControler.getLenuages);

/**
 * @swagger
 * /lenuageRouter/geLenuagesBiId/{id}:
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
lenuageRouter.get('/geLenuagesBiId/:id', lenuageControler.geLenuagesBiId);

/**
 * @swagger
 * /lenuageRouter/updataLenuages/{id}:
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
 *         description: Lenuage updated
 *       404:
 *         description: Lenuage not found
 *       500:
 *         description: Server error
 */
lenuageRouter.put('/updataLenuages/:id', lenuageControler.updataLenuages);

/**
 * @swagger
 * /lenuageRouter/deletLenuages/{id}:
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
lenuageRouter.delete('/deletLenuages/:id', lenuageControler.deletLenuages);

module.exports = lenuageRouter
