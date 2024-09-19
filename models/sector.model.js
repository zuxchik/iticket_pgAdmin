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

    Sector.associate = (models) => {
        Sector.hasMany(models.Ticket, {
            foreignKey: "sector_id",
            as: "sector"
        })
    }

    return Sector;
};                                                 