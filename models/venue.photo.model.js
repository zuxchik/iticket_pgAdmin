const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        venue_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Booking;
};