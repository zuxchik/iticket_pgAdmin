module.exports = (sequelize, DataTypes) => {
    const VunuePhoto = sequelize.define("VunuePhoto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Ticket.associte = (models) => {
        Ticket.belongsTo(models.Venue, {
            foregnKey: "venue_id",
            as: "venue"
        })
    }

    return VunuePhoto;
};