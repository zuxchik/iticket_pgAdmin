const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cart_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATA,
            allowNull: true
        },
        finished: {
            type: DataTypes.STRING,
            allowNull: true
        },
        payment_method_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        delivery_method_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discount_coupon_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status_id: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    

    return Booking;
};