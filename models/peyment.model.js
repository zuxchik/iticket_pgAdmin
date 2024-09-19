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
    
    Paymant.associate = (models) => {
        Paymant.hasMany(models.Booking, {
            foreignKey: "payment_method_id",
            as: "bookings_peyment"
        })
    }  

    return Paymant;
};                                                 