const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Discaunt = sequelize.define("Discaunt", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        finish_data: {
            type: DataTypes.DATA,
            allowNull: false
        },
        discaunt: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Discaunt;
};