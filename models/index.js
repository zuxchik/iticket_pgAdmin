const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const Admin = require("./admin.model")(sequelize, Sequelize)
const Booking = require("./booking.model")(sequelize, Sequelize)
const Ticket = require("./ticket.model")(sequelize, Sequelize)
const VenueType = require("./venue.photo.model")(sequelize, Sequelize)
const VenuePhoto = require("./venue.type.model")(sequelize, Sequelize)

module.exports = { Admin, Booking, Ticket, VenueType, VenuePhoto, sequelize }