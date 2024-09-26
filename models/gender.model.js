module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
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

    Gender.associate = (models) => {
        Gender.hasMany(models.HumanCategory, {
            foreignKey: "gender_id",  // Ensure this matches the field in HumanCategory
            as: "human_categories"
        });
        
        Gender.hasMany(models.Customer, {
            foreignKey: "gender_id",
            as: "customer_gender"
        });
    };

    return Gender;
};
