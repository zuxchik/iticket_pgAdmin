const express = require('express');
const adminRoute = express.adminRoute();
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
 *     tags: [admin]
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
 *         description: User created
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
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */
adminRoute.get('/getAdmins', adminControler.getAdmins);

/**
 * @swagger
 * /adminRoute/geAdminsBiId/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
adminRoute.get('/geAdminsBiId/:id', adminControler.geAdminsBiId);

/**
 * @swagger
 * /adminRoute/updataAdmins/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
adminRoute.put('/updataAdmins/:id', adminControler.updataAdmins);

/**
 * @swagger
 * /adminRoute/deletAdmins/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       204:
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
adminRoute.delete('/deletAdmins/:id', adminControler.deletAdmins);

module.exports = adminRoute
