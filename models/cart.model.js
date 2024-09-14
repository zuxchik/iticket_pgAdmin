module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("Card", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ticket_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_id: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Card.associte = (model) => {
        Card.hasMany(model.Booking,{
            foregnKey:"card_id",
            as:"bookings"
        })
    }

    return Card;
};                                                 