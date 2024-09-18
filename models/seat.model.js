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
    
    Seat.associte = (models) => {
        Seat.hasMany(models.CustomerAddress, {
            foregnKey: "region_id",
            as: "region"
        })
    }

    return Seat;
};                                                 