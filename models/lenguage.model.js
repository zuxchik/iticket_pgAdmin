module.exports = (sequelize, DataTypes) => {
    const Lenguage = sequelize.define("Lenguage", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    return Lenguage;
};