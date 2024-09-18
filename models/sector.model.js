module.exports = (sequelize, DataTypes) => {
    const Sector = sequelize.define("Sector", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sector_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Sector.associte = (models) => {
        Sector.hasMany(models.Ticket, {
            foregnKey: "sector_id",
            as: "sector"
        })
    }

    return Sector;
};                                                 