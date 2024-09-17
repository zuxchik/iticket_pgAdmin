module.exports = (sequelize, DataTypes) => {        
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    

    return Country;
};