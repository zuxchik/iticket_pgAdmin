module.exports = (sequelize, DataTypes) => {
    const Paymant = sequelize.define("Paymant", {
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
    
    

    return Paymant;
};                                                 