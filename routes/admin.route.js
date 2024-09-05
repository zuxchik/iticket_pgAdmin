const express = require('express');
const adminRoute = express.Router();
const adminControler = require('../Controllers/admin.Controllers');

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: admin management
 */

/**
 * @swagger
 * /adminRoute/createAdmin:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new admin
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
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
adminRoute.post('/createAdmin', adminControler.createAdmin);

/**
 * @swagger
 * /adminRoute/getAdmins:
 *   get:
 *     tags: [Admin]
 *     summary: Get all admins
 *     responses:
 *       200:
 *         description: List of admins
 *       500:
 *         description: Server error
 */
adminRoute.get('/getAdmins', adminControler.getAdmins);

/**
 * @swagger
 * /adminRoute/geAdminsBiId/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.get('/geAdminsBiId/:id', adminControler.geAdminsBiId);

/**
 * @swagger
 * /adminRoute/updataAdmins/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
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
 *         description: Admin updated
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.put('/updataAdmins/:id', adminControler.updataAdmins);

/**
 * @swagger
 * /adminRoute/deletAdmins/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.delete('/deletAdmins/:id', adminControler.deletAdmins);

module.exports = adminRoute
