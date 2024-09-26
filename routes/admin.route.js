const express = require('express');
const adminRouter = express.Router();
const adminControler = require('../controllers/admin.Controllers');

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: admin management
 */

/**
 * @swagger
 * /api/createAdmin:
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
adminRouter.post('/createAdmin', adminControler.createAdmin);

/**
 * @swagger
 * /api/getAdmins:
 *   get:
 *     tags: [Admin]
 *     summary: Get all admins
 *     responses:
 *       200:
 *         description: List of admins
 *       500:
 *         description: Server error
 */
adminRouter.get('/getAdmins', adminControler.getAdmins);

/**
 * @swagger
 * /api/geAdminsBiId/{id}:
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
adminRouter.get('/geAdminsBiId/:id', adminControler.geAdminsBiId);

/**
 * @swagger
 * /api/updataAdmins/{id}:
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
adminRouter.put('/updataAdmins/:id', adminControler.updataAdmins);

/**
 * @swagger
 * /api/deletAdmins/{id}:
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
adminRouter.delete('/deletAdmins/:id', adminControler.deletAdmins);

module.exports = adminRouter
