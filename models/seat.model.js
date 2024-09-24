module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sector_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        row_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_in_schema: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Seat.associate = (models) => {
        Seat.hasMany(models.Ticket, {
            foreignKey: "seat_id",
            as: "ticket_seat"
        })
        Seat.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue"
        }),
        Seat.belongsTo(models.SeatType, {
            foreignKey: "seat_type_id",
            as: "seattype"
        }),
        Seat.belongsTo(models.Sector, {
            foreignKey: "sector_id",
            as: "sector"
        })
    }

    return Seat;
};                                                 