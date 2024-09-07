module.exports = (sequelize, DataTypes) => {
    const HumanCategory = sequelize.define("HumanCategory", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        finish_age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    
    

    return HumanCategory;
};