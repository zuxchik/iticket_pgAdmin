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
    
    Gender.associte = (models) => {
        Gender.hasMany(models.HumanCategory,{
            foregnKey:"gender_id",
            as:"humanCategory"
        }),
        Gender.hasMany(models.Customer, {
            foregnKey: "gender_id",
            as: "gender"
        })
    }

    return Gender;
};                                                 