module.exports = (sequelize, DataTypes) => {
    const VunuePhoto = sequelize.define("VunuePhoto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        venue_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return VunuePhoto;
};