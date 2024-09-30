const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        birth_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Customer.associate = (models) => {
        Customer.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender"
        }),
        Customer.hasMany(models.CustomerAddresss, {
            foreignKey: "customer_id",
            as: "customerAdress"
        }),
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "customerCart"
        }),
        Customer.hasMany(models.CustomerCart, {
            foreignKey: "customer_id",
            as: "CustomerCart_customer"
        }),
        Customer.belongsTo(models.Language, {
            foreignKey: "lang_id",
            as: "language"
        })
    }

    Customer.beforeSave(async (customer, options) => {
        if (customer.changed("hashed_password")) {
            customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10)
        }
    });

    return Customer;
};                                                 