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

    Customer.associte = (models) => {
        Customer.belongsTo(models.Gender, {
            foregnKey: "gender_id",
            as: "gender"
        }),
        Customer.hasMany(models.CustomerAddress, {
            foregnKey: "customer_id",
            as: "customer"
        }),
        Customer.hasMany(models.Cart, {
            foregnKey: "customer_id",
            as: "customer"
        }),
        Customer.hasMany(models.CustomerCart, {
            foregnKey: "customer_id",
            as: "customer"
        }),
        Customer.belongsTo(models.Language, {
            foregnKey: "lang_id",
            as: "language"
        })
    }

    return Customer;
};                                                 