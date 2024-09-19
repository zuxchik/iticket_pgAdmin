module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("District", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    District.associate = (models) => {
        District.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region"
        }),
        District.hasMany(models.CustomerAddress, {
            foreignKey: "district_id",
            as: "CustomerAddress_district"
        }),
        District.hasMany(models.Event, {
            foreignKey: "district_id",
            as: "event_district"
        })
    }

    return District;
};                                                 