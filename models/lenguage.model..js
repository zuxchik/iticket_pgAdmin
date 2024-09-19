module.exports = (sequelize, DataTypes) => {
    const Language = sequelize.define("Language", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Language.associate = (models) => {
        Language.hasMany(models.Customer, {
            foreignKey: "lang_id",
            as: "language"
        })
    }

    return Language;
};