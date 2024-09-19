module.exports = (sequelize, DataTypes) => {
    const Flat = sequelize.define("Flat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        etaj: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        condiition: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Flat.associate = (models) => {
        Flat.belongsTo(models.CustomerAddresss, {
            foreignKey: "flat_id",
            as: "flat"
        })
    }


    return Flat;
};                                                 