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
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        birth_date: {
            type: DataTypes.DATA,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lang_id: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    Customer.beforeSave(async (customer, options) => {
        if (customer.changed("hashed_password")) {
            customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10)
        }
    });

    return Customer;
};