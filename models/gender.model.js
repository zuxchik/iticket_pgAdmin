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
    
    Gender.associte = (model) => {
        Gender.hasMany(model.HumanCategory,{
            foregnKey:"gender_id",
            as:"humanCategory"
        })
    }

    return Gender;
};                                                 