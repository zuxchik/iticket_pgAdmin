module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
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
            type: DataTypes.STRING,
            allowNull: false
        },
        fineshedAt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Cart.associate = (models) => {
        Cart.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "bookings_cart"
        }),
        Cart.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "status"
        }),
        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer"
        }),
        Cart.belongsTo(models.Ticket, {
            foreignKey: "ticket_id",
            as: "ticket"
        })
    }

    return Cart;
};                                                 