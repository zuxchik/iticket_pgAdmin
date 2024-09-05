const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("Card", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: false
        },
        ticket_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATA,
            allowNull: true
        },
        finishedAt: {
            type: DataTypes.DATA,
            allowNull: true
        },
        status_id: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    

    return Card;
};