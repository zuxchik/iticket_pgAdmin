const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const Admin = require("./admin.model")(sequelize, Sequelize)
const Booking = require("./booking.model")(sequelize, Sequelize)
const Ticket = require("./ticket.model")(sequelize, Sequelize)
const TicketType = require("./ticket.type..model")(sequelize, Sequelize)
const VenueType = require("./venue.type.model")(sequelize, Sequelize)
const VenuePhoto = require("./venue.photo.model")(sequelize, Sequelize)
const Venue = require("./venue.model")(sequelize, Sequelize)
const Flat = require("./flat.model")(sequelize, Sequelize)
const Gender = require("./gender.model")(sequelize, Sequelize)
const Paymant = require("./peyment.model")(sequelize, Sequelize)
const Region = require("./region.model")(sequelize, Sequelize)
const HumanCategory = require("./human.category.model")(sequelize, Sequelize)
const Sector = require("./sector.model")(sequelize, Sequelize)
const Status = require("./status.model")(sequelize, Sequelize)
const Country = require("./country.model")(sequelize, Sequelize)
const CustomerAddress = require("./customer.address.model")(sequelize, Sequelize)
const CustomerCart = require("./customer.card.model")(sequelize, Sequelize)
const Customer = require("./customer.model")(sequelize, Sequelize)
const District = require("./district.model")(sequelize, Sequelize)
const Discount = require("./discount.model")(sequelize, Sequelize)
const Delivery = require("./delivery.model")(sequelize, Sequelize)
const Seat = require("./seat.model")(sequelize, Sequelize)
const SeatType = require("./seat.type.model")(sequelize, Sequelize)
const Language = require("./lenguage.model")(sequelize, Sequelize)
const Event = require("./event.model")(sequelize, Sequelize)
const EventType = require("./event.type.model")(sequelize, Sequelize)
const Cart = require("./cart.model")(sequelize, Sequelize)

Discount.associate(sequelize.models)
Venue.associate(sequelize.models)
Seat.associate(sequelize.models)
SeatType.associate(sequelize.models)
Event.associate(sequelize.models)
EventType.associate(sequelize.models)
Delivery.associate(sequelize.models)
TicketType.associate(sequelize.models)
District.associate(sequelize.models)
Customer.associate(sequelize.models)
Status.associate(sequelize.models)
Language.associate(sequelize.models)
Cart.associate(sequelize.models)
CustomerCart.associate(sequelize.models)
CustomerAddress.associate(sequelize.models)
Country.associate(sequelize.models)
HumanCategory.associate(sequelize.models)
Sector.associate(sequelize.models)
Flat.associate(sequelize.models)
Gender.associate(sequelize.models)
Paymant.associate(sequelize.models)
Region.associate(sequelize.models)
Ticket.associate(sequelize.models)
VenueType.associate(sequelize.models)
VenuePhoto.associate(sequelize.models)

module.exports = {
    Admin,
    Discount,
    Venue,
    Seat,
    SeatType,
    Event,
    EventType,
    Delivery,
    TicketType,
    District,
    Customer,
    Status,
    Language,
    Cart,
    CustomerCart,
    CustomerAddress,
    Country,
    HumanCategory,
    Sector,
    Flat,
    Gender,
    Paymant,
    Region,
    Booking,
    Ticket,
    VenueType,
    VenuePhoto,
    sequelize
}