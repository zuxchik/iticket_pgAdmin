module.exports = (sequelize, DataTypes) => {
    const CustomerCart = sequelize.define("CustomerCart", {
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
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    CustomerCart.associte = (models) => {
        CustomerCart.belongsTo(models.Customer, {
            foregnKey: "customer_id",
            as: "customer"
        })
    }

    return CustomerCart;
};                                                 