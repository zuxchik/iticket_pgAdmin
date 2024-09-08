module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postpone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    

    return Region;
};