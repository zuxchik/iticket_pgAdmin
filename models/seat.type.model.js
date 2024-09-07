module.exports = (sequelize, DataTypes) => {
    const SeatType = sequelize.define("SeatType", {
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
    
    

    return SeatType;
};