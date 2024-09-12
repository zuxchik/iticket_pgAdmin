const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const Admin_Moduls = require("./admin.model")(sequelize, Sequelize)
const Ticket = require("./ticket.model")(sequelize, Sequelize)
const Booking = require("./booking.model")(sequelize, Sequelize)

module.exports = { Admin_Moduls, Booking, Ticket, sequelize }