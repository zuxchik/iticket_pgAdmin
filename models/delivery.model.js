const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Deliveriy = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Deliveriy;
};