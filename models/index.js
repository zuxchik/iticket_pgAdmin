const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const Admin = require("./admin.model")(sequelize, Sequelize)
const Booking = require("./booking.model")(sequelize, Sequelize)
const Ticket = require("./ticket.model")(sequelize, Sequelize)
const VenueType = require("./venue.photo.model")(sequelize, Sequelize)
const VenuePhoto = require("./venue.type.model")(sequelize, Sequelize)
const Flat = require("./flat.model")(sequelize, Sequelize)
const Gender = require("./gender.model")(sequelize, Sequelize)
const Paymant = require("./peyment.model")(sequelize, Sequelize)
const Region = require("./region.model")(sequelize, Sequelize)
const HumanCategory = require("./human.category.model")(sequelize, Sequelize)
const Sector = require("./sector.model")(sequelize, Sequelize)

module.exports = { Admin, HumanCategory, Sector, Flat, Gender, Paymant, Region, Booking, Ticket, VenueType, VenuePhoto, sequelize }