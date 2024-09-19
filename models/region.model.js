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
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Region.associate = (models) => {
        Region.hasMany(models.CustomerAddress, {
            foreignKey: "region_id",
            as: "region"
        })
    }

    return Region;
};                                                 