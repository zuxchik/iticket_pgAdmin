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
        birth_date: {
            type: DataTypes.DATA,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lang_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Customer.beforeSave(async (customer, options) => {
        if (customer.changed("hashed_password")) {
            customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10)
        }
    });

    return Customer;
};