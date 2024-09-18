module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        service_fee: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ticket_type: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Ticket.associte = (models) => {
        Ticket.belongsTo(models.Status, {
            foregnKey: "status_id",
            as: "status"
        }),
        Ticket.belongsTo(models.Event, {
            foregnKey: "event_id",
            as: "event"
        }),
        Ticket.belongsTo(models.Seat, {
            foregnKey: "seat_id",
            as: "seat"
        }),
        Ticket.hasMany(models.Cart, {
            foregnKey: "ticket_id",
            as: "ticket"
        })
    }

    return Ticket;
};