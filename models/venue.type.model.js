module.exports = (sequelize, DataTypes) => {
    const VenueType = sequelize.define("VenueType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    

    return VenueType;
};