const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Booking;
};