const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATA,
            allowNull: false
        },
        start_time: {
            type: DataTypes.DATA,
            allowNull: false
        },
        finish_date: {
            type: DataTypes.DATA,
            allowNull: false
        },
        finish_time: {
            type: DataTypes.DATA,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_type_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        human_category_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lang_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATA,
            allowNull: true
        }
    });
    
    

    return Booking;
};