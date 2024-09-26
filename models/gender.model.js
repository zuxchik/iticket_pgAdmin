module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gender_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Gender.associate = (models) => {
        Gender.hasMany(models.HumanCategory, {
            foreignKey: "gender_id",
            as: "humanCategory_gender"
        });

        Gender.hasMany(models.Customer, {
            foreignKey: "gender_id",
            as: "customer_gender"
        });
    };

    return Gender;
};
