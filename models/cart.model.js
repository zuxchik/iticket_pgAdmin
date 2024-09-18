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

    Cart.associte = (models) => {
        Cart.hasMany(models.Booking, {
            foregnKey: "card_id",
            as: "cart"
        }),
        Cart.belongsTo(models.Status, {
            foregnKey: "status_id",
            as: "status"
        }),
        Cart.belongsTo(models.Customer, {
            foregnKey: "customer_id",
            as: "customer"
        }),
        Cart.belongsTo(models.Ticket, {
            foregnKey: "ticket_id",
            as: "ticket"
        })
    }

    return Cart;
};                                                 