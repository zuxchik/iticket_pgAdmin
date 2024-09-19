module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define("EventType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    EventType.associate = (models) => {
        EventType.hasMany(models.Event, {
            foreignKey: "venue_type_id",
            as: "event_eventType"
        })
    }

    return EventType;
};                                                 