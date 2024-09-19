module.exports = (sequelize, DataTypes) => {
    const SeatType = sequelize.define("SeatType", {
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
    
    SeatType.associte = (models) => {
        SeatType.hasMany(models.Seat, {
            foreignKey: "seat_type_id",
            as: "seat_seattype"
        })
    }

    return SeatType;
};                                                 