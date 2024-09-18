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
            type: DataTypes.STRING,
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

    CustomerAddresss.associte = (models) => {
        CustomerAddresss.belongsTo(models.Customer, {
            foregnKey: "customer_id",
            as: "customer"
        }),
        CustomerAddresss.belongsTo(models.Country, {
            foregnKey: "country_id",
            as: "country"
        }),
        CustomerAddresss.belongsTo(models.Flat, {
            foregnKey: "flat_id",
            as: "flat"
        }),
        CustomerAddresss.belongsTo(models.Region, {
            foregnKey: "region_id",
            as: "region"
        }),
        CustomerAddresss.belongsTo(models.District, {
            foregnKey: "district_id",
            as: "region"
        })
    }

    return CustomerAddresss;
};                                                 