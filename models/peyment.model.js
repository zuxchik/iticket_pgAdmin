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
    
    Paymant.associte = (models) => {
        Paymant.hasMany(models.Booking, {
            foregnKey: "payment_method_id",
            as: "payment"
        })
    }  

    return Paymant;
};                                                 