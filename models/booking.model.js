module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finished: {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_method_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery_method_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discount_coupon_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });


    Booking.associate = (models) => {
        Booking.belongsTo(models.Cart, {
            foreingKey: "cart_id",
            as: 'cart'
        }),
        Booking.belongsTo(models.Paymant, {
            foreignKey: "payment_method_id",
            as: "payment"
        }),
        Booking.belongsTo(models.Status, {
            foreingKey: "status_id",
            as: 'status'
        })
    }


    return Booking;
};