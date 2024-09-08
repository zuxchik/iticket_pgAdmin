const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sector_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        seat_type_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Seat;
};