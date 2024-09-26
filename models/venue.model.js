module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venue_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Venue.associate = (models) => {
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seat_venue"
        }),
        Venue.hasMany(models.Event, {
            foreignKey: "venue_id",
            as: "event_venue"
        }),
        Venue.hasMany(models.VunuePhoto, {
            foreignKey: "venue_id",
            as: "photo_venue"
        }),
        Venue.belongsTo(models.VenueType, {
            foreignKey: "venue_type_id",
            as: "venue_type"
        }),
        Venue.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region"
        }),
        Venue.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district"
        })
    }

    return Venue;
};