module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
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

    Event.associate = (models) => {
        Event.hasMany(models.Ticket, {
            foreignKey: "event_id",
            as: "ticket_event"
        }),
        Event.hasMany(models.Seat, {
            foreignKey: "event_id",
            as: "seat_event"
        }),
       
        Event.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region"
        }),
        Event.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district"
        }),
        Event.belongsTo(models.VenueType, {
            foreignKey: "venue_type_id",
            as: "venueType"
        })
    }

    return Event;
};                                                 