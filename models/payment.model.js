module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
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
    
    

    return Payment;
};