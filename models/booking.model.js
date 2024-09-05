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
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATA,
            allowNull: false
        },
        finished: {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_method_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery_method_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discount_coupon_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Booking;
};