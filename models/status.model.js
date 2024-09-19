module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define("Status", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Status.associate = (models) => {
        Status.hasMany(models.Booking,{
            foreignKey:"status_id",
            as:"bookings_status"
        }),
        Status.hasMany(models.Cart,{
            foreignKey:"status_id",
            as:"carts_status"
        }),
        Status.hasMany(models.Ticket,{
            foreignKey:"status_id",
            as:"tickets_status"
        })
    }

    return Status;
};                                                 