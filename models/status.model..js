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

    Status.associte = (models) => {
        Status.hasMany(models.Booking,{
            foregnKey:"status_id",
            as:"status"
        }),
        Status.hasMany(models.Cart,{
            foregnKey:"status_id",
            as:"status"
        }),
        Status.hasMany(models.Ticket,{
            foregnKey:"status_id",
            as:"status"
        })
    }

    return Status;
};                                                 