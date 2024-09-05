const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const Admin_Moduls = require("./admin.Schema")(sequelize, Sequelize)

module.exports = { Admin_Moduls, sequelize }