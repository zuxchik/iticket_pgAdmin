module.exports = (sequelize, DataTypes) => {
    const Flet = sequelize.define("Flet", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        etaj: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return Flet;
};