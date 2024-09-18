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
    
    Region.associte = (models) => {
        Region.hasMany(models.CustomerAddress, {
            foregnKey: "region_id",
            as: "region"
        })
    }

    return Region;
};                                                 