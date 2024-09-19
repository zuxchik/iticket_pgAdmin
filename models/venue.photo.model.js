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

    VunuePhoto.associate = (models) => {
        VunuePhoto.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue"
        })
    }

    return VunuePhoto;
};