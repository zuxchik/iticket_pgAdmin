const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const admin = require("./admin.Schema")(sequelize, Sequelize)

module.exports = { admin, sequelize }