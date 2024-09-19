module.exports = (sequelize, DataTypes) => {
    const CustomerAddresss = sequelize.define("CustomerAddresss", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_index: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    CustomerAddresss.associate = (models) => {
        CustomerAddresss.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer"
        }),
        CustomerAddresss.belongsTo(models.Country, {
            foreignKey: "country_id",
            as: "country"
        }),
        CustomerAddresss.belongsTo(models.Flat, {
            foreignKey: "flat_id",
            as: "flat"
        }),
        CustomerAddresss.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region"
        }),
        CustomerAddresss.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district"
        })
    }

    return CustomerAddresss;
};                                                 