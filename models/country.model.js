module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fineshedAt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Country.associate = (models) => {
        Country.hasMany(models.CustomerAddresss, {
            foreignKey: "country_id",
            as: "customeraddress_country"
        })
    }

    return Country;
};